//jshint esversion: 6

class Products {
  constructor(){
    this.id = 0;
    this._collection = [];
  }

//Product methods
getAllProducts() {
  return this._collection;
}

createNewProduct() {
  this._collection.push(id);
}

}