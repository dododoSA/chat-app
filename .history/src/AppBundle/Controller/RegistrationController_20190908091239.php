<?php
namespace AppBundle\Controller;

use FOS\UserBundle\Controller\RegistrationController as BaseController;
use FOS\UserBundle\Event\GetResponseUserEvent;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Routing\Annotation\Route;


class RegistrationController extends BaseController
{
    /**
     * @Route("/register", name="register")
     */
    public function registerAction(Request $request)
    {
        $jsonData = $request->getData();
        $data = json_decode($jsonData, true);
        $userManager = $this->get('fos_user.user_manager');

        $user = $userManager->createUser();

        if (!$data['username'] || !$data['password'] || !$data['passwordConfirmation']) {
            return new Response('Bad Request', 400);
        }
        if($data['password'] != $data['passwordConfirmation']) {
            return new Response('Bad Request', 400);
        }
        $user->setEnabled(true);
        $user->setUsername($data['username']);
        $user->setPlainPassword($data['password']);
        
        $this->userManager->updateUser($user);

        return new Response('success', 201);
    }
}