<?php

namespace frontend\controllers\api;

use common\models\LoginForm;
use frontend\models\SignupForm;
use Yii;
use yii\filters\AccessControl;
use yii\filters\auth\CompositeAuth;
use yii\rest\ActiveController;
use yii\web\Response;

/**
 * ApiBooksController implements the CRUD actions for Books model.
 */
class AuthController extends BaseController
{
    public $modelClass = 'common\models\User';

    /**
     * @return array|array[]
     */
    public function behaviors(): array
    {
        $behaviors = parent::behaviors();
        unset($behaviors['authenticator']);
        return $behaviors;
    }

    /**
     * @return array
     * @throws \yii\base\InvalidConfigException
     */
    public function actionLogin()
    {
        $data = \Yii::$app->getRequest()->getBodyParams();
        if (!$data) {
            return [];
        }
        $model = new LoginForm();

        if ($model->load($data, '')) {
            $user = $model->login();
            if ($user) {
                return [
                    'isSuccess' => 201,
                    'message' => 'You are logged in!',
                    'userAuthKey' => $user->getAuthKey()
                ];
            }
        }
        $model->validate();
        return [
            'hasErrors' => $model->hasErrors(),
            'errors' => $model->getErrors()
        ];
    }

    /**
     * @return array
     * @throws \yii\base\InvalidConfigException
     */
    public function actionSignup()
    {
        $data = \Yii::$app->getRequest()->getBodyParams();
        if (!$data) {
            return [];
        }
        $model = new SignupForm();

        if ($model->load($data, '')) {
            $user = $model->signup();
            if ($user) {
                return [
                    'isSuccess' => 201,
                    'message' => 'You are now a member!',
                    'userAuthKey' => $user->getAuthKey()
                ];
            }
        }
        $model->validate();
        return [
            'hasErrors' => $model->hasErrors(),
            'errors' => $model->getErrors()
        ];
    }


}
