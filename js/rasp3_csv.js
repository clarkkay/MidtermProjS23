$(document).ready(function() {
    $.get('rasp3_data.csv', function(data) {
      // Split the CSV data into an array of lines
      var lines = data.split('\n');
      
      // Split the first line into an array of values
      var values = lines[0].split(',');
      
      // Get the first value and insert it into the card text
      var r3cardtxt = $('.card-text');
      r3cardtxt.text(values[0]);
    });
  });
  