var productName = ['bag', 'banana', 'boots', 'chair', 'cthulhu', 'dragon', 'pen', 'scissors', 'shark', 'sweep', 'unicorn', 'usb', 'water-can', 'wine-glass'];
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
      document.getElementById('voteTracker').innerHTML = 'Votes submitted ' + voteCounter + '<br>' + 'Votes left ' + (15 - voteCounter);
      if (voteCounter >= 15) {
        tracker.images.removeEventListener('click');
      } else {
        voteCounter ++
        for (var i=0; i < products.length; i++){
          if (event.target.name ===  products[i].name){
            products[i].votes ++;
            tracker.displayImg();
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

document.getElementById('showResults').addEventListener('click', results, false);

function results() {
  var table = document.createElement('table');
  var row = document.createElement('tr');
  var tableHeader = ['Product', 'Votes'];
  for (var i = 0; i < tableHeader.length; i++){
    var thead = document.createElement('th');
    var headText = document.createTextNode(tableHeader[i]);
    thead.appendChild(headText);
    row.appendChild(thead);
    table.appendChild(row);
  }
  for (var i = 0; i < products.length; i++) {
    var row2 = document.createElement('tr');
    var tcolumn = document.createElement('td');
    var data = document.createTextNode(products[i].name);
    var tcolumn2 = document.createElement('td');
    var data2 = document.createTextNode(products[i].votes);
    tcolumn.appendChild(data);
    row2.appendChild(tcolumn);
    tcolumn2.appendChild(data2);
    row2.appendChild(tcolumn2);
    table.appendChild(row2);
  }
  document.getElementById('table').appendChild(table);
};
