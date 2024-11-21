function weirdBehavior() {
    x = 5;
    function changeX() {
        var x = 10;
    }
    changeX()
}
weirdBehavior()
console.log(x);