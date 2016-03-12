
$(document).ready(function(){

  google.charts.load("current", {packages:["corechart"]});
  google.charts.setOnLoadCallback(drawChart);
  $("#vals, #bucketSize").on('change', drawChart);

  function drawChart() {
    var valText = $("#vals").val();
    var vals = valText.split("\n");
    var bucketText = $("#bucketSize").val();

    var array = [];
    array.push(["something", "num"]);
    for (var i =0; i < vals.length; i++) {
      var val = vals[i];
      array.push([val, val]);
    }

    var data = google.visualization.arrayToDataTable(array);

    var bucketSize = {};
    if (bucketText) {
       bucketSize = {bucketSize:bucketText};
    }

    var options = {
      title: 'something',
      legend: { position: 'none' },
      colors: ['green'],
      histogram: bucketSize,
    };

    // メモリの幅の指定方法
    var chart = new google.visualization.Histogram(document.getElementById('chartDiv'));
    chart.draw(data, options);
  }

});
