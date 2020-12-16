<?php

use yii\db\Migration;

/**
 * Class m201211_055059_books_init
 */
class m201211_055059_books_init extends Migration
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

        $this->createTable('{{%books}}', [
            'id' => $this->primaryKey(),
            'title' => $this->string()->notNull(),
            'src' => $this->string(),
            'author' => $this->string()->notNull(),
            'description' => $this->text(),
            'created_at' => $this->integer()->notNull(),
            'delete' => $this->smallInteger()->notNull()->defaultValue(0),
        ], $tableOptions);

        $insert = [
            [
                'title' => 'Ленинград. Невероятная и правдивая история группы',
                'src' => 'http://ozon-st.cdn.ngenix.net/multimedia/c300/1019082045.jpg',
                'author' => 'Семеляк Максим Анатольевич',
                'description' => 'Книга, которую ждут миллионы - АВТОРИЗОВАННАЯ БИОГРАФИЯ ГРУППЫ ЛЕНИНГРАД! В этом году возрожденному "Ленинграду" исполняется 20 лет. Десятки альбомов, сотни видеоклипов, миллионы просмотров и скачиваний. "Ленинград" создает хиты и мемы. Творчество Сергея Шнурова обсуждают и осуждают, хвалят и ругают. Его любят и ненавидят, но равнодушных к песням Шнура просто нет. В книге "Ленинград. Невероятная и правдивая история" писатель и журналист, друг Сергея Шнурова, Максим Семеляк попытался объяснить феномен Шнура. И честно рассказать о том, как самая популярная группа страны работала все эти годы. В книгу включены размышления Сергея Шнурова, его интервью, заметки и комментарии. А также очень много фотографий из личных альбомов, многие из которых ранее нигде не публиковались.',
                'created_at' => '1371201284',
                'delete' => 0,
            ],
            [
                'title' => 'Цветы для Элджернона',
                'src' => 'http://ozon-st.cdn.ngenix.net/multimedia/c300/1012950149.jpg',
                'author' => 'Дэниел Киз',
                'description' => '"Цветы для Элджернона" Дэниела Киза входят в программу обязательного чтения в американских школах. Это единственная история в жанре научной фантастики, автор которой был дважды награжден сначала за рассказ, а потом за роман с одним и тем же названием, героем, сюжетом. ',
                'created_at' => '1427966084',
                'delete' => 0,
            ],
            [
                'title' => 'В Питере жить. От Дворцовой до Садовой, от Гангутской до Шпалерной. Личные истории',
                'src' => 'http://ozon-st.cdn.ngenix.net/multimedia/c300/1018537441.jpg',
                'author' => 'Елена Данииловна Шубина',
                'description' => '"В Питере жить" - это вам не в Москве, о которой нам рассказали в книге-бестселлере "Москва: место встречи". Что и говорить - другая ментальность, петербургский текст. Евгений Водолазкин, Андрей Аствацатуров, Борис Гребенщиков, Елизавета Боярская, Андрей Битов, Михаил Пиотровский, Елена Колина, Михаил Шемякин, Татьяна Москвина, Валерий Попов, "митёк" Виктор Тихомиров, Александр Городницкий и многие другие "знаковые лица" города на Неве - о питерских маршрутах и маршрутках, дворах-колодцах и дворцах Растрелли, Васильевском острове, Московском проспекте и платформе Ржевка, исчезнувшем в небытии Введенском канале и «желтом паре петербургской зимы"…
	        Книга иллюстрирована акварелями Лизы Штормит и рисунками Виктора Тихомирова, на переплете - офорт Михаила Шемякина. ',
                'created_at' => '1458304450',
                'delete' => 0,
            ],
            [
                'title' => 'Семь навыков высокоэффективных людей.',
                'src' => 'http://ozon-st.cdn.ngenix.net/multimedia/c300/1018960911.jpg',
                'author' => 'Стивен Р. Кови',
                'description' => 'Во-первых, эта книга излагает системный подход к определению жизненных целей, приоритетов человека. Эти цели у всех разные, но книга помогает понять себя и четко сформулировать жизненные цели. Во-вторых, книга показывает, как достигать этих целей. И в-третьих, книга показывает, как каждый человек может стать лучше. Причем речь идет не об изменении имиджа, а о настоящих изменениях, самосовершенствовании. Книга не дает простых решений и не обещает мгновенных чудес. Любые позитивные изменения требуют времени, работы и упорства. Но для людей, стремящихся максимально реализовать потенциал, заложенный в них природой, эта книга - дорожная карта.',
                'created_at' => '1467462131',
                'delete' => 0,
            ],
            [
                'title' => 'Приключения Эмиля из Леннеберги',
                'src' => 'http://ozon-st.cdn.ngenix.net/multimedia/c300/1007505349.jpg',
                'author' => 'Emil i Lonneberga',
                'description' => 'Веселая повесть про Эмиля из Леннеберги, которую написала замечательная шведская писательница Астрид Линдгрен, а на русский язык блистательно пересказала Лилианна Лунгина, полюбилась и взрослым и детям всей планеты. Этот вихрастый мальчуган - ужасный озорник, он и дня не проживет, не напроказничав. Ну кому придет в голову гонять кошку, чтобы проверить, хорошо ли она прыгает?! Или надеть на себя супницу? Или поджечь перо на шляпе у пасторши? Или поймать в крысоловку родного отца, а поросенка накормить пьяными вишнями?..',
                'created_at' => '1460203863',
                'delete' => 0,
            ],
            [
                'title' => 'English Grammar in Use with Answers',
                'src' => 'http://ozon-st.cdn.ngenix.net/multimedia/c300/1005238140.jpg',
                'author' => 'Рэймонд Мерфи',
                'description' => 'English Grammar in Use Fourth Edition is an updated version of the best-selling grammar title.
	        This new edition with answers:
	        has a fresh, appealing new design and clear layout, with revised and updated examples;
	        is arranged in a tried-and-trusted, easy to use format, with explanations of grammar points on each left-hand page and exercises to check understanding on the right;
	        is perfect for independent studying and the study guide helps learners to identify which language points to focus on;
	        contains lots of additional practice exercises to consolidate learning.',
                'created_at' => '1496315482',
                'delete' => 0,
            ]
        ];

        $this->batchInsert('{{%books}}', [
            'title',
            'src',
            'author',
            'description',
            'created_at',
            'delete',
        ], $insert);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        echo "m201211_055059_books_init cannot be reverted.\n";

        return false;
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m201211_055059_books_init cannot be reverted.\n";

        return false;
    }
    */
}
