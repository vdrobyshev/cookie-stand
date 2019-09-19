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


var tokyo = new City('tokyo', 3, 24, 1.2);
tokyo.cookiesSold();


var dubai = new City('dubai', 11, 38, 3.7);
dubai.cookiesSold();


var paris = new City('paris', 20, 38, 2.3)
paris.cookiesSold();

var lima = new City('lima', 2, 16, 4.6);
lima.cookiesSold();



var table = document.getElementById('data');

function createHeader() {
  var createTR = document.createElement('tr');
  var empty = document.createElement('th');
  createTR.append(empty);

  for (var i = 0; i < hours.length; i++) {

    var createTH = document.createElement('th');

    createTH.textContent = hours[i];

    createTR.appendChild(createTH);

  }

  table.appendChild(createTR);


}


City.prototype.populate = function () {

  var createTR = document.createElement('tr');

  var empty = document.createElement('td');
  empty.textContent = this.name;
  createTR.append(empty);


  for (var i = 0; i < hours.length; i++) {

    var createTH = document.createElement('td');
    createTH.textContent = this.cookiesPurchased[i];
    createTR.appendChild(createTH);

  }

  table.appendChild(createTR);


};

function footer() {

  var trEl = document.createElement('tr');

  var tdEl = document.createElement('td');

  tdEl.textContent = 'Hourly Totals: ';

  trEl.appendChild(tdEl);


  for (var i = 0; i < hours.length; i++) {

    var storesHourly = 0;
    var td = document.createElement('td');


    for (var j = 0; j < City.all.length; j++) {
      storesHourly += City.all[j].cookiesPurchased[i];
      td.textContent = storesHourly;
      trEl.appendChild(td);
    }


  }
  var tdElem = document.createElement('td');
  tdElem.textContent = City.cookiesPurchased;
  trEl.appendChild(tdElem);
  table.appendChild(trEl);
};






//var numValidation1 = document.getElementById('minvalue');
// var numValidation2 = document.getElementById('maxvalue');



// numValidation2.addEventListener('submit', numvalid);


// function numvalid(event) {
//   event.preventDefault();


//   var value1 = event.target.minvalue.value;
//   var value2 = event.target.maxvalue.value;

//   console.log(value1, value2);

//   if (value1 >= value2) {
//     alert('min has to be less than max');

//     document.getElementById("minvalue").value = "";
//     document.getElementById("maxvalue").value = "";
//     document.getElementById('minvalue').focus();
//     event.target.minvalue.value = null;
//     event.target.maxvalue.value = null;
//   }
// }


var addStore = document.getElementById('user-form');

addStore.addEventListener('submit', addNewStore);

function addNewStore(event) {


  event.preventDefault();


  table.removeChild(table.lastChild);

  var locationName = event.target.cityname.value;
  var minCust = event.target.minvalue.value;
  var maxCust = event.target.maxvalue.value;
  var cupsPerCustomer = event.target.avgvalue.value;


  var obj = new City(locationName, +minCust, +maxCust, +cupsPerCustomer);

  obj.cookiesSold();
  obj.populate();
  footer();


  event.target.cityname.value = null;
  event.target.minvalue.value = null;
  event.target.maxvalue.value = null;
  event.target.avgvalue.value = null;


  console.log(obj.cookiesPurchased);

}

createHeader();

function callpopulate() {
  for (var i = 0; i < City.all.length; i++) {
    City.all[i].populate();
  }

}

callpopulate();

footer();
