//jshint esversion: 6

class Products {
  constructor(id, name, price, inventory){
    this._collection = [];
  }

//Product methods
all() {
  return this._collection;
}


}