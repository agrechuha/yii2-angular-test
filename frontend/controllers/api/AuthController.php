<?php

namespace frontend\controllers\api;

use common\models\LoginForm;
use frontend\models\SignupForm;
use Yii;
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
        $behaviors['authenticator']['class'] = CompositeAuth::className();
        return $behaviors;
    }

    /**
     * @return bool
     */
    public function actionLogin(): bool
    {
        $model = new LoginForm();
        if ($model->load(Yii::$app->request->post())) {
            $user = $model->login();
            if ($user) {
                return $user->getAuthKey();
            } else {
                return false;
            }
        }
        return false;
    }

    /**
     * @return array
     */
    public function actionSignup(): array
    {
        $model = new SignupForm();
        if ($model->load(Yii::$app->request->post())) {
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
