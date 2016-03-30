'use strict';

var BaseModel = require(framework.helpers.path.models('entity', true));

var instance;


function TribeModel() {

    BaseModel.call(this);

    this.getEntityName = function(){ return "tribe" };

    this.getNameField = function(){ return "name" };

    this.getRelationshipSchema = function() {
        return {};
    };

    this.getEntitySchema = function() {
        return {};
    };

}

require("util").inherits(TribeModel, BaseModel);

module.exports = {
    getInstance: function() {
        return instance || (instance = new TribeModel());
    }
};
