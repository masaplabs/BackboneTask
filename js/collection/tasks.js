define([
    'model/task',
    'backbone'
], function (TaskModel) {
    /**
    Task の Collection
    Task の集合を表すため、Backbone.Collection を継承

    @class TaskCollection
    **/
    var TaskCollection = Backbone.Collection.extend({
        model: TaskModel
    });

    return TaskCollection;
});