<?php
namespace AppBundle\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;
use AppBundle\Entity\Channel;
use AppBundle\Entity\Thread;
use AppBundle\Entity\User;
use AppBundle\Form\ThreadType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;



class ChannelController extends Controller
{
    /**
     * @Route("/channel", name="channel_index")
     */
    /*public function indexAction() {
      $channels = $this->getDoctrine()->getRepository(Channel::class)->findAll();

      return $this->render('channel/index.html.twig', [
        'channels' => $channels,
      ]);
    }*/

    public function indexAction() {
      $channels = $this->getDoctrine()->getRepository(Channel::class)->findAll();

      if(!$channels) {
        throw $this->createNotFoundException('No channel found for channels');
      }

      $serializer = new Serializer([new ObjectNormalizer()], [new JsonEncoder()]);
      $jsonContent = $serializer->serialize($channels, 'json');
      $response = new Response();
      $response->setContent($jsonContent);
      $response->headers->set('Content-Type', 'application/json');
      return $response;
    }
  
    /**
     * @Route("/channel/new", name="channel_new")
     */
    public function newAction(Request $request){
      $jsonData = $request->getContent();

      $data = json_decode($jsonData, true);

      if($this->getDoctrine()->getRepository(Channel::class)->findOneByName($data['name'])) {
        return new Response('Aleady exist', 409);
      }

      $channel = new Channel();
      $channel->setName($data['name']);

      $em = $this->getDoctrine()->getManager();
      $em->persist($channel);
      $em->flush();
      
      $response = new Response();
      $response->setContent($jsonData);
      $response->headers->set('Content-Type', 'application/json');
      return $response;
    }

    /**
     * @Route("/channel/edit", name="channel_edit")
     */
    public function editAction(Request $request) {
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
    }

    /**
     * @Route("/channel/{name}/show", name="channel_show")
     */
    
    public function showAction($name) {
      $thread = new Thread();
      $form = $this->createForm(ThreadType::class, $thread, [
        'action' => $this->generateUrl('thread_new', ['name' => $name]),
        'method' => 'POST',
      ]);

      $channel = $this->getDoctrine()->getRepository(Channel::class)->findOneByName($name);
      $channels = $this->getDoctrine()->getRepository(Channel::class)->findAll();

      if(!$channel) {
        throw $this->createNotFoundException('No channel found for name: '.$name);
      }
      
      $threads = $this->getDoctrine()->getRepository(Thread::class)->findByChannelId($channel->getId());
      foreach ($threads as $t) {
        $t->setUsername($this->getDoctrine()->getRepository(User::class)->findOneById($t->getUserId())->getUsername());
      }

      return $this->render('channel/show.html.twig', [
        'currentChannel' => $channel,
        'channels' => $channels,
        'threads' => $threads,
        'form' => $form->createView(),
      ]);
    }
    

    /**
     * @Route("/channel/delete", name="channel_delete")
     */
    public function deleteAction(Request $request) {
      $jsonData = $request->getContent();

      $data = json_decode($jsonData, true);


      $channel = $this->getDoctrine()->getRepository(Channel::class)->findOneByName($data['name']);

      if(!$channel) {
        throw $this->createNotFoundException('No channel found for name: '.$data['name']);
      }
      $em = $this->getDoctrine()->getManager();
      $em->remove($channel);
      $em->flush();
      
      return new Response('success');
    }
}
