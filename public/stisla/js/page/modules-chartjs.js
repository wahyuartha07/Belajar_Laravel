"use strict";

// get data from api
var url = "/dashboard";
var quantities = [];
var labels = [];
var totals = [];
var backgroundColor = [];
var borderColor = [];


fetch(url, {
  method: "GET",
  headers: {
    "Accept": "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => {
    data.forEach(element => {
      labels.push(element.name);
    });

    data.forEach(element => {
      quantities.push(element.quantity);
    });

    data.forEach(element => {
      totals.push(element.total);
    });

    var ctx = document.getElementById("doughnutChart").getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: quantities,
          backgroundColor: [
            '#fc544b',
            '#63ed7a',
            '#191d21',
            '#ffa426',
            '#6777ef',
          ],
          label: 'Dataset 1'
        }],
        labels: labels,
      },
      options: {
        responsive: true,
        legend: {
          position: 'bottom',
        },
      }
    });

    var ctx = document.getElementById("pieChart").getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'pie',
      data: {
        datasets: [{
          data: totals,
          backgroundColor: [
            '#fc544b',
            '#63ed7a',
            '#191d21',
            '#ffa426',
            '#6777ef',
          ],
          label: 'Dataset 1'
        }],
        labels: labels,
      },
      options: {
        responsive: true,
        legend: {
          position: 'bottom',
        },
      }
    });
  })


// console.log(quantities);

//   .then((resp) => resp.json())
// .then(function (data) {
//   console.log(data);
// });
//     var labels = data.map(function (e) {
//       return e.month;
//     });
//     var backgroundColor = data.map(function (e) {
//       return e.backgroundColor;
//     });
//     var borderColor = data.map(function (e) {
//       return e.borderColor;
//     });
//     var data = data.map(function (e) {
//       return e.data;
//     })

//       .catch(function (error) {
//         console.log(error);
//       });
//   })
// console.log(data);



// $.ajax({
//   url: url,
//   type: "GET",
//   dataType: "json",
//   success: function (response) {
//     data = response;
//     // data.forEach((item) => {
//     //   labels.push(item.name);
//     //   backgroundColor.push(item.color);
//     //   borderColor.push(item.color);
//     //   total += item.total;
//     //   if (item.type == "income") {
//     //     totalIncome += item.total;
//     //   } else {
//     //     totalOutcome += item.total;
//     //   }
//     // });
//     // totalIncomePercentage = (totalIncome / total) * 100;
//     // totalOutcomePercentage = (totalOutcome / total) * 100;
//     // console.log(totalIncomePercentage);
//     // console.log(totalOutcomePercentage);
//     // console.log(totalIncome);
//     // console.log(totalOutcome);
//     // console.log(total);
//     // console.log(data);
//     // console.log(labels);
//     // console.log(backgroundColor);
//     // console.log(borderColor);
//     console.log(data);
//   },
//   error: function (error) {
//     console.log(error);
//   },
// });



// var ctx = document.getElementById("doughnutChart").getContext('2d');
// var myChart = new Chart(ctx, {
//   type: 'doughnut',
//   data: {
//     datasets: [{
//       data: [
//         80,
//         50,
//         40,
//         30,
//         20,
//       ],
//       backgroundColor: [
//         '#191d21',
//         '#63ed7a',
//         '#ffa426',
//         '#fc544b',
//         '#6777ef',
//       ],
//       label: 'Dataset 1'
//     }],
//     labels: [
//       'Black',
//       'Green',
//       'Yellow',
//       'Red',
//       'Blue'
//     ],
//   },
//   options: {
//     responsive: true,
//     legend: {
//       position: 'bottom',
//     },
//   }
// });

// var ctx = document.getElementById("pieChart").getContext('2d');
// var myChart = new Chart(ctx, {
//   type: 'pie',
//   data: {
//     datasets: [{
//       data: [
//         80,
//         50,
//         40,
//         30,
//         100,
//       ],
//       backgroundColor: [
//         '#191d21',
//         '#63ed7a',
//         '#ffa426',
//         '#fc544b',
//         '#6777ef',
//       ],
//       label: 'Dataset 1'
//     }],
//     labels: [
//       'Black',
//       'Green',
//       'Yellow',
//       'Red',
//       'Blue'
//     ],
//   },
//   options: {
//     responsive: true,
//     legend: {
//       position: 'bottom',
//     },
//   }
// });