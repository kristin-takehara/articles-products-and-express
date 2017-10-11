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

getProductById(id){
  let index = null;
  this._collection.forEach((object) => {
      if(object.id === id){
        index = this._collection.indexOf(object);
      }
    });
    if(index === null){
      return false;
    }else{
      return this._collection[index];
    }
  }

addProduct() {
  let result = true;
  this._collection.forEach((object) => {
    if(object.name.toLowerCase() === product.name.toLowerCase()) {
      result = false;
    }
    if (result === false){
      return result;
    }else{
      product.id = this.id;
      this.id++;
      this._collection.push(product);
      return result;
    }
  });
}



}