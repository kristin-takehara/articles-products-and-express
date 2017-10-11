//jshint esversion: 6


///NEED TO EXAMINE THIS DB CLOSELY. What needs to be returned to the router in the instantiation?
class Articles {
  constructor() {
    this.title = "";
    this._collection = [];
  }

  // all() {
  //   return this._collection;
  // }

  // add(title) {
  //   this._collection.push(title);
  // }

  // delete(title) {
  //   this._collection.filter(title);
  // }

}

module.exports = new Articles();

