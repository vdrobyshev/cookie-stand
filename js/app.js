var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'];

function callRandom(min, max) {
  var random = Math.floor((Math.random() * max) + min);

  return random;
}

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
      if (i === hours.length - 1) {
        this.cookiesPurchased[i] = total;

      }
    }
    return this.cookiesPurchased;

  },

  //   render: function () {

  //     var cust = document.getElementById('seattle');
  //     for (var i = 0; i < hours.length; i++) {
  //       var newTag = document.createElement('ul');

  //       newTag.textContent = hours[i] + ':' + this.cookiesPurchased[i];
  //       cust.appendChild(newTag);

  //     }
  //   },
  // };

  render: function () {
    this.cookiesSold();

    var cust = document.getElementById('seattle');
    // var storename = document.createElement('h4');
    // storename.textContent = this.name;
    // cust.appendChild(storename);

    var ulElement = document.createElement('ul');
    for (var i = 0; i < hours.length; i++) {

      var listElement = document.createElement('li');
      listElement.textContent = `${hours[i]} : ${this.cookiesPurchased[i]}`;
      ulElement.appendChild(listElement);
    }


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

    var cust = document.getElementById('tokyo');
    for (var i = 0; i < hours.length; i++) {
      var newTag = document.createElement('ul');
      newTag.textContent = hours[i] + ':' + this.cookiesPurchased[i];

      cust.appendChild(newTag);

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
    for (var i = 0; i < hours.length; i++) {
      var newTag = document.createElement('ul');
      newTag.textContent = hours[i] + ':' + this.cookiesPurchased[i];

      cust.appendChild(newTag);

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
    for (var i = 0; i < hours.length; i++) {
      var newTag = document.createElement('ul');
      newTag.textContent = hours[i] + ':' + this.cookiesPurchased[i];

      cust.appendChild(newTag);

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
    for (var i = 0; i < hours.length; i++) {
      var newTag = document.createElement('ul');
      newTag.textContent = hours[i] + ':' + this.cookiesPurchased[i];

      cust.appendChild(newTag);

    }
  },
};

lima.cookiesSold();
lima.render();