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

cats = [
  { name: "Boba", food: "Favourite food: Sock fluff", image: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg" },

  { name: "Barnaby", food: "Favourite food: Tuna", image: "http://digitalspyuk.cdnds.net/15/44/640x426/gallery-cat-3.jpg" },

  { name: "Max", food: "Favourite food: Whiskas Temptations", image: "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg" },

  { name: "Steve", food: "Favourite food: Chips", image: "Favourite Food: Chips", image: "http://www.childsplayaz.org/sysimg/large-Cat-Fish-JugglingonBall-WEB.jpg" },

  { name: "Serious Cat", food: "Favourite food: Crisps", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/CatLolCatExample.jpg/220px-CatLolCatExample.jpg" }

]

var app = function(){

  cats.forEach(function(cat){
    addCat(cat.name, cat.food, cat.image);
  })

}

window.onload = app;