const CustomMatcher = {
    toBeCalculator: function () {
        return {
            compare: function (actual, expected) {
                const result = {
                    pass: false,
                    message: ''
                };

                if (actual instanceof  Calculator) {
                    result.pass = true;
                    result.message = `Expected actual ${actual} not to be instance of Calculator`;
                } else {
                    result.pass = false;
                    result.message = `Expected actual ${actual} to be instance of Calculator`;
                }

                return result;
            }
        }
    }
    //toBeAge:function () {}
}