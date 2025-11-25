class Arithmetic {
    add(x, y) {
        return x + y;
    }

    sub(x, y) {
        return x - y;
    }

    mult(x, y) {
        return x * y;
    }

    div(x, y) {
        if (y === 0) {
            throw new oneError("ERROR 1: Denominator cannot be zero :(");
        }
        return x / y;
    }

    exp(x, y) {
        return Math.pow(x, y);
    }

    rad(x, y) {
        const calc = this.exp(x, 0.5);
        return calc;
    }

    termial(x) {
        if (x < x + 0.1 && x > x - 0.1) {
            throw new twoError("ERROR 2: Termial is not defined for negative/decimals numbers :(");
        }
        const calc = x * (x + 1) / 2;
        return calc;
    }
}

module.exports = Arithmetic;