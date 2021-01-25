<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "books".
 *
 * @property int $id
 * @property string $title
 * @property string|null $src
 * @property string $author
 * @property string|null $description
 * @property int $created_at
 * @property int $delete
 * @property int $user_id
 *
 * @property int $user
 *
 */
class Books extends \yii\db\ActiveRecord
{
    public $userName;

    public function fields()
    {
        return [
            'id',
            'title',
            'src',
            'author',
            'description',
            'created_at',
            'userName' => function($model){
                return $model->user->username;
            }
        ];
    }

    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'books';
    }

    public function afterFind()
    {
        $this->created_at = \Yii::$app->formatter->asDatetime($this->created_at,'php:Y-m-d H:i');
    }

    public function beforeValidate() {

        $this->created_at = strtotime($this->created_at);

        return parent::beforeValidate();
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['title', 'author', 'created_at'], 'required'],
            [['description'], 'string'],
            [['created_at', 'delete', 'user_id'], 'integer'],
            [['title', 'src', 'author'], 'string', 'max' => 255],
            [['user_id'], 'exist', 'skipOnError' => true, 'targetClass' => User::className(),
                'targetAttribute' => ['user_id' => 'id']],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'title' => 'Title',
            'src' => 'Src',
            'author' => 'Author',
            'description' => 'Description',
            'created_at' => 'Created At',
            'delete' => 'Delete',
            'user_id' => 'User Id',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getUser()
    {
        return $this->hasOne(User::className(), ['id' => 'user_id']);
    }
}
