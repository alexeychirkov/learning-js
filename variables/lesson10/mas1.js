let shoppingList = ["яблоки", "хлеб", "молоко"]

function addItem(item) {
    shoppingList.push(item)
}
function removeItem() {
    shoppingList.pop()
}
function printList() {
    console.log("Ваш список продуктов:", shoppingList.length,shoppingList.toString(),shoppingList);
}
printList()
addItem("яйца")
printList()
removeItem()
removeItem()
printList()