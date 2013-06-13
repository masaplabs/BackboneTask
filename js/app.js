define([
    'collection/tasks',
    'view/tasks',
    'view/add_task',
    'backbone'
], function (TaskCollection, TaskListView, AddTaskView) {
    // 起動時の処理
    var App = Backbone.View.extend({
        // インスタンス生成時に実行
        initialize: function () {
            // Collection のインスタンスを生成
            var tasks = new TaskCollection();

            // TODO: ajax でモデルを取得する
            setTimeout(function () {
                // Collection にモデルをセット
                tasks.set([
                    {
                        title: 'task1',
                        completed: true
                    },
                    {
                        title: 'task2'
                    },
                    {
                        title: 'task3'
                    }
                ]);
            }, 1000);

            // タスクリストビュー
            var task_list_view = new TaskListView({
                collection: tasks
            });

            // 新規タスク追加ビュー
            new AddTaskView({
                collection: tasks
            });

            // タスクリストレンダリング
            task_list_view.render();
        }
    });

    return App;
});