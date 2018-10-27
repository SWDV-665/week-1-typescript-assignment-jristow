class Grocery {
    constructor(public name: string, public quantity: number, public description: string, public price: number){
        this.name = name;
        this.quantity = quantity;
        this.description = description;
        this.price = price;
    }
    printItem() {
        return "Item: " + this.name + " Price: $" + String(this.price)
    }
}

let rice = new Grocery('rice', 2, 'pounds of rice', 2.99)
let milk = new Grocery('milk', 1, 'gallons of milk', 4)
let chicken = new Grocery('chicken', 3, 'pounds of chicken', 8.99)

let groceryList = [rice, milk, chicken]
let str = '<ul>'

groceryList.forEach(function(item) {
    str += '<li>' + item.printItem() + '</li>';
});

str += '</ul>'  
document.body.innerHTML = str
