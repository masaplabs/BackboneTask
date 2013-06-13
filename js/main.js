'use strict'
requirejs.config({
    paths: {
        'jquery': 'vendor/jquery',
        'underscore': 'vendor/underscore',
        'backbone': 'vendor/backbone'
    },
    shim: {
        'underscore': {
            exports: '_'
        },
        // backbone を読みこめば jquery と underscore も読みこんでくれる
        'backbone': {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        }
    },
    // キャッシュ無効
    urlArgs: 'bust=' + (new Date()).getTime()
});

require(['app'], function (App) {
    new App;
});