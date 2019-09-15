<?php
namespace AppBundle\Controller;

// use Symfony\Component\HttpFoundation\Request;
// use Symfony\Component\HttpFoundation\Response;
// use Symfony\Component\Routing\Annotation\Route;
// use AppBundle\Entity\Thread;
// use AppBundle\Entity\Channel;
// use Doctrine\ORM\EntityManagerInterface;
// use Symfony\Bundle\FrameworkBundle\Controller\Controller;
// use AppBundle\Form\ThreadType;
// use Symfony\Component\Serializer\Encoder\JsonEncoder;
// use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
// use Symfony\Component\Serializer\Serializer;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use FOS\RestBundle\Controller\Annotations as Rest;
use FOS\RestBundle\Controller\FOSRestController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use FOS\RestBundle\View\View;
use AppBundle\Entity\Channel;
use AppBundle\Entity\Thread;


class ThreadController extends FOSRestController
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


      $thread = $this->getDoctrine()->getRepository(Thread::class)->find($data['threadId']);

      if(!$thread) {
        throw $this->createNotFoundException('No thread found for id: '.$data['threadId']);
      }

      $thread->setContent($data['content']);

      $em = $this->getDoctrine()->getManager();
      $em->flush();
      
      return new Response('success');
    }

    /**
     * @Route("/channel/{name}/thread/delete", name="thread_delete")
     */
    public function deleteAction(Request $request, $name) {
      $jsonData = $request->getContent();

      $data = json_decode($jsonData, true);


      $thread = $this->getDoctrine()->getRepository(Thread::class)->find($data['id']);

      if(!$thread) {
        throw $this->createNotFoundException('No channel found for name: '.$data['name']);
      }
      $em = $this->getDoctrine()->getManager();
      $em->remove($thread);
      $em->flush();
      
      return new Response('success');
    }
}

