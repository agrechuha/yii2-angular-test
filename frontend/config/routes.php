<?php

return [
    "about" => 'site/about',
    "contact" => 'site/contact',
    "login" => 'site/login',
    "signup" => 'site/signup',
    "logout" => 'site/logout',

    '<_c[\w\-]+>/<_a[\w\-]+>' => '<_c>/<_a>',
    '<_c[\w\-]+>/<_a[\w\-]+>/<id:\w+>' => '<_c>/<_a>',
];