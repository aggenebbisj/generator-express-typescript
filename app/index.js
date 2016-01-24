var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
    askProjectName: function () {
        var done = this.async();
        this.prompt({
            type    : 'input',
            name    : 'name',
            message : 'Your project name',
            default : this.appname // Default to current folder name
        }, function (props) {
            this.log(props.name);
            this.name = props.name
            done();
        }.bind(this));
    },

    copyConfig: function() {
        var self = this;
        [
            'package.json',
            'tsconfig.json',
            'tslint.json'
        ].forEach(function(configFile) {
            self.template(configFile, configFile);
        });
    },

    copySourceFiles: function() {
        this.directory('src', 'src');
    },

    installTsd: function() {
        var self = this;
        this.spawnCommand('tsd', ['install', 'express', 'jasmine', 'supertest', '--save']).on('close', function() {
            self.log("Done scaffolding.\nPlease run 'npm install' to finish up.");
        });
    }
});