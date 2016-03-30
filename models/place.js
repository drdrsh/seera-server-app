'use strict';

var BaseModel = require(framework.helpers.path.models('entity', true));

var instance;

function PlaceModel() {

    BaseModel.call(this);

    this.getEntityName = function(){ return "place" };

    this.getNameField = function(){ return "name" };

    this.getRelationshipSchema = function() {
        return {};
    };

    this.getEntitySchema = function() {
        return {};
    };

}

require("util").inherits(PlaceModel, BaseModel);

module.exports = {
    getInstance: function() {
        return instance || (instance = new PlaceModel());
    }
};
