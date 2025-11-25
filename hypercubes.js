class Hypercubes {
    faces(d) {
        if (d < 0) {
            throw new oneError("ERROR 1: Dimension cannot be negative :(");
        }
        const calc = d * (d -1) / 2 * 2 ** (d - 2);
        return calc;
    }

    edges(d) {
        if (d < 0) {
            throw new oneError("ERROR 1: Dimension cannot be negative :(");
        }
        const calc = d * 2 ** (d - 1);
        return calc;
    }
    vertices(d) {
        if (d < 0) {
            throw new oneError("ERROR 1: Dimension cannot be negative :(");
        }
        const calc = 2 ** d;
        return calc;
    }
}

module.exports = Hypercubes;