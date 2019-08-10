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

      if($form->isSubmitted() && $form->isValid()) {
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
}

