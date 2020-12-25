<?php

namespace frontend\controllers\api;

use common\models\Contacts;
use frontend\models\SignupForm;
use Yii;
use common\models\Books;
use yii\rest\ActiveController;

/**
 * ApiBooksController implements the CRUD actions for Books model.
 */
class ApibooksController extends BaseController
{
    public $modelClass = 'common\models\Books';

    /**
     * @return array|array[]
     */
    public function behaviors(): array
    {
        $behaviors = parent::behaviors();
        unset($behaviors['authenticator']);
        return $behaviors;
    }

    public function actionIndex() {
        return Books::find()->all();
    }

    /**
     * @return array|\yii\db\ActiveRecord[]
     * @throws \yii\base\InvalidConfigException
     */
    public function actionAnotherList(): array
    {
        $books = Books::find()->where(['like', 'title', 'Ленинград'])->all();
        foreach ($books as $book) {
            $book->created_at = Yii::$app->formatter->asDateTime($book->created_at, 'dd MMMM HH:mm');
        }
        return $books;
    }

    public function actionSignup()
    {
        $model = new SignupForm();
        if ($model->load(Yii::$app->request->post()) && $model->signup()) {
            return true;
        }
        return false;
    }
}
