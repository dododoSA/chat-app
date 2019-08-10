<?php
namespace AppBundle\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
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
    public function indexAction() {
      $channels = $this->getDoctrine()->getRepository(Channel::class)->findAll();

      return $this->render('channel/index.html.twig', [
        'channels' => $channels,
      ]);
    }
  
    /**
     * @Route("/channel/new", name="channel_new")
     */
    public function newAction(Request $request){
      $channel = new Channel();

      $form = $this->createFormBuilder($channel)
        ->add('name', TextType::class)
        ->add('save', SubmitType::class, ['label' => 'Create Channel'])
        ->getForm();

      $form->handleRequest($request);

      if($form->isSubmitted() && $form->isValid() && $this->getUser()) {
        
        $em = $this->getDoctrine()->getManager();

        $channel = $form->getData();

        $em->persist($channel);
        $em->flush();
        return $this->redirectToRoute('channel_show', ['name' => $channel->getName()]);
      }

      return $this->render('channel/new.html.twig', [
        'form' => $form->createView(),
      ]);
    }


    /**
     * @Route("/channel/{name}/edit", name="channel_edit")
     */
    public function editAction(Request $request, $name) {
      $channel = $this->getDoctrine()->getRepository(Channel::class)->findOneByName($name);

      if(!$channel) {
        throw $this->createNotFoundException('No channel found for name: '.$name);
      }

      $form = $this->createFormBuilder($channel)
        ->add('name', TextType::class)
        ->add('save', SubmitType::class, ['label' => 'Change Name'])
        ->getForm();

      $form->handleRequest($request);
      if($form->isSubmitted() && $form->isValid() && $this->getUser()) {
        $channel = $form->getData();

        $em = $this->getDoctrine()->getManager();
        $em->flush();

        //もともといたチャンネルに戻るようにしたい
        return $this->redirectToRoute('channel_show', ['name' => $channel->getName()]);
      }

      return $this->render('channel/edit.html.twig', [
        'form' => $form->createView(),
        'channelName' => $name
      ]);
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
     * @Route("/channel/{name}/delete", name="channel_delete")
     */
    public function deleteAction(Request $request, $name) {
      $channel = $this->getDoctrine()->getRepository(Channel::class)->findOneByName($name);

      if(!$channel) {
        throw $this->createNotFoundException('No channel found for name: '.$name);
      }

      $em = $this->getDoctrine()->getManager();
      $em->remove($channel);
      $em->flush();

      return $this->redirectToRoute('channel_index');
    }
}
