describe('main.js', function () {

    describe('main()', function () {
        it('validate expression, if the number is invalid', function () {
            // spy on updateResult() method
            spyOn(window,'updateResult').and.stub();
            calculate('a+3');

            // expect(calculate('a+3')).toBe(5);

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