function createMultiplier(multiplier) {
    return function (x) {
        return x * multiplier;
    }
}
const double = createMultiplier(2);
const triple = createMultiplier(3);
console.log(double(5), triple(4));