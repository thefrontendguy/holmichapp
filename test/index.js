var expect = require("chai").expect;
var request = require("request");

var id;

var hostname = process.env.HOST ? process.env.HOST : 'http://localhost:3001';

describe("Server User Routes", () => {
    describe("Create route", () => {
        it("should create, save and return a user object", (done) => {

            var body = {
                username: "testuser",
                email: "testuser@test.com",
                password: "testpassword"
            }
            request({ url: `${hostname}/user/create`, json: body, method: 'POST' }, (err, res, body) => {

                let user = body;
                id = user._id;
                expect(user).to.be.an('object');
                expect(user).to.include.keys('email', 'username');
                expect(user).to.not.have.key('password');
                done();
            });
        });
    });

    describe("Login route", () => {
        it("should return a user object when correct email/password combo is entered", (done) => {

            var body = {
                email: "testuser@test.com",
                password: "testpassword"
            }
            request({ url: `${hostname}/user/login`, json: body, method: 'POST' }, (err, res, body) => {

                let user = body;
                expect(user).to.be.an('object');
                expect(user).to.include.keys('email', 'username');
                expect(user.username).to.equal('testuser');
                expect(user.email).to.equal('testuser@test.com');
                expect(user).to.not.have.key('password');
                done();
            });
        });

        it("should return 'email/password combo not found' message and status 404 when wrong email or password is sent", (done) => {
            var body = {
                email: "zjthrgef",
                password: "hrgdsfthgf"
            }

            request({ url: `${hostname}/user/login`, json: body, method: 'POST' }, (err, res, body) => {

                let message = body.status;
                expect(res.statusCode).to.equal(404);
                expect(message).to.equal('email/password combo not found');
                done();
            });
        });
    });

    describe("Update route", () => {
        it("should alter the user object with the specified id", (done) => {

            var body = {
                username: 'alteredusername',
                email: 'alteredemail@test.com'
            }
            request({ url: `${hostname}/user/${id}/update`, json: body, method: 'POST' }, (err, res, body) => {

                expect(body.nModified).to.equal(1);
                done();
            });
        });
    });

    describe("Read route", () => {
        it("should return the user object with the specified id", (done) => {

            request({ url: `${hostname}/user/${id}`, method: 'GET' }, (err, res, body) => {

                var user = JSON.parse(body);
                expect(user).to.be.an('object');
                expect(user).to.include.keys('email', 'username');
                expect(user.username).to.equal('alteredusername');
                expect(user.email).to.equal('alteredemail@test.com');
                expect(user).to.not.have.key('password');
                done();
            });
        });
    });

    describe("Delete route", () => {
        it("should delete the user object with the specified id", (done) => {
            request({ url: `${hostname}/user/${id}/delete`, method: 'DELETE' }, (err, res, body) => {

                var status = JSON.parse(body).status;
                expect(status).to.equal("success");
                done();
            });
        });
    });
});