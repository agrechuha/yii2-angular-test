<?php

return [
    [
        'class' => 'yii\rest\UrlRule',
        'controller' => 'api/apibooks',
        'extraPatterns' => [
            'GET books/another-list' => 'anotherList',
            'GET contacts' => 'contacts'
        ]
    ],
    [
        'class' => 'yii\rest\UrlRule',
        'controller' => 'api/contacts',
    ],
    [
        'class' => 'yii\rest\UrlRule',
        'controller' => 'api/auth',
        'extraPatterns' => [
            'POST,HEAD,OPTIONS login' => 'login',
            'POST,HEAD,OPTIONS signup' => 'signup',
//            'OPTIONS login' => 'options',
//            'OPTIONS signup' => 'options',
        ]
    ],

    '<_c[\w\-]+>/<_a[\w\-]+>' => '<_c>/<_a>',
    '<_c[\w\-]+>/<_a[\w\-]+>/<id:\w+>' => '<_c>/<_a>',
];
