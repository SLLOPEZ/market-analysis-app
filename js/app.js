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
      console.log('loop')
      var randomTwo = this.randomImg();
      imgTwo.src = products[randomTwo].path;
      imgTwo.name = products[randomTwo].name;
    };
    var randomThree = this.randomImg();
    imgThree.src = products[randomThree].path;
    imgThree.name = products[randomThree].name;
    while (imgOne.name === imgTwo.name || imgTwo.name === imgThree.name){
      console.log('loop1')
      var randomThree = this.randomImg();
      imgThree.src = products[randomThree].path;
      imgThree.name = products[randomThree].name;
    };
  },
};
tracker.displayImg();
