<?php

namespace frontend\controllers;

use common\models\Contacts;
use frontend\models\SignupForm;
use Yii;
use common\models\Books;
use yii\rest\ActiveController;

/**
 * ApiBooksController implements the CRUD actions for Books model.
 */
class ApibooksController extends ActiveController
{
    public $modelClass = 'common\models\Books';

    /**
     * {@inheritdoc}
     */
    public function behaviors()
    {
        return \yii\helpers\ArrayHelper::merge(parent::behaviors(), [
            'corsFilter' => [
                'class' => \yii\filters\Cors::className(),
            ],
        ]);
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

    /**
     * @return array|\yii\db\ActiveRecord[]
     */
    public function actionContacts(): array
    {
        return Contacts::find()->all();
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
