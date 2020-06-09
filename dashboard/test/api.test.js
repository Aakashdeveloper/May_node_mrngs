let chai = require('chai');
let  chaiHttp = require('chai-http');
let expect = chai.expect;
chai.use(chaiHttp);

describe('Testing Rest Api', () => {
    it('Should test / endpoint',(done) => {
        chai
            .request('http://localhost:9700')
            .get('/')
            .then((res) => {
                expect(res).to.have.status(200)
                done()
            })
            .catch((err) => {
                throw er
            })
    })
    it('Should test /users endpoint',(done) => {
        chai
            .request('http://localhost:9700')
            .get('/users')
            .then((res) => {
                expect(res).to.have.status(200)
                done()
            })
            .catch((err) => {
                throw er
            })
    })
    it('Should test /addUser endpoint',(done) => {
        chai
            .request('http://localhost:9700')
            .post('/addUser')
            .send({"_id":3,"name":"Jackson"})
            .then((res) => {
                expect(res).to.have.status(200)
                done()
            })
            .catch((err) => {
                throw er
            })
    })
})
