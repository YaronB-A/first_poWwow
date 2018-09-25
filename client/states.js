angular.module('app').config(function ($stateProvider) {
    'use strict';
    $stateProvider.state('app', {
        abstract: true,
        controller: 'app',
        templateProvider: function (app) {
            return app.templateProvider('app');
        }
    }).state('app.menu', {
        views: {
            app: {
                controller: 'app_menu',
                templateProvider: function (app) {
                    return app.templateProvider('app.menu');
                }
            }
        }
    }).state('app.multiselect', {
        views: {
            app: {
                controller: 'app_multiselect',
                templateProvider: function (app) {
                    return app.templateProvider('app.multiselect');
                }
            }
        }
    }).state('app.logincool', {
        views: {
            app: {
                controller: 'app_logincool',
                templateProvider: function (app) {
                    return app.templateProvider('app.logincool');
                }
            }
        }
    }).state('app.monitor', {
        views: {
            app: {
                controller: 'app_monitor',
                templateProvider: function (app) {
                    return app.templateProvider('app.monitor');
                }
            }
        }
    }).state('app.menu1', {
        views: {
            app: {
                controller: 'app_menu1',
                templateProvider: function (app) {
                    return app.templateProvider('app.menu1');
                }
            }
        }
    });
});