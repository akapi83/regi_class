class Product {

  constructor(name, price, taxType) {
    this.name = name;
    this.price = price;
    this.taxType = taxType;
  }

  getName() {
    return this.name;
  }

  getPrice() {
    return this.price;
  }

  getTaxType() {
    return this.taxType;
  }

}

class Register {
  products = [];
  normalSubTotal = 0;
  lightSubTotal = 0;

  constructor(id) {
    this.id = id;
  }

  setProducts(products) {
    this.products = products;
  }

  addProduct(product) {
    this.products = [...this.products, product];
  }

  calcSubTotal() {
    this.products.forEach(product => {
      if (product.getTaxType()) {
        this.normalSubTotal += product.getPrice();
      } else {
        this.lightSubTotal += product.getPrice();
      }
    });
  }

}

const coffee = new Product('ボス', 1000, false);
const frige = new Product('冷蔵庫', 80000, true);
const milk = new Product('明治牛乳', 500, false);

const regiA = new Register('Aレジ');
regiA.addProduct(coffee);
regiA.addProduct(frige);
regiA.addProduct(milk);
console.log(regiA.products);

regiA.calcSubTotal();

console.log(regiA.normalSubTotal);
console.log(regiA.lightSubTotal);