const expect = require('expect');
const utils = require('./utils');

describe('Utils', ()=>{
    it('should add two numbers', () => {
        var res = utils.add(33, 11);
        expect(res).toBe(44).toBeA('number');
    });

    it('should sqaure a number', () => {
        var res = utils.square(5);
        expect(res).toBe(25).toBeA('number');
    });

    describe('#Async', ()=>{
        it('should async add 2 numbers', (done) => {
            utils.asyncAdd(2,3, (sum)=>{
                expect(sum).toBe(5).toBeA('number');
                done();
            });
        });
        
        it('should async square a number', (done)=>{
            utils.asyncSquare(5, (square)=>{
                expect(square).toBe(25).toBeA('number');
                done();
            });
        });
    });
   
    
});

describe('SetName', ()=>{
    it('should set first name and last name', () => {
        var user  = {location: 'auraiya', age: 25};
        var res = utils.setName(user, 'Aviral Yadav');
        expect(res).toInclude({
            firstName: 'Aviral',
            lastName: 'Yadav'
        })
    })
});



// it('should expect some value', () => {
//     // expect(12).toNotBe('hey');
//     expect({name: 'Avi'}).toNotEqual({name: 'avi'});
//     expect([2,3,4]).toExclude(5)
//     expect({name: 'avi', age: 25}).toInclude({age: 25})
// });

