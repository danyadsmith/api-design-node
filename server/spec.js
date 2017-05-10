var app = require('./server');
var request = require('supertest');
var expect = require('chai').expect;
var helpers = require('./helpers');

// TODO: make tests for the other CRUD routes
// DELETE, UPDATE, PUT, GET ONE
// to run the test type mocha server/specs.js

describe('[LIONS]', function(){

  it('should POST a new lion', function(done) {
    request(app)
      .post('/lions')
      .set('Accept', 'application/json')
      .send(helpers.lions[0])
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, resp) {
        var mufasa = resp.body;
        expect(mufasa).to.be.an('object');
        expect(mufasa.name).to.eql('Mufasa')
        expect(mufasa.gender).to.eql('male')
        done();
      })
  });

  it('should POST a new lion', function(done) {
    request(app)
      .post('/lions')
      .set('Accept', 'application/json')
      .send(helpers.lions[1])
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, resp) {
        var sarabi = resp.body;
        expect(sarabi).to.be.an('object');
        expect(sarabi.name).to.eql('Sarabi')
        expect(sarabi.gender).to.eql('female')
        done();
      })
  });

  it('should POST a new lion', function(done) {
    request(app)
      .post('/lions')
      .set('Accept', 'application/json')
      .send(helpers.lions[2])
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, resp) {
        var simba = resp.body;
        expect(simba).to.be.an('object');
        expect(simba.name).to.eql('Simba')
        expect(simba.gender).to.eql('male')
        done();
      })
  });

  it('should POST a new lion', function(done) {
    request(app)
      .post('/lions')
      .set('Accept', 'application/json')
      .send(helpers.lions[3])
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, resp) {
        var nala = resp.body;
        expect(nala).to.be.an('object');
        expect(nala.name).to.eql('Nala')
        expect(nala.gender).to.eql('female')
        done();
      })
  });

  it('should POST a new lion', function(done) {
    request(app)
      .post('/lions')
      .set('Accept', 'application/json')
      .send(helpers.lions[4])
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, resp) {
        var scar = resp.body;
        expect(scar).to.be.an('object');
        expect(scar.name).to.eql('Scar')
        expect(scar.gender).to.eql('male')
        done();
      })
  });

  it('should get a lion by ID via a GET request', function(done) {
    request(app)
      .get('/lions/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, resp) {
        var mufasa = resp.body;
        expect(mufasa).to.be.an('object');
        expect(mufasa.age).to.eql('20');
        done();
      })
  });

  it('should get all lions via a GET request', function(done) {
    request(app)
      .get('/lions')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, resp) {
        var lions = resp.body
        //console.log(JSON.stringify(lions, null, 2));
        expect(lions).to.be.an('array');
        expect(lions.length).to.eql(5);
        done();
      })
  });

  it('should delete a lion via a DELETE request', function(done) {
    request(app)
      .delete('/lions/5')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, resp) {
        expect(resp.body).to.be.an('object');
        done();
      })
  });

  it('should get all lions via a GET request', function(done) {
    request(app)
      .get('/lions')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, resp) {
        var lions = resp.body
        expect(lions).to.be.an('array');
        expect(lions.length).to.eql(4);
        done();
      })
  });

  it('should update a lion via a PUT request', function(done) {
    request(app)
      .put('/lions/3')
      .set('Accept', 'application/json')
      .send(helpers.updates[0])
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, resp) {
        var simba = resp.body;
        expect(simba).to.be.an('object');
        expect(simba.name).to.eql('Simba')
        expect(simba.age).to.eql('10')
        done();
      })
  });

  it('should update a lion via a PUT request', function(done) {
    request(app)
      .put('/lions/4')
      .set('Accept', 'application/json')
      .send(helpers.updates[1])
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, resp) {
        var nala = resp.body;
        expect(nala).to.be.an('object');
        expect(nala.name).to.eql('Nala')
        expect(nala.age).to.eql('10')
        done();
      })
  });

});


