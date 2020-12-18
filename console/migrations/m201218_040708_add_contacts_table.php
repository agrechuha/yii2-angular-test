<?php

use yii\db\Migration;

/**
 * Class m201218_040708_add_contacts_table
 */
class m201218_040708_add_contacts_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $tableOptions = null;
        if ($this->db->driverName === 'mysql') {
            $tableOptions = 'CHARACTER SET utf8 COLLATE utf8_general_ci ENGINE=InnoDB';
        }
        $this->createTable('{{%contacts}}', [
            'id' => $this->primaryKey(),
            'name' => $this->string()->notNull(),
            'src' => $this->string(),
            'phone' => $this->string()->notNull(),
            'telegram' => $this->string(),
        ], $tableOptions);

        $insert = [
            [
                'name' => 'Вася Пупкин',
                'src' => 'https://i.pinimg.com/474x/bc/d4/ac/bcd4ac32cc7d3f98b5e54bde37d6b09e.jpg',
                'phone' => '+71111111111',
                'telegram' => 'vasyua_pupkin',
            ],
            [
                'name' => 'Петя Мишин',
                'src' => 'https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg',
                'phone' => '+79999999999',
                'telegram' => 'petya_mishin',
            ],
        ];

        $this->batchInsert('{{%contacts}}', [
            'name',
            'src',
            'phone',
            'telegram',
        ], $insert);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        echo "m201218_040708_add_contacts_table cannot be reverted.\n";

        return false;
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m201218_040708_add_contacts_table cannot be reverted.\n";

        return false;
    }
    */
}
