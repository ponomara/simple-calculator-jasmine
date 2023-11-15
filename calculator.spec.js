// test suite
// Suite --> group of tests aka specs

describe('Calculator.js', function () { //<-- Suite
    // TODO: tests or specs

    describe('Calculator', function () {
        let calculator;
        let calculator2;

        beforeEach(function () {
            // executes before execution of each spec in the suite
            calculator = new Calculator();
            calculator2 = new Calculator();
        });

        afterEach(function () {
            // executes after execution of each spec in the suite
            // clean up after the spec execution
        });

        describe('constructor', function () {
            //toBeNull
            it('can overwrite total value', function () {
                calculator.total = null;
                expect(calculator.total).toBeNull();
            });

            // asymmetric matcher : jasmine.anything()
            it('should return the total as value', function () {
                calculator.total = 10;
                expect(calculator.total).toEqual(jasmine.anything()); //can be a string, a number, an object
                // expect(null).toEqual(jasmine.anything()); //false , will fail
                // expect(undefined).toEqual(jasmine.anything()); //false , will fail

            });

            // any Matcher
            it ('should be an instance ', function (){
                jasmine.addMatchers(CustomMatcher);
                calculator.total = 10;
                expect(calculator).toEqual(jasmine.any(Object));
                expect(calculator).toEqual(jasmine.any(Calculator));
                expect(calculator.total).toEqual(jasmine.any(Number));
                // expect(calculator.total).toEqual(jasmine.any(String)); // false, fails
                expect(calculator).toBeCalculator();
                // expect(calculator.total).toBeCalculator();//false, fails
                expect(calculator.total).not.toBeCalculator();
                //expect(calculator).not.toBeCalculator(); //TODO: fails, comment out
            });


            //objectContaining
            it('should contain total as key', function () {
                calculator.total = 10;
                expect(calculator).toEqual(jasmine.objectContaining({
                    total: 10,
                    //total: 20 // false, fails
                }));
                expect(typeof calculator.total).toEqual(jasmine.stringContaining('umber'));
            });


            //toContain
            it('should have the calculator constructor', function () {
                let arr = [1,2,3,4];
                expect(arr).toContain(3);
                expect(calculator.constructor.name).toContain('Calc');
            });

            //ToBe Matcher (===)
            it('should initialize the total', function () {
                // TODO: Expectations

                // let person1 = {name:'leela'};
                // let person2 = {name:'leela'};
                // expect(person1).toBe(person1);

                //expect(calculator.total).toBe('0');  //false
                expect(calculator.total).toBeFalsy();
                expect(calculator.total).toBe(0);  //false
            });

            //ToEqual Matcher
            it('should initialize the constructor', function () {
                //expect(calculator).toBe(calculator2); //false
                // calculator.total = '0'; //false
                expect(calculator).toBeTruthy();
                expect(calculator2).toBeTruthy();
                // expect(calculator2).toBeFalsy(); // false
                expect(calculator).toEqual(calculator2);
            });

            //not matcher
            it('should have unique calculator object', function () {
                expect(calculator).not.toBe(calculator2);
            });


            //toBeUndefined
            it('should have common methods', function () {
                expect(calculator.add).toBeDefined();
                expect(calculator.multiply()).toBeDefined();
                expect(calculator.subtract()).not.toBeUndefined();
                expect(calculator.divide()).not.toBeUndefined();
            });

        });



        describe('add()', function () {
            it('should add number to the total', function() {
                // TODO: Expectations

                // expect 5+5 to be 10
                // expect(5+5).toBe(10);
                calculator.add(5);
                // expect total to be 5
                expect(calculator.total).toBe(5);
            });

            //toMatch Matcher
            it('should return total a number', function (){
                calculator.total= 10;
                expect(calculator.add(10)).toBe(20);
                expect(calculator.total).toMatch(/-?\d+/);
                // expect(calculator.total).toMatch(/-?[a-z]+/);
                expect(typeof calculator.total).toMatch('umber');
                expect(typeof calculator.total).toMatch('num');
                expect(typeof calculator.total).toMatch('ber');
            });

        });
        describe('multiply()', function () {
            it('should multiple number with the total', function() {
                //TODO: Expectations
                calculator.total = 10;
                calculator.multiply(2);
                expect(calculator.total).toBe(20);
            });

            //toBeNaA Matcher
            it('does not handle NaN for multiply', function () {
                calculator.total = 10;
                calculator.multiply('a');
                expect(calculator.total).toBeNaN();
            });

        });
        describe('subtract()', function () {
            it('should subtract number from the total', function() {
                //TODO: Expectations
                calculator.total = 30;
                calculator.subtract(5);
                expect(calculator.total).toBe(25);
            });
        });
        describe('divide()', function () {
            it('should divide number by the total', function() {
                //TODO: Expectations
                calculator.total = 10;
                calculator.divide(2);
                expect(calculator.total).toBe(5);

            });

            //toThrow matcher
            it('should throw error when divide by zero', function () {
                calculator.total = 10;
                expect(function () {
                    calculator.divide(0);
                }).toThrow();
                expect(function () {
                    calculator.divide(0);
                }).toThrow(new Error('number cannot be 0'));
            });

            //toThrowError matcher
            it('should throw error with message when divided by zero', function() {
                calculator.total = 10;
                expect(function () {
                    calculator.divide(0);
                }).toThrowError('number cannot be 0');
                expect(function () {
                    calculator.divide(0);
                    //}).toThrowError(BadRequestError, 'number cannot be 0'); // false with BadRequestError
                    //}).toThrowError(Error, 'number cannot be 0'); // true with Error
                }).toThrowError(ArithmeticError, 'number cannot be 0');
            });
        });

        describe('get Version', function () {
            it ('fetches version from external source', function (done) {
                spyOn(window, 'fetch').and.returnValue(Promise.resolve(new Response('{"version":"0.2"}')));
                calculator.version.then(function (version) {
                   expect(version).toBe('0.2');
                   done(); // done callback waits for the Promise to resolve
                });
            });
        });
    });
});
