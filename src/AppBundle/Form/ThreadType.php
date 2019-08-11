<?php
namespace AppBundle\Form;

use AppBundle\Entity\Thread;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ThreadType extends AbstractType {
	public function buildForm(FormBuilderInterface $builder, array $options) {
		$builder
			->add('content', TextType::class, [
				'attr' => ['style' => 'display:inline;']
			])
			->add('save', SubmitType::class, [
				'label' => '投稿',
				'attr' => ['class' => 'btn btn-primary', 'style' => 'display:inline;']
			]);
	}

	public function configureOptions(OptionsResolver $resolver) {
		$resolver->setDefaults([
			'data_class' => Thread::class
		]);
	}
}