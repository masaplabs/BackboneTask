define([
    'collection/tasks',
    'view/tasks',
    'view/add_task',
    'backbone'
], function (TaskCollection, TaskListView, AddTaskView) {
    var App = Backbone.View.extend({
        // 起動時の処理
        initialize: function () {
            // Collection のインスタンスを生成
            var tasks = new TaskCollection([
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
