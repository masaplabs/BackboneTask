define([
	'model/task',
	'view/tasks',
	'backbone'
], function (TaskModel,TaskListView) {
	var AddTaskView = Backbone.View.extend({
		// レンダリングの際に挿入されるタグ（デフォルトは div）
		el: '#addTask',
		// イベントの登録
		events: {
			'submit': 'addTask'
		},

		// ここから独自メソッド

		// タスクを追加する
		addTask: function (e) {
			// submit を終了する
			e.preventDefault();

			// タスクモデルを生成
			var task = new TaskModel();

			// タイトルをセットする
			var set_success = task.set({
				title: $('#new_task_title').val()
			}, {
				validate: true
			});

			if (set_success) {
				this.collection.add(task);
			}
		}
	});
	
	return AddTaskView;
});