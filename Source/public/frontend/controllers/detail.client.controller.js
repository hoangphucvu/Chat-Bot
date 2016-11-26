/*
 * @Author: Ngo Hung Phuc
 * @Date:   2016-11-25 23:14:43
 * @Last Modified by:   Ngo Hung Phuc
 * @Last Modified time: 2016-11-26 22:02:57
 */

(function() {
    'use strict';

    angular.module('ChatBotApp')
        .controller('DetailController', DetailController);

    DetailController.$inject = ['$scope', '$routeParams', 'QuestionDetailService'];

    function DetailController($scope, $routeParams, QuestionDetailService) {
        var id = $routeParams.id;
        //console.log("From client " + id);
        QuestionDetailService.GetQuestionsDetail(id).then(function(result) {
            //console.log("Result call from angular controller " + result);
            $scope.detail = result.questionDetail;
            $scope.answers = result.answers;
        });
    }
})();