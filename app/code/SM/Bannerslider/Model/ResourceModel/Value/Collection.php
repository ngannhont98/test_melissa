<?php

/**
 * SM
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the SM.com license that is
 * available through the world-wide-web at this URL:
 * http://www.SM.com/license-agreement.html
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade this extension to newer
 * version in the future.
 *
 * @category    SM
 * @package     SM_Bannerslider
 * @copyright   Copyright (c) 2012 SM (http://www.SM.com/)
 * @license     http://www.SM.com/license-agreement.html
 */

namespace SM\Bannerslider\Model\ResourceModel\Value;

/**
 * Value Collection
 * @category SM
 * @package  SM_Bannerslider
 * @module   Bannerslider
 * @author   SM Developer
 */
class Collection extends \Magento\Framework\Model\ResourceModel\Db\Collection\AbstractCollection
{
    /**
     * construct
     * @return void
     */
    protected function _construct()
    {
        $this->_init('SM\Bannerslider\Model\Value', 'SM\Bannerslider\Model\ResourceModel\Value');
    }
}
