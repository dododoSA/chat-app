<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Table(name="thread")
 */

class Thread {
  /**
   * @ORM\Column(type="integer")
   * @ORM\Id
   * @ORM\GeneratedValue(strategy="AUTO")
   */
  private $id;

  /**
   * @ORM\Column(type="text")
   */
  private $content;

  /**
   * @ORM\Column(type="integer")
   */
  private $channelId;

  /**
   * @ORM\Column(type="integer")
   */
  private $userId;

  private $username;

  public function getUsername() {
      return $this->username;
  }

  public function setUsername($username) {
    $this->username = $username;
    return $this;
  }

    /**
     * Get id
     *
     * @return integer
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set content
     *
     * @param string $content
     *
     * @return Thread
     */
    public function setContent($content)
    {
        $this->content = $content;

        return $this;
    }

    /**
     * Get content
     *
     * @return string
     */
    public function getContent()
    {
        return $this->content;
    }

    /**
     * Set channelId
     *
     * @param integer $channelId
     *
     * @return Thread
     */
    public function setChannelId($channelId)
    {
        $this->channelId = $channelId;

        return $this;
    }

    /**
     * Get channelId
     *
     * @return integer
     */
    public function getChannelId()
    {
        return $this->channelId;
    }

    /**
     * Set userId
     *
     * @param integer $userId
     *
     * @return Thread
     */
    public function setUserId($userId)
    {
        $this->userId = $userId;

        return $this;
    }

    /**
     * Get userId
     *
     * @return integer
     */
    public function getUserId()
    {
        return $this->userId;
    }
}
