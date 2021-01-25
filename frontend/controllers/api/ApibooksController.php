<?php

namespace frontend\controllers\api;

use common\models\User;
use Yii;
use common\models\Books;
use yii\filters\AccessControl;
use yii\rest\ActiveController;

/**
 * ApiBooksController implements the CRUD actions for Books model.
 */
class ApibooksController extends BaseController
{
    public $modelClass = 'common\models\Books';

    /**
     * @return array
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
            'denyCallback' => function ($rule, $action) {
                throw new \yii\web\ForbiddenHttpException('You are not allowed to access this page');
            }
        ];

        return $behaviors;
    }

    public function actions(): array
    {
        $actions = parent::actions();
        $actions['index']['prepareDataProvider'] = [$this, 'actionIndex'];
        $actions['error'] = ['class' => 'yii\web\ErrorAction'];

        return $actions;
    }

    public function actionMain(): array
    {
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

    /**
     * @param $id
     * @return array|Books|\yii\db\ActiveRecord|null
     */
    public function actionDetail($id)
    {
        return Books::find()
            ->where(['id' => $id])
            ->one();
    }

    /**
     * @param $id
     * @return Books
     * @throws \yii\web\HttpException
     */
    public function actionEdit($id): Books
    {
        $book = Books::findOne(['id' => $id]);
        if (!$book) {
            throw new \yii\web\HttpException(404 ,'Страница не найдена');
        }
        $admin = Yii::$app->user->identity;
        if (!$admin || $admin->id !== $book->user_id) {
            throw new \yii\web\HttpException(403 ,'У вас нет доступа');
        }
        if ($book->load(Yii::$app->request->post())) {
            return $book;
        }
        return $book;
    }
}
