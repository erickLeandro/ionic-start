var app = angular.module('starter.services', ['ngResource']);

app.factory('Session', function ($resource) {
  return $resource('http://localhost:5000/sessions/:sessionId');
});
