const request = require('supertest');
const expect = require('expect');
const app = require('./server').app;

describe('Server', ()=>{
    describe('#Hello World', ()=>{
        it('should show hello world text', (done) => {
            request(app)
            .get('/')
            .expect(404)
            .expect((res)=>{
                expect(res.body).toInclude({name: 'Error Critical'});
            })
            .end(done);
        });
    });
    
    describe('#Users', ()=>{
        it('should return users list', (done) => {
            request(app)
            .get('/users')
            .expect(200)
            .expect(res=>{
                expect(res.body).toInclude('avi');
            })
            .end(done);
        });
    });
    
});

