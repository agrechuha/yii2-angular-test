<?php

namespace frontend\controllers;

use common\models\Contacts;
use Yii;
use yii\filters\AccessControl;
use yii\filters\auth\HttpBearerAuth;
use yii\rest\ActiveController;
use yii\web\Response;

/**
 * Test Api controller
 */
class TestApiController extends ActiveController
{
    public $enableCsrfValidation = false;
    public $modelClass = 'common\models\Contacts';

    public function behaviors()
    {
        $behaviors = parent::behaviors();

        // remove authentication filter
        $auth = $behaviors['authenticator'];
        unset($behaviors['authenticator']);

        // add CORS filter
        $behaviors['corsFilter'] = [
            'class' => \yii\filters\Cors::className(),
            'cors' => [
                // restrict access to
                'Access-Control-Allow-Origin' => ['*'],
                'Access-Control-Request-Method' => ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
                // Allow only POST and PUT methods
                'Access-Control-Request-Headers' => ['*'],
                // Allow only headers 'X-Wsse'
                'Access-Control-Allow-Credentials' => true,
                // Allow OPTIONS caching
                'Access-Control-Max-Age' => 86400,
                // Allow the X-Pagination-Current-Page header to be exposed to the browser.
                'Access-Control-Expose-Headers' => [],
            ]
        ];

        // re-add authentication filter
        $behaviors['authenticator'] = $auth;
        // avoid authentication on CORS-pre-flight requests (HTTP OPTIONS method)
        $behaviors['authenticator']['except'] = ['options'];
        $behaviors['authenticator']['class'] = \sizeg\jwt\JwtHttpBearerAuth::className();

        $behaviors['access'] = [
            'class' => AccessControl::className(),
            'rules' => [
                [
                    'allow' => true,
                    'roles' => ['@'],
                ],
            ],
        ];

        return $behaviors;
    }

    //    public function beforeAction($action)
    //    {
    //        Yii::$app->response->format = Response::FORMAT_JSON;
    //        return true;
    //    }

    public function actionCreateContact()
    {
        $data = \Yii::$app->getRequest()->getBodyParams();
        if (!$data) {
            return [];
        }

        $model = new Contacts();
        if ($model->load($data, '') && $model->validate() && $model->save()) {
            return [
                'isSuccess' => 201,
                'message' => 'contact is created!',
            ];
        }

        $model->validate();
        return [
            'hasErrors' => $model->hasErrors(),
            'errors' => $model->getErrors()
        ];
    }


}
