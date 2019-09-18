var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'];


function callRandom(min, max) {
  var random = Math.floor((Math.random() * max) + min);

  return random;
}

function City(cityname, minCust, maxCust, avCookie) {
  this.name = cityname;
  this.minCustomers = minCust;
  this.maxCustomers = maxCust;
  this.avCookies = avCookie;
  this.cookiesPurchased = [];
  City.all.push(this);

}
City.all = [];



City.prototype.cookiesSold = function () {

  var total = 0;
  var temp = 0;

  for (var i = 0; i < hours.length; i++) {

    this.cookiesPurchased.push(Math.floor((callRandom(this.minCustomers, this.maxCustomers)) * this.avCookies));
    temp = this.cookiesPurchased[i];
    total += temp;

    if (i === hours.length - 1) {
      this.cookiesPurchased[i] = total;
    }
  }
  return this.cookiesPurchased;

};

City.prototype.render = function () {

  var cust = document.getElementById(`${this.name}`);

  var ulElement = document.createElement('ul');
  for (var i = 0; i < this.cookiesPurchased.length; i++) {

    var listElement = document.createElement('li');
    listElement.textContent = `${hours[i]} : ${this.cookiesPurchased[i]}`;
    ulElement.appendChild(listElement);


  }

  cust.appendChild(ulElement);


};




var seattle = new City('seattle', 23, 65, 6.3);

seattle.cookiesSold();
seattle.render();

var tokyo = new City('tokyo', 3, 24, 1.2);
tokyo.cookiesSold();
tokyo.render();

var dubai = new City('dubai', 11, 38, 3.7);
dubai.cookiesSold();
dubai.render();

var paris = new City('paris', 20, 38, 2.3)
paris.cookiesSold();
paris.render();

var lima = new City('lima', 2, 16, 4.6);
lima.cookiesSold();
lima.render();


var table = document.getElementById('data');

// function createHeader() {
//   var createTR = document.createElement('tr');
//   var empty = document.createElement('th');
//   createTR.append(empty);

//   for (var i = 0; i < hours.length; i++) {

//     var createTH = document.createElement('th');

//     createTH.textContent = hours[i];

//     createTR.appendChild(createTH);

//   }

//   table.appendChild(createTR);


// }


// City.prototype.populate = function () {

//   var createTR = document.createElement('tr');

//   var empty = document.createElement('td');
//   empty.textContent = this.name;
//   createTR.append(empty);


//   for (var i = 0; i < hours.length; i++) {

//     var createTH = document.createElement('td');
//     createTH.textContent = this.cookiesPurchased[i];
//     createTR.appendChild(createTH);

//   }

//   table.appendChild(createTR);


// };



//////////////////////
// City.prototype.footer = function () {

//   // var trEl = document.createElement('tr');

//   // var tdEl = document.createElement('td');
//   // tdEl.textContent = 'Total';
//   // trEl.appendChild(tdEl);

//   // table.appendChild(trEl);
//   var trEl = document.createElement('tr');

//   var tdEl = document.createElement('td');

//   tdEl.textContent = 'Hourly Totals: ';

//   trEl.appendChild(tdEl);

  
//   //////
//   for (var i=0; i < hours.length; i++) {

//     var storesHourly = 0;
//     var td = document.createElement('td');
    
    
//     for (var j = 0; j < City.all.length; j++) {
//       storesHourly += City.all[j].cookiesPurchased[i];
//       td.textContent = storesHourly;
//       trEl.appendChild(td);
//     }


//   }
//   var tdElem = document.createElement('td');
//   tdElem.textContent = City.cookiesPurchased;
//   trEl.appendChild(tdElem);
//   table.appendChild(trEl);
// };





createHeader();
seattle.populate();
tokyo.populate();
dubai.populate();
paris.populate();
lima.populate();
//seattle.footer();



