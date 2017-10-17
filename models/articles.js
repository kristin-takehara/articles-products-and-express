//jshint esversion: 6

///NEED TO EXAMINE THIS DB CLOSELY. What needs to be returned to the router in the instantiation?
class Articles {
  constructor() {
  }

  getAllArticles(){
    return this._collection;
  }

}

module.exports = Articles;
