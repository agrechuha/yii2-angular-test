<?php

return [
    [
        'class' => 'yii\rest\UrlRule',
        'controller' => 'api/contacts',
        'pluralize' => false,
        'extraPatterns' => [
            'GET contacts' => 'information',
            'GET contacts/all' => 'allContacts'
        ]
    ],
    [
        'class' => 'yii\rest\UrlRule',
        'controller' => 'api/apibooks',
        'pluralize' => false,
        'extraPatterns' => [
            'GET books' => 'main',
            'GET books/another-list' => 'anotherList',
            'GET,HEAD,OPTIONS detail/{id}' => 'detail',
            'GET,POST,PUT,OPTIONS edit/{id}' => 'edit',
        ]
    ],
    [
        'class' => 'yii\rest\UrlRule',
        'controller' => 'api/auth',
        'pluralize' => false,
        'extraPatterns' => [
            'POST,OPTIONS login' => 'login',
            'POST,OPTIONS signup' => 'signup',
        ]
    ],
    [
        'class' => 'yii\rest\UrlRule',
        'controller' => 'testApi',
        'pluralize' => false,
        'extraPatterns' => [
            'POST,OPTIONS create-contact' => 'create-contact',
        ]
    ],

//    '<_c[\w\-]+>/<_a[\w\-]+>' => '<_c>/<_a>',
//    '<_c[\w\-]+>/<_a[\w\-]+>/<id:\w+>' => '<_c>/<_a>',
];
