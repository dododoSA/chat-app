<?php
namespace AppBundle\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use AppBundle\Entity\Channel;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;

class ChannelController extends Controller
{
  
    /**
     * @Route("/channel/new", name="channel_new")
     */
    public function newAction(Request $requset){
      $channel = new Channel();

      $form = $this->createFormBuilder($channel)
        ->add('name', TextType::class)
        ->add('save', SubmitType::class, ['label' => 'Create Channel'])
        ->getForm();

      $form->handleRequest($requset);

      if($form->isSubmitted() && $form->isValid()) {
        
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
     * @Route("/channel/show/{name}", name="channel_show")
     * 
     */
    public function showAction($name) {
      $channel = $this->getDoctrine()->getRepository(Channel::class)->findOneByName($name);
      $channels = $this->getDoctrine()->getRepository(Channel::class)->findAll();

      if(!$channels) {
        throw $this->createNotFoundException('No channel found for name: '.$name);
      }
      if(!$channel) {
        throw $this->createNotFoundException('findAll FAILURE');
      }


      return $this->render('channel/show.html.twig', [
        'currentChannel' => $channel,
        'channels' => $channels,
      ]);
    }
}
