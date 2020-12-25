<?php

namespace frontend\controllers\api;

use Yii;
use yii\filters\AccessControl;
use yii\filters\auth\CompositeAuth;
use yii\filters\auth\HttpBearerAuth;
use yii\rest\ActiveController;
use yii\web\Response;

/**
 * Base Api controller
 */
class BaseController extends ActiveController
{
    /**
     * {@inheritdoc}
     */
    public function behaviors()
    {
        $behaviors = parent::behaviors();

        // remove authentication filter
        $auth = $behaviors['authenticator'];
        unset($behaviors['authenticator']);

        // add CORS filter
        $behaviors['corsFilter'] = [
            'class' => \yii\filters\Cors::className(),
        ];

        // re-add authentication filter
        $behaviors['authenticator'] = $auth;
        // avoid authentication on CORS-pre-flight requests (HTTP OPTIONS method)
        $behaviors['authenticator']['except'] = ['options'];
        $behaviors['authenticator']['class'] = HttpBearerAuth::className();

        //                $behaviors['access'] = [
        //                    'class' => AccessControl::className(),
        //                    'rules' => [
        //                        [
        //                            'allow' => true,
        //                            'roles' => ['@'],
        //                        ],
        //                    ],
        //                ];

        return $behaviors;
    }

    public function beforeAction($action)
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        return true;
    }

}
