class ArithmeticError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ArithmeticError';
    }
}

class BadRequestError extends Error {
    constructor(message) {
        super(message);
        this.name = 'BadRequestError';
    }
}


function Calculator() {
    this.total = 0;
}

Calculator.prototype.add  = function (number) {
    return (this.total += number);
}

Calculator.prototype.subtract  = function (number) {
    return (this.total -= number);
}

Calculator.prototype.multiply  = function (number) {
    return (this.total *= number);
}

Calculator.prototype.divide  = function (number) {
    if (number === 0) {
        throw new ArithmeticError('number cannot be 0');
    }
    return (this.total /= number);
}

Object.defineProperty(Calculator.prototype, 'version', {
    get: function () {
        return fetch(
            'https://gist.githubusercontent.com/leelanarasimha/4b3dde448c828ec54f29fcc727c680df/raw/b702bd6afcb6ac6edf018f1d0687b40daeb0355b/version.json'
        ).then(function (result) {
            return result.json();
        }).then(function (jsonData) {
            return jsonData.version;
        });
    },
    configurable: true,
    enumerable: true
});
