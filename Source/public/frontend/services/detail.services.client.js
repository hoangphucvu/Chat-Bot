/*
 * @Author: Ngo Hung Phuc
 * @Date:   2016-11-25 23:20:32
 * @Last Modified by:   Ngo Hung Phuc
 * @Last Modified time: 2016-11-26 22:02:25
 */

(function() {
    'use strict';

    angular.module('ChatBotApp')
        .factory('QuestionDetailService', QuestionDetailService);

    QuestionDetailService.$inject = ['$http', '$q'];

    function QuestionDetailService($http, $q) {
        /*return $q(function(reject, resolve, id) {
            $http.get('/api/GetQuestionDetail/' + id).then(function(response) {
                console.log(response);
                if (response.data.success) {
                    resolve(response.data.msg);
                } else {
                    reject(response.data.msg);
                }
            });
        });*/

        var getQuestionDetailService = {};
        var deferred = $q.defer();
        getQuestionDetailService.GetQuestionsDetail = function($id) {
            $http.get('/api/GetQuestionDetail/' + $id)
                /*, function(response) {
                                console.log(response);
                                if (response.msg === "Success") {
                                    deferred.resolve(response.msg);
                                } else {
                                    deferred.reject(response.msg);
                                }
                            });*/
                .error(function(response) {
                    deferred.reject(response.msg);
                }).success(function(response) {
                    console.log(response);
                    //console.log(response.answers);
                    //console.log(response.questionDetail);
                    deferred.resolve(response);
                });
            return deferred.promise;
        };
        return getQuestionDetailService;
    }


})();