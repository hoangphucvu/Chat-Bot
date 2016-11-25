/*
 * @Author: Ngo Hung Phuc
 * @Date:   2016-11-18 20:06:26
 * @Last Modified by:   Ngo Hung Phuc
 * @Last Modified time: 2016-11-26 01:35:16
 */

var Question = require('../models/question.server.model');
var Answer = require('../models/answer.server.model');
exports.QuestionIndex = function(req, res) {
    var query = Question.find({}).sort({
        'CreateDate': -1
    }).limit(6);
    query.exec(function(err, questions) {
        if (err)
            return res.status(500).send();
        else
            res.send(questions);
    });
};

exports.QuestionDetail = function(req, res) {
    var id = req.params.id;
    Question.findById(id).populate('QuestionId').exec(function(err, questionDetail) {
        console.log(err);
        if (err) {
            return res.status(500).send();
        } else {
            Answer.find({
                "QuestionId": {
                    "$in": id
                }
            }, function(err, answers) {
                if (err) {
                    console.log(err);
                    return res.status(500).send();
                } else {
                    res.send({
                        questionDetail: questionDetail,
                        answers: answers
                    });
                }
            });
        }
    });
};