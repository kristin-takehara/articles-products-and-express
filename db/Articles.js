//jshint esversion: 6

///NEED TO EXAMINE THIS DB CLOSELY. What needs to be returned to the router in the instantiation?
class Articles {
  constructor() {
    this._collection = [];
  }

  getAllArticles(){
    return this._collection;
  }

  getArticleByTitle(title) {
    let index = null;
    this._collection.forEach((object) => {
      if(object.title === title) {
        index = this._collection.indexOf(object);
      }
    });
    if(index === null){
      return false;
    }else{
      return this._collection[index];
    }
  }


//article request has keys: title, body, author, urlTitle
  addArticle(article){
    let result = true;
    this._collection.forEach((object) => {
      if(object.title.toLowerCase() === article.name.toLowerCase()) {
        result = false;
      }
      if(result === false){
        return result;
      }else{
        article.title = this.title;
        article.urlTitle = encodeURI(article.title);
        this._collection.push(article);
        return this._collection;
      }
    });
  }

  editArticle(title, object) {
    let result = true;
    this._collection.forEach((object) => {
      if(object.title.toLowerCase() == item.title.toLowerCase()) {
        resulte = false;
      }
    });
    if(article.body = "" || object.body = ""){
      result = false;
    }
    if(!result){
      return result;
    }else{
      let article = this.getArticleByTitle(title);
      article.title = object.title;
      article.body = object.body;
      article.author = object.author;
      return results;
    }
  }
//Do i want to use the find method here?
  deleteArticle(title) {
    let index;
    this._collection.forEach((item) => {
      if(item.title === id) {
        index = this._collection.indexOf(item);
      }
    });
    this._collection.splice(index, 1);
    return true;
  }

}

module.exports = Articles;

