<?php

return [
    '' => 'site/index',
    '/' => 'site/index',
    'books' => 'site/index',
    'books/another-list' => 'site/index',
    'books/<var:\w+>' => 'site/index',
    'detail/<id:\d+>' => 'site/index',
    'update/<id:\d+>' => 'site/index',
    "contacts" => 'site/index',
    "login" => 'site/index',
    "signup" => 'site/index',
    "logout" => 'site/index',

    [
        'class' => 'yii\rest\UrlRule',
        'controller' => 'apibooks',
        'extraPatterns' => [
            'GET books/another-list' => 'anotherList',
            'GET contacts' => 'contacts'
        ]
    ],

    '<_c[\w\-]+>/<_a[\w\-]+>' => '<_c>/<_a>',
    '<_c[\w\-]+>/<_a[\w\-]+>/<id:\w+>' => '<_c>/<_a>',
];
