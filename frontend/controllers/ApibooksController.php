<?php

namespace frontend\controllers;

use Yii;
use common\models\Books;
use common\models\BooksSearch;
use yii\rest\ActiveController;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;

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
}
