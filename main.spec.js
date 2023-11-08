describe('main.js', function () {

    describe('main()', function () {
        it('validate expression, if first number is invalid', function () {
            // spy on updateResult() method
            spyOn(window,'updateResult');// .and.stub(); is the default and can be omitted
            calculate('a+3');
            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('Expression not recognized');
            expect(window.updateResult).toHaveBeenCalledTimes(1);
        });

        it('validate expression, if second number is invalid', function () {
            // spy on updateResult() method
            spyOn(window,'updateResult');// .and.stub(); is the default and can be omitted
            calculate('3+a');
            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('Expression not recognized');
            expect(window.updateResult).toHaveBeenCalledTimes(1);
        });

        it('validate expression, if operation is invalid', function () {
            // spy on updateResult() method
            spyOn(window,'updateResult');// .and.stub(); is the default and can be omitted
            calculate('3_3');
            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('Expression not recognized');
            expect(window.updateResult).toHaveBeenCalledTimes(1);
        });


        it('Calls  add', function () {
            const spy = spyOn(Calculator.prototype, 'add');
            calculate('3+2');

            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledTimes(2);
            expect(spy).toHaveBeenCalledWith(3);
            expect(spy).toHaveBeenCalledWith(2);

        });
        it('Calls  subtracts', function () {
            const spy = spyOn(Calculator.prototype, 'subtract');
            calculate('3-2');
            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledWith(2);
            expect(spy).not.toHaveBeenCalledWith(3);
            expect(spy).toHaveBeenCalledTimes(1);

        });
        it('Calls  multiple', function () {
            const spy = spyOn(Calculator.prototype, 'multiply');
            calculate('4*5');
            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledWith(5);
            expect(spy).not.toHaveBeenCalledWith(4);
            expect(spy).toHaveBeenCalledTimes(1);
        });
        it('Calls  divide', function () {
            const spy = spyOn(Calculator.prototype, 'divide');
            calculate('6/3');
            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledWith(3);
            expect(spy).not.toHaveBeenCalledWith(6);
            expect(spy).toHaveBeenCalledTimes(1);
        });

        it('Calls  updateResult (example for callThrough)', function () {
            spyOn(window, 'updateResult');
            spyOn(Calculator.prototype, 'multiply').and.callThrough();
            calculate('3*9');

            expect(window.updateResult).toHaveBeenCalled();
            expect(Calculator.prototype.multiply).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith(27);
        });
        it('Calls  updateResult (example for callFake)', function () {
            spyOn(window, 'updateResult');
            spyOn(Calculator.prototype, 'multiply').and.callFake(function () {
                return 'Fake Call';
            });
            calculate('3*9');

            expect(window.updateResult).toHaveBeenCalled();
            expect(Calculator.prototype.multiply).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('Fake Call');
        });
        it('Calls  updateResult (example for returnValue)', function () {
            spyOn(window, 'updateResult');
            spyOn(Calculator.prototype, 'multiply').and.returnValue('returns a value');
            calculate('3*9');

            expect(window.updateResult).toHaveBeenCalled();
            expect(Calculator.prototype.multiply).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('returns a value');
        });
    });

    describe('updateResult()', function () {

        beforeAll(function () {
            const element = document.createElement('div');
            element.setAttribute('id', 'result');
            document.body.appendChild(element);
            this.element = element;
        });

        afterAll(function () {
            document.body.removeChild(this.element);
        });

        it('add result to the DOM element', function () {
            updateResult("5");
            expect(this.element.innerText).toBe("5");
        });
    });

});