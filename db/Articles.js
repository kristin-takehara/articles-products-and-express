//jshint esversion: 6


///NEED TO EXAMINE THIS DB CLOSELY. What needs to be returned to the router in the instantiation?
class Articles {
  constructor() {
    this._collection = [];
  }

  getAllArticles(){
    return this._collection;
  }

  addArticles(article){
    article.urlTitle = encodeURI(article.title);
    this._collection.push(article);
    return this._collection;
  }

  getArticleByTitle(title) {
    let index;
    this._collection.forEach((object) => {
      if(object.title === title) {
        index = this._collection.indexOf(object);
      }
    });
    return this._collection[index];
  }

}

module.exports = new Articles();

