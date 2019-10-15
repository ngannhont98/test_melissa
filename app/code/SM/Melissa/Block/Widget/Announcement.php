<?php
namespace SM\Melissa\Block\Widget;

use Magento\Framework\View\Element\Template;
use Magento\Widget\Block\BlockInterface;

class Announcement extends Template implements BlockInterface
{
    protected $_template = "widget/announcement.phtml";
}
