<?php
return[
        [
            'class' => 'yii\rest\UrlRule',
            'controller' => [
                'user',
                'default',
                // 'support-version',
                'v1/site',
                'v1/stark',
                'v1/fenxi',
                'v1/index',
                'v1/test',
            ]
        ],
            //获取用户的基本信息
    // [
    //     'class' => 'yii\rest\UrlRule',
    //     'controller' => [
    //         'v1/user'
    //     ],
    //     'tokens' => [
    //         '{user_id}' => '<user_id:\d+>'
    //     ],
    //     'extraPatterns' => [
    //         'GET userinfo/{user_id}' => 'userinfo'
    //     ]
    // ],


    ];
