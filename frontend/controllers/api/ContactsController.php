<?php

namespace frontend\controllers\api;

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
        unset($behaviors['authenticator']);
        return $behaviors;
    }

}
