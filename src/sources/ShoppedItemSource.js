
var mockData = [
  { id: 0, name: 'Milk' },
  { id: 1, name: 'Bread' },
  { id: 2, name: 'Orange' },
  { id: 3, name: 'Pizza' },
  { id: 4, name: 'Apple' },
  { id: 5, name: 'Cheese' },
  { id: 6, name: 'Fish' },
  { id: 7, name: 'Peach' },
  { id: 8, name: 'Hard drive' },
  { id: 9, name: 'Sword' },
  { id: 10, name: 'Viking helmet' },
  { id: 11, name: 'Monitor' },
  { id: 12, name: 'Keyboard' }
];

var ShoppedItemSource = {

    fetch: function () {
        return new Promise(function(resolve) {
            // simulation for now
            setTimeout(function () {
                resolve(mockData);
            }, 250);
        });
    }
};

module.exports = ShoppedItemSource;
