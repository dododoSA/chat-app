<?php
namespace AppBundle\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use AppBundle\Entity\Thread;
use AppBundle\Entity\Channel;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use AppBundle\Form\ThreadType;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

class ThreadController extends Controller
{

    /**
     * @Route("/channel/{name}/thread", name="thread_get")
     */
    public function getThreads($name) {
      $channel = $this->getDoctrine()->getRepository(Channel::class)->findOneByName($name);

      if(!$channel) {
        throw $this->createNotFoundException('No channel found for name: '.$name);
      }

      $threads = $this->getDoctrine()->getRepository(Thread::class)->findByChannelId($channel->getId());

      $serializer = new Serializer([new ObjectNormalizer()], [new JsonEncoder()]);
      $jsonContent = $serializer->serialize($threads, 'json');
      $response = new Response();
      $response->setContent($jsonContent);
      $response->headers->set('Content-Type', 'application/json');
      return $response;
    }
  
    /**
     * @Route("/channel/{name}/thread/new", name="thread_new")
     */
    public function newAction(Request $request, $name){
      $jsonData = $request->getContent();

      $data = json_decode($jsonData, true);

      $channel = $this->getDoctrine()->getRepository(Channel::class)->findOneByName($data['channelName']);
      if (!$channel) {
        throw $this->createNotFoundException('No channel found for name: '.$data['channelName']);
      }

      $thread = new Thread();
      $thread->setContent($data['content']);
      $thread->setChannelId($channel->getId());
      $thread->setUserId(1);//

      $em = $this->getDoctrine()->getManager();
      $em->persist($thread);
      $em->flush();
      
      $serializer = new Serializer([new ObjectNormalizer()], [new JsonEncoder()]);
      $jsonContent = $serializer->serialize($thread, 'json');
      $response = new Response();
      $response->setContent($jsonContent);
      $response->headers->set('Content-Type', 'application/json');

      return $response;
    }


    /**
     * @Route("/channel/{name}/thread/edit", name="thread_edit")
     */
    public function editAction(Request $request, $name) {
      $jsonData = $request->getContent();

      $data = json_decode($jsonData, true);


      $channel = $this->getDoctrine()->getRepository(Channel::class)->findOneByName($data['beforeName']);

      if(!$channel) {
        throw $this->createNotFoundException('No channel found for name: '.$data['beforeName']);
      }

      if($this->getDoctrine()->getRepository(Channel::class)->findOneByName($data['afterName'])) {
        return new Response('Already exist', 409);
      }

      $channel->setName($data['afterName']);

      $em = $this->getDoctrine()->getManager();
      $em->flush();
      
      $response = new Response();
      $response->setContent(json_encode([
        'name' => $data['afterName']
      ]));
      $response->headers->set('Content-Type', 'application/json');
      return $response;


      

      $thread = $this->getDoctrine()->getRepository(Thread::class)->find($id);

      if(!$thread) {
        throw $this->createNotFoundException('No thread found for name: '.$name);
      }


      $form = $this->createForm(ThreadType::class, $thread);

      $form->handleRequest($request);

      if($form->isSubmitted() && $form->isValid() && $this->getUser()->getId() == $thread->getUserId()) {
        $thread = $form->getData();

        $em = $this->getDoctrine()->getManager();
        $em->flush();

        return $this->redirectToRoute('channel_show', ['name' => $name]);
      }

      return $this->render('thread/edit.html.twig', [
        'form' => $form->createView(),
        'channelName' => $name,
      ]);
    }

    /**
     * @Route("/channel/{name}/thread/{id}/delete", name="thread_delete")
     */
    public function deleteAction(Request $request, $name, $id) {
      $thread = $this->getDoctrine()->getRepository(Thread::class)->findOneById($id);

      if(!$thread) {
        throw $this->createNotFoundException('No channel found for name: '.$name);
      }

      if ($this->getUser()->getId() == $thread->getUserId()){
        $em = $this->getDoctrine()->getManager();
        $em->remove($thread);
        $em->flush();
      }

      return $this->redirectToRoute('channel_show', ['name' => $name]);
    }
}

