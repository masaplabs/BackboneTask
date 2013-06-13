define(['backbone'], function () {
    /**
    Task の Model
    Backbone.Modle を継承

    @class Task
    **/
    var TaskModel = Backbone.Model.extend({
        // 初期値の設定
        defaults: {
            title: 'do something',
            completed: false
        },
        // インスタンス生成時に実行
        initialize: function () {
            // バリデーションに引っかかった際のイベント
            this.on('invalid', function (model, error) {
                $('#error_message').html(error);
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