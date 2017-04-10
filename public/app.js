var app = function(){

  // var cat = document.createElement('ul');
  // cat.classList.add('cat');
  // cat.appendChild(name);
  // cat.appendChild(favouriteFood);

  var name = document.createElement('li');
  name.innerText = 'Name: Mittens';

  var favouriteFood = document.createElement('li');
  favouriteFood.innerText = 'Favourite food: Fish Fingers';

  var pictureLi = document.createElement('li');
  var picture = document.createElement('img');
  picture.src = "http://www.childsplayaz.org/sysimg/large-Cat-Fish-JugglingonBall-WEB.jpg"
  picture.width = "500"
  pictureLi.appendChild(picture);

  var cat = document.createElement('ul');
  cat.classList.add('cat');
  // cat.innerText = 'This is the ul'
  cat.appendChild(name);
  cat.appendChild(favouriteFood);
  cat.appendChild(pictureLi);

  var cats = document.querySelector('#cats');
  cats.appendChild(cat);

}

window.onload = app;