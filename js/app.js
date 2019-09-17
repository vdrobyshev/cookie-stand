var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'];

function callRandom(min, max) {
  var random = Math.floor((Math.random() * max) + min);

  return random;
}

function City(cityname, minCust, maxCust, avCookie, cookiePurchased) {
  this.name = cityname;
  this.minCustomers = minCust;
  this.maxCustomers = maxCust;
  this.avCookies = avCookie;
  this.cookiePurchased = cookiePurchased;
}

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

var sea = new City('seattle', 23, 65, 6.3, []);
sea.cookiesSold();

///////////////////////////////////////////////////////////////////

var seattle = {
  name: 'seattle',
  minCustomers: 23,
  maxCustomers: 65,
  avCookies: 6.3,
  cookiesPurchased: [],
  //total :0,

  cookiesSold: function () {
    var total = 0;
    var temp = 0;

    for (var i = 0; i < hours.length; i++) {

      this.cookiesPurchased.push(Math.floor((callRandom(this.minCustomers, this.maxCustomers)) * this.avCookies));
      temp = this.cookiesPurchased[i];
      total += temp;

      if (i === (hours.length - 1)) {
        this.cookiesPurchased[i] = total;
        console.log(this.cookiesPurchased );
      }
    }
    console.log(this.cookiesPurchased );
    return this.cookiesPurchased;
    

  },



  render: function () {
    var cust = document.getElementById('seattle');

    var ulElement = document.createElement('ul');
    for (var i = 0; i < this.cookiesPurchased.length; i++) {

      var listElement = document.createElement('li');
      listElement.textContent = `${hours[i]} : ${this.cookiesPurchased[i]}`;
      ulElement.appendChild(listElement);
    }

    cust.appendChild(ulElement);

  },
};


seattle.cookiesSold();
seattle.render();


var tokyo = {
  minCustomers: 3,
  maxCustomers: 24,
  avCookies: 1.2,
  cookiesPurchased: [],

  cookiesSold: function () {

    for (var i = 0; i < hours.length; i++) {
      this.cookiesPurchased.push(Math.floor((callRandom(this.minCustomers, this.maxCustomers)) * this.avCookies));

    }
    return this.cookiesPurchased;

  },


  render: function () {
    var cust = document.getElementById('seattle');

    var ulElement = document.createElement('ul');
    for (var i = 0; i < hours.length; i++) {

      var listElement = document.createElement('li');
      listElement.textContent = `${hours[i]} : ${this.cookiesPurchased[i]}`;
      cust.appendChild(listElement);
    }


  },
};

tokyo.cookiesSold();
tokyo.render();

var dubai = {
  minCustomers: 11,
  maxCustomers: 38,
  avCookies: 3.7,
  cookiesPurchased: [],

  cookiesSold: function () {

    for (var i = 0; i < hours.length; i++) {
      this.cookiesPurchased.push(Math.floor((callRandom(this.minCustomers, this.maxCustomers)) * this.avCookies));

    }
    return this.cookiesPurchased;

  },

  render: function () {
    var cust = document.getElementById('dubai');

    var ulElement = document.createElement('ul');
    for (var i = 0; i < hours.length; i++) {

      var listElement = document.createElement('li');
      listElement.textContent = `${hours[i]} : ${this.cookiesPurchased[i]}`;
      cust.appendChild(listElement);
    }


  },
};

dubai.cookiesSold();
dubai.render();


var paris = {
  minCustomers: 20,
  maxCustomers: 38,
  avCookies: 2.3,
  cookiesPurchased: [],

  cookiesSold: function () {

    for (var i = 0; i < hours.length; i++) {
      this.cookiesPurchased.push(Math.floor((callRandom(this.minCustomers, this.maxCustomers)) * this.avCookies));

    }
    return this.cookiesPurchased;

  },

  render: function () {
    var cust = document.getElementById('paris');

    var ulElement = document.createElement('ul');
    for (var i = 0; i < hours.length; i++) {

      var listElement = document.createElement('li');
      listElement.textContent = `${hours[i]} : ${this.cookiesPurchased[i]}`;
      cust.appendChild(listElement);
    }


  },
};

paris.cookiesSold();
paris.render();


var lima = {
  minCustomers: 2,
  maxCustomers: 16,
  avCookies: 4.6,
  cookiesPurchased: [],

  cookiesSold: function () {

    for (var i = 0; i < hours.length; i++) {
      this.cookiesPurchased.push(Math.floor((callRandom(this.minCustomers, this.maxCustomers)) * this.avCookies));

    }
    return this.cookiesPurchased;

  },
  render: function () {
    var cust = document.getElementById('lima');

    var ulElement = document.createElement('ul');
    for (var i = 0; i < hours.length; i++) {

      var listElement = document.createElement('li');
      listElement.textContent = `${hours[i]} : ${this.cookiesPurchased[i]}`;
      cust.appendChild(listElement);
    }


  },
};

lima.cookiesSold();
lima.render();
