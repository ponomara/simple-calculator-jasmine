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


        it('Calls  add');
        it('Calls  subtracts');
        it('Calls  multiple');
        it('Calls  divide');
        it('Validate operation');
        it('Calls  updateResult');
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