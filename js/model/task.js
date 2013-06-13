define(['backbone'], function () {
    /**
    Task の Model
    Backbone.Modle を継承

    @class Task
    **/
    var TaskModel = Backbone.Model.extend({
        // 初期値の設定
        defaults: {
            title: '空のタスク',
            completed: false
        },
        // インスタンス生成時に実行
        initialize: function () {
            // バリデーションに引っかかった際のイベント
            this.on('invalid', function (model, error) {
                $('#error_message').hide();
                $('#error_message').html(error);

                // エラーを表示後消す
                $('#error_message').fadeIn(function () {
                    setTimeout(function () {
                        $('#error_message').fadeOut();
                    }, 2000);
                });
            });
        },
        // バリデーションの定義
        validate: function (attr) {
            if (_.isEmpty(attr.title)) {
                return 'タスク名を入力してください';
            }
        }
    });

    return TaskModel;
});