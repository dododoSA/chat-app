<?php
// src/AppBundle/Controller/LuckyController.php
namespace AppBundle\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use AppBundle\Entity\Channel;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class ChannelController extends Controller
{
    /**
     * @Route("/channel/create")
     */
    public function createAction()
    {
        $em = $this->getDoctrine()->getManager();

        $channel = new Channel();
        $channel->setName('general');

        $em->persist($channel);
        $em->flush();

        return new Response('Created channel id '.$channel->getId());
    }

    /**
     * @Route("/channel/{name}", name="channel_show")
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


      return $this->render('channel/channel.html.twig', [
        'currentChannel' => $channel,
        'channels' => $channels,
      ]);
    }
}
