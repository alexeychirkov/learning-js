function testScopes(a, b) {
    result = a - b;//2
    let sum = a + b;//12
    function innerFunc() {
        result = a + b;//12
        let mult = a * b;//35
        console.log(mult)//35
    }
    innerFunc()
    console.log(sum);
}
testScopes(7, 5)
console.log(result); //12