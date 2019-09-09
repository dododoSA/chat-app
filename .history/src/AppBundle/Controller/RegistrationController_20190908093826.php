<?php
namespace AppBundle\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use FOS\UserBundle\Controller\RegistrationController as BaseController;


class RegistrationController extends BaseController
{
    /**
     * @Route("/register", name="register")
     */
    public function registerAction(Request $request)
    {
        $jsonData = $request->getContent();
        $data = json_decode($jsonData, true);
        $userManager = $this->get('fos_user.user_manager');


        if (!$data['username'] || !$data['password'] || !$data['passwordConfirmation']) {
            return new Response('Bad Request', 400);
        }
        if($data['password'] != $data['passwordConfirmation']) {
            return new Response('Bad Request', 400);
        }
        $user = $userManager->createUser();
        $user->setEnabled(true);
        $user->setUsername($data['username']);
        $user->setPlainPassword($data['password']);
        
        $this->$userManager->updateUser($user);

        return new Response('success', 201);
    }
}