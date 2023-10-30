// test suite
// Suite --> group of tests

describe('Calculator.js', function () {
    // TODO: tests or specs

    it('should add number to the total', function() {
        //TODO: Expectations
        // expect 5+5 to be 10
        // expect(5+5).toBe(10);
        const calculator = new Calculator();
        calculator.add(5);
        // expect total to be 5
        expect(calculator.total).toBe(5);

    });

    it('should subtract number from the total', function() {
        //TODO: Expectations
        const calculator = new Calculator();
        calculator.total = 30;
        calculator.subtract(5);
        expect(calculator.total).toBe(25);
    });

    it('should multiple number with the total', function() {
        //TODO: Expectations
        const calculator = new Calculator();
        calculator.total = 10;
        calculator.multiply(2);
        expect(calculator.total).toBe(20);

    });

    it('should divide number by the total', function() {
        //TODO: Expectations
        const calculator = new Calculator();
        calculator.total = 10;
        calculator.divide(2);
        expect(calculator.total).toBe(5);

    });

    //ToBe Matcher (===)
    it('should initialize the total', function () {
        //TODO: Expectations
        const calculator = new Calculator();
        // let person1 = {name:'leela'};
        // let person2 = {name:'leela'};
        // expect(person1).toBe(person1);

        //expect(calculator.total).toBe('0');  //false
        expect(calculator.total).toBeFalsy();
        expect(calculator.total).toBe(0);  //false
    });

    //ToEqual Matcher
    it('should initialize the constructor', function () {
        const calculator1 = new Calculator();
        const calculator2 = new Calculator();
        //expect(calculator1).toBe(calculator2); //false
        // calculator1.total = '0'; //false
        expect(calculator1).toBeTruthy();
        expect(calculator2).toBeTruthy();
        // expect(calculator2).toBeFalsy(); // false
        expect(calculator1).toEqual(calculator2);
    });

    //not matcher
    it('should have unique calculator object', function () {
        const calculator1 = new Calculator();
        const calculator2 = new Calculator();
        expect(calculator1).not.toBe(calculator2);
    });

    //toBeUndefined
    it('should have common methods', function () {
        const calculator = new Calculator();
        expect(calculator.add).toBeDefined();
        expect(calculator.multiply()).toBeDefined();
        expect(calculator.subtract()).not.toBeUndefined();
        expect(calculator.divide()).not.toBeUndefined();
    });

    //toBeNull
    it('can overwrite total value', function () {
        const calculator = new Calculator();
        calculator.total = null;
        expect(calculator.total).toBeNull();
    });

    //toContain
    it('should have the calculator constructor', function () {
        const calculator = new Calculator();
        let arr = [1,2,3,4];
        expect(arr).toContain(3);
        expect(calculator.constructor.name).toContain('Calc');
    });

    //toBeNaA Matcher
    it('does not handle NaN for multiply', function () {
        const calculator = new Calculator();
        calculator.total = 10;
        calculator.multiply('a');
        expect(calculator.total).toBeNaN();
    });

    //toThrow matcher
    it('should throw error when divide by zero', function () {
        const calculator = new Calculator();
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
        const calculator = new Calculator();
        calculator.total = 10;
        expect(function () {
            calculator.divide(0);
        }).toThrowError('number cannot be 0');
        expect(function () {
            calculator.divide(0);
        }).toThrowError(BadRequestError, 'number cannot be 0');
    });

    //TODO; keep on watching : https://www.youtube.com/watch?v=ZVtVfoqO0FE&list=PL_euSNU_eLbcpJdoM-WWzUlNNVM4TwtMl&index=25
});
