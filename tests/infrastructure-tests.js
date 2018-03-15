var chai = require('chai');
var expect = chai.expect;

describe("GBS should have access to filestore as package",function(){
    it("requesting access to gbs-filestore should get it",function(){
        var filestore = require('gbs-filestore');
        expect(filestore).to.be.an('object');
    });
})