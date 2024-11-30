const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./api');

const { expect } = chai;
chai.use(chaihttp);

describe('Index Page', () => {
  it('correct status code?', (done) => {
    chai.request(server)
      .get('/')
      .end((err, res) = {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('Correct results?', (done) => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        expect(res.text).to.equal('Welcome to the payment system');
        done();
      });
  });

  it('Other? Correct Content-Type header', (done) => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.header('content-type', /text\/html/);
        done();
      });
  });
});
