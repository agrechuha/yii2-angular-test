<?php

return [
//    "contact" => 'site/contact',
//    "login" => 'site/login',
//    "signup" => 'site/signup',
//    "logout" => 'site/logout',
    'books' => 'site/about',
    'books/<var:\w+>' => 'site/about',
    'detail/<id:\d+>' => 'site/about',
    'update/<id:\d+>' => 'site/about',
    ['class' => 'yii\rest\UrlRule', 'controller' => 'apibooks'],

    '<_c[\w\-]+>/<_a[\w\-]+>' => '<_c>/<_a>',
    '<_c[\w\-]+>/<_a[\w\-]+>/<id:\w+>' => '<_c>/<_a>',
];
