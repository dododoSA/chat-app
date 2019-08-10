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

class ThreadController extends Controller
{
  
    /**
     * @Route("/channel/{name}/thread/new", name="thread_new")
     */
    public function newAction(Request $request, $name){
      $thread = new Thread();

      $form = $this->createForm(ThreadType::class, $thread);

      $form->handleRequest($request);

      if($form->isSubmitted() && $form->isValid() && $this->getUser()) {
        $channel = $this->getDoctrine()->getRepository(Channel::class)->findOneByName($name);
        $em = $this->getDoctrine()->getManager();

        $thread = $form->getData();
        $thread->setChannelId($channel->getId());
        $thread->setUserId(0);

        $em->persist($thread);
        $em->flush();
        return $this->redirectToRoute('channel_show', ['name' => $name]);
      }

      return $this->render('channel/show.html.twig', [
        'form' => $form->createView(),
      ]);
    }

    /**
     * @Route("/channel/{name}/thread/{id}/edit", name="thread_edit")
     */
    public function editAction(Request $request, $name, $id) {
      $thread = $this->getDoctrine()->getRepository(Thread::class)->find($id);

      if(!$thread) {
        throw $this->createNotFoundException('No thread found for name: '.$name);
      }


      $form = $this->createForm(ThreadType::class, $thread);

      $form->handleRequest($request);

      if($form->isSubmitted() && $form->isValid() && $this->getUser()) {
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

      $em = $this->getDoctrine()->getManager();
      $em->remove($thread);
      $em->flush();

      return $this->redirectToRoute('channel_show', ['name' => $name]);
    }
}

