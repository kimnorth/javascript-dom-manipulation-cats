var addCat = function(inputName, inputFood, inputImage){
  var cat = createUl();
  var name = createLi(inputName);
  var food = createLi(inputFood);
  var image = createImage(inputImage);
  appendElements(cat, name, food, image);
}

var createUl = function(){
  var cat = document.createElement('ul');
  cat.classList.add('cat');
  return cat;
}

var createLi = function(text){
  var newLi = document.createElement('li');
  newLi.innerText = text;
  return newLi;
}

var createImage = function(image){
  var newLi = document.createElement('li');
  var picture = document.createElement('img');
  picture.src = image;
  picture.width = "500";
  newLi.appendChild(picture);
  return newLi;
}

var appendElements = function(cat, name, food, image){
  cat.appendChild(name);
  cat.appendChild(food);
  cat.appendChild(image);
  var cats = document.querySelector('#cats');
  cats.appendChild(cat);
}

var app = function(){

  addCat("Name: Steve", "Favourite Food: Chips", "http://www.childsplayaz.org/sysimg/large-Cat-Fish-JugglingonBall-WEB.jpg");

  addCat("Name: Serious Cat", "Favourite Food: Crisps", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/CatLolCatExample.jpg/220px-CatLolCatExample.jpg");
  

}

window.onload = app;