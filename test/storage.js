"use strict";

var assert = require("assert");
var should = require("chai").should;
var storage = require("../storage.js");

describe("storage", function(){
	describe("#db", function(){
		
	}
	describe("#uuid", function(){
		it("creates a proper uuid", function(){
			storage.uuid().should.have.length(36);
		});
	}
	describe("#timestamp", function(){
		it("creates a unix timestamp", function(){
			storage.timestamp().should.equal((new Date()).getTime());
		});
	}
});
