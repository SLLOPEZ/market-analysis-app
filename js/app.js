var productName = ['bag', 'banana', 'boots', 'chair', 'cthulhu', 'dragon', 'pen', 'scissors', 'shark', 'sweep', 'unicorn', 'usb', 'water_can', 'wine_glass'];
var products = [];
var voteCounter = 0;

function Product(name) {
  this.name = name;
  this.path = 'img/' + name + '.jpg';
  this.votes = 0;
  products.push(this);
};

function productImg() {
  for(var i = 0; i < productName.length; i++){
    new Product(productName[i]);
  }
};
productImg();

var tracker = {
  images: document.getElementById('images'),
  imgOne: document.getElementById('imgOne'),
  imgTwo: document.getElementById('imgTwo'),
  imgThree: document.getElementById('imgThree'),

  randomImg: function() {
    return Math.floor(Math.random() * productName.length);
  },

  displayImg: function() {
    var randomOne = this.randomImg();
    imgOne.src = products[randomOne].path;
    imgOne.name = products[randomOne].name;
    var randomTwo = this.randomImg();
    imgTwo.src = products[randomTwo].path;
    imgTwo.name = products[randomTwo].name;
    while (imgOne.name === imgTwo.name){
      var randomTwo = this.randomImg();
      imgTwo.src = products[randomTwo].path;
      imgTwo.name = products[randomTwo].name;
    };
    var randomThree = this.randomImg();
    imgThree.src = products[randomThree].path;
    imgThree.name = products[randomThree].name;
    while (imgOne.name === imgThree.name || imgTwo.name === imgThree.name){
      var randomThree = this.randomImg();
      imgThree.src = products[randomThree].path;
      imgThree.name = products[randomThree].name;
    };
  },

  voteListener: function() {
    tracker.images.addEventListener('click', function(event){
      if (voteCounter >= 15) {
        tracker.images.removeEventListener('click');
      } else {
        voteCounter ++;
        for (var i=0; i < products.length; i++){
          if (event.target.name === products[i].name){
            products[i].votes ++;
            console.log(products[i].votes + ' ' + products[i].name);
            tracker.displayImg();
            console.log('vote counter' + voteCounter);
            break;
          }
        }
      }
    })
  }
};
window.onload = function() {
  tracker.displayImg();
  tracker.voteListener();
};
