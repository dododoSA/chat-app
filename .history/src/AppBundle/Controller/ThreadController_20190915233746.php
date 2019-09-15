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
     * @Rest\Get("/api/channel/{channel_name}/thread", name="thread_get")
     */
    public function getAction($channel_name) {
      $channel = $this->getDoctrine()->getRepository(Channel::class)->findOneByName($channel_name);

      if(!$channel) {
        return new View("channel not found", Response::HTTP_NOT_FOUND);
      }

      $threads = $this->getDoctrine()->getRepository(Thread::class)->findByChannelId($channel->getId());

      if(!$threads) {
        return new View("threads are not exist", Response::HTTP_NOT_FOUND);
      }

      $view = $this->view($threads, 200);
      return $this->handleView($view);
    }
  
    /**
     * @Rest\Post("/api/channel/{channel_name}/thread", name="thread_new")
     */
    public function newAction($channel_name, Request $request){

      $channel = $this->getDoctrine()->getRepository(Channel::class)->findOneByName($channel_name);
      if (!$channel) {
        return new View("channel not found", Response::HTTP_NOT_FOUND);
      }

      $thread = new Thread();
      $thread->setContent($data['content']);
      $thread->setChannelId($channel->getId());
      $thread->setUserId(1);//

      $em = $this->getDoctrine()->getManager();
      $em->persist($thread);
      $em->flush();

      return new View("channel added successfully", Response::HTTP_OK);
    }


    /**
     * @Rest\PUT("/api/channel/{channel_name}/thread/{id}", name="thread_edit")
     */
    public function updateAction($channel_name, $id, Request $request) {
      $jsonData = $request->getContent();

      $data = json_decode($jsonData, true);

      $channel = $this->getDoctrine()->getRepository(Channel::class)->findOneByName($channel_name);
      if (!$channel) {
        return new View("channel not found", Response::HTTP_NOT_FOUND);
      }

      $thread = $this->getDoctrine()->getRepository(Thread::class)->find($id);

      if(!$thread) {
        return new View("thread not found", Response::HTTP_NOT_FOUND);
      }

      if(!$data['content']) {
        return new View("content cannot be empty");
      }

      $thread->setContent($data['content']);

      $em = $this->getDoctrine()->getManager();
      $em->flush();
      
      return new View("thread update Successfully", Response::HTTP_OK);
    }

    /**
     * @Rest\DELETE("/api/channel/{channel_id}/thread/{id}", name="thread_delete")
     */
    public function deleteAction($channel_id, $id) {
      $thread = $this->getDoctrine()->getRepository(Thread::class)->find($id);

      if(!$thread) {
        return new View("thread not found", Response::HTTP_NOT_FOUND);
      }
      $em = $this->getDoctrine()->getManager();
      $em->remove($thread);
      $em->flush();
      
      return new View("deleted successfully", Response::HTTP_OK);
    }
}

