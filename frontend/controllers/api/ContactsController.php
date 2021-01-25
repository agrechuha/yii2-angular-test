<?php

namespace frontend\controllers\api;

use common\models\Contacts;
use yii\filters\AccessControl;
use yii\rest\ActiveController;

/**
 * ContactsController implements the CRUD actions for Contacts model.
 */
class ContactsController extends BaseController
{
    public $modelClass = 'common\models\Contacts';

    /**
     * @return array|array[]
     */
    public function behaviors(): array
    {
        $behaviors = parent::behaviors();

        $behaviors['access'] = [
            'class' => AccessControl::className(),
            'rules' => [
                [
                    'allow' => true,
                    'roles' => ['@'],
                ],
            ],
        ];

//        unset($behaviors['authenticator']);
        return $behaviors;
    }

    /**
     * @return array|\yii\db\ActiveRecord[]
     */
    public function actionInformation() {
        return Contacts::find()->where(['name' => 'Вася Пупкин'])->all();
    }

    public function actionAllContacts() {
        return Contacts::find()->all();
    }

}
