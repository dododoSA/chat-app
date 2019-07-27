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
     * @Route("/channel/show/{id}")
     */
    public function showAction($id) {
      $channel = $this->getDoctrine()->getRepository(Channel::class)->find($id);

      if(!$channel) {
        throw $this->createNotFoundException('No channel found for id '.$id);
      }

      return new Response('This channel id '.$channel->getId());
    }
}
