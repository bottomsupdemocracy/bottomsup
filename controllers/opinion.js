const Opinion = require("../models/Opinion");
const Issue = require("./issue");
const Promise = require("bluebird");

exports.postOpinion = (req, res, next) => {

    saveOneOpinion(req).then(function(opinion) {
       res.send(opinion);
    });
};

function saveOneOpinion(req) {
    const opinion = new Opinion({
        issue: req.body.issue, // issue's ObjectId
        user: req.body.user, // user's ObjectId
        delegateOpinion: req.body.delegateOpinion, // if it exists
        statement: req.body.statement // e.g., 300 character limit
    });

    return new Promise(function(resolve, reject) {
        Opinion.findOne()
            .where( 'issue', req.body.issue )
            .where( 'user', req.body.user )
            .exec(function(err, existingOpinion) {
                if (existingOpinion) {
                    resolve("Opinion for this issue and user already exists");
                } else {
                    opinion.save(function(err) {
                        console.log("Saved opinion!");
                        resolve(opinion);
                    });
                }
            });
    });
}

exports.getOpinion = function(req, res, next) {
    Issue.findOne()
        .where('_id', req.params.opinionId)
        .exec(function(err, opinion) {
            res.send(opinion);
        });
};

exports.getOpinionsForIssue = function(req, res, next) {
    var issue = req.params.issue;
    Opinion.find().where('issue', issue)
        .exec(function(err, issues) {
            res.send(issues);
        })
}
