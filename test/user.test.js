const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');
const should = chai.should();

chai.use(chaiHttp);

describe('Users', () => {
  describe('/POST register', () => {
    it('it should register a user', (done) => {
      let user = {
        username: "testuser",
        password: "password123"
      }
      chai.request(server)
        .post('/api/users/register')
        .send(user)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('User registered successfully');
          done();
        });
    });
  });
});
