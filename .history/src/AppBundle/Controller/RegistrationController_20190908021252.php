<?php
namespace AppBundle\Controller;

use FOS\UserBundle\Controller\RegistrationController as BaseController;
use FOS\UserBundle\Event\GetResponseUserEvent;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;


class RegistrationController extends BaseController
{
    public function registerAction(Request $request, UserPasswordEncoderInterFace $passwordEncoder)
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
        $password = $passwordEncoder->encodePassword($user, $data['password']);
        $user->setPassword($password);
        
    }
}