const Issue = require("../models/Issue");
const Promise = require("bluebird");

exports.postIssue = (req, res, next) => {

    console.log(req.body.title);
    const issue = new Issue({
        title: req.body.title, // e.g., Should SF remain a sanctuary city?
        scale: req.body.scale, // e.g., local, state, national
        category: req.body.category // e.g., healthcare, immigration
    });

    Issue.findOne({ title: req.body.title }, (err, existingIssue) => {
        if (err) {
            res.send("Sorry, error!");
        }
        if (existingIssue) {
            res.send("Issue with this title already exists");
        } else {
            issue.save((err) => {
                res.redirect('/issue/' + issue._id);
            });
        }
    });
};

exports.getIssue = function (req, res, next) {
    console.log(JSON.stringify(req.params));
    Issue.findOne()
        .where('_id', req.params.issueid)
        .exec(function(err, issue) {
            res.send(issue);
        });
};

exports.getIssueById = function (id) {
    return new Promise(function(resolve, reject) {
        Issue.findOne()
            .where('_id', id)
            .exec(function(err, issue) {
                if (err) {
                    reject(err);
                }
                resolve(issue);
            });
    })
};

exports.findIssueByIdAndUpdate = function(id, update) {
    Issue.findByIdAndUpdate(id, update).exec(function(err, issue) {
        return issue;
    });
}

exports.getIssues = function (req, res, next) {
    const category = req.get("category");
    const scale = req.get("scale");
    Issue.find()
        .where('category', category)
        .where('scale', scale)
        .exec(function(err, issues) {
            console.log("issues: " + issues);
            res.send(issues);
        });
};