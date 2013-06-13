define(['backbone'], function () {
    /**
    Task を表示するための View

    @class TaskView
    **/
    var TaskView = Backbone.View.extend({
        // レンダリングの際に挿入されるタグ（デフォルトは div）
        tagName: 'li',
        // インスタンス生成時に実行
        initialize: function () {
            // destroy イベントが発火したときに実行する
            this.model.on('destroy', this.remove, this);
            // change イベントが発火したときに実行する
            this.model.on('change', this.render, this);
        },
        // イベントの登録
        events: {
            'click .delete': 'destroy',
            'click .toggle': 'toggle'
        },

        // ここから独自メソッド

        // チェックボックスのオンオフを切り替える
        toggle: function () {
            this.model.set('completed', !this.model.get('completed'));
        },
        // タスクを削除する
        destroy: function () {
            if (confirm('ok?')) {
                // モデルの削除をおこなう（initialize により View の remove も実行される）
                this.model.destroy();
            }
        },
        // 表示上からタグを削除する
        remove: function () {
            this.$el.remove();
        },
        // テンプレートの指定
        template: _.template($('#task-template').html()),
        // レンダリング
        render: function () {
            var template = this.template(this.model.toJSON());
            this.$el.html(template);

            return this;
        }
    });

    return TaskView;
})