define([
    'model/task',
    'collection/tasks',
    'view/task',
    'backbone'
], function (TaskModel, TaskCollection, TaskView) {
    /**
    Task リストを表示するための View

    @class TaskListView
    **/
    var TaskListView = Backbone.View.extend({
        // レンダリングの際に挿入されるタグ（デフォルトは div）
        tagName: 'ul',
        // インスタンス生成時に実行
        initialize: function () {
            this.collection.on('add', this.addNewTask, this);
            this.collection.on('change', this.updateCount, this);
            this.collection.on('destroy', this.updateCount, this);
        },

        // ここから独自メソッド

        // 新しいタスクを追加
        addNewTask: function (task) {
            var task_view = new TaskView({
                model: task
            });

            task_view.render().$el.hide();
            this.$el.append(task_view.render().$el);
            task_view.render().$el.fadeIn();

            $('#new_task_title').val('').focus();

            // 残りタスク数更新
            this.updateCount();
        },
        // 残りタスク数を更新する
        updateCount: function () {
            var uncompleted_task_list = this.collection.filter(function (task) {
                return !task.get('completed');
            });

            $('#task_count').html(uncompleted_task_list.length);
        },
        // レンダリング
        render: function () {
            this.collection.each(function (task) {
                var task_view = new TaskView({
                    model: task
                });

                this.$el.append(task_view.render().el);
            }, this);
            
            $('#task_list').html(this.el);

            // 残りタスク数更新
            this.updateCount();

            return this;
        }
    });

    return TaskListView;
});