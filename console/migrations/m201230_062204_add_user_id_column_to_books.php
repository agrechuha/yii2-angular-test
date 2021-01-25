<?php

use yii\db\Migration;

/**
 * Class m201230_062204_add_user_id_column_to_books
 */
class m201230_062204_add_user_id_column_to_books extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->addColumn('books', 'user_id', 'int null');
        $this->addForeignKey('books_user_id', 'books', 'user_id', 'user', 'id', 'SET NULL', 'SET NULL');
        $books = \common\models\Books::find()->all();
        foreach ($books as $book) {
            $book->user_id = 4;
            $book->save();
        }
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        echo "m201230_062204_add_user_id_column_to_books cannot be reverted.\n";

        return false;
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m201230_062204_add_user_id_column_to_books cannot be reverted.\n";

        return false;
    }
    */
}
