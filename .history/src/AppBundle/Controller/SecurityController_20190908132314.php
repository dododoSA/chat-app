<?php
namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class SecurityController extends Controller
{
    /**
     * @Route("/login", name="login")
     */
    public function loginAction(Request $request) {
        $user = $this->getUser();
        return new JsonResponse([
            'username' => $user->getUsername()
        ]);
    }
    
    /**
     * @Route("/get_me", name="get_me")
     */
    public function getMeAction(Request $request) {
        $user = $this->getUser();
        return new JsonResponse([
            'username' => $user ? $user->getUsername() : ''
        ]);
    }
}