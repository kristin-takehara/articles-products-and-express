//jshint esversion: 6

class Products {
  constructor(){
    this.id = 0;
    this._collection = [];
  }

//Product methods:

  //return ALL products
  getAllProducts() {
    return this._collection;
  }

  //isolate a product by its id/index position.
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

  //add a product to this._collection.
  addProduct(product) {
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

  //edit product of the collection
  //request will have properties (name, price, inventory)
  editProduct(id, object) {
    let result = true;
    this._collection.forEach((object) => {
      if(object.name.toLowerCase() === item.name.toLowerCase()) {
        result = false;
      }
    });
    if (parseInt(product.price) < 1 || parseInt(object.price) < 1) {
      result = false;
    }
    if(!result){
      return result;
    }else{
      let product = this.getProductById(id);
      product.name = object.name;
      product.price = object.price;
      product.inventory = object.inventory;
      return results;
    }
  }

  //delete product from the colletion by the product ID
  //if successful, redirect to the products page
  //if NOT, send the user back to the NEW article route(/products/:id)

  deleteProduct(id) {
    let index;
    this._collection.forEach((item) => {
      if(item.id === id) {
        index = this._collection.indexOf(item);
      }
    });
    this._collection.splice(index, 1);//remove 1 item at the index position of the item
    return true;
  }

}

module.exports = Products;