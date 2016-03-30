'use strict';

var BaseModel = require(framework.helpers.path.models('entity', true));

var instance;

function TranscriptModel() {

    BaseModel.call(this);

    this.getEntityName = function(){ return "transcript" };

    this.getNameField = function(){ return "title" };

    this.getRelationshipSchema = function() {
        return {};
    };

    this.getEntitySchema = function() {
        return {};
    };

}


require("util").inherits(TranscriptModel, BaseModel);

module.exports = {
    getInstance: function() {
        return instance || (instance = new TranscriptModel());
    }
};