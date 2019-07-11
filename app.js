const dicMdr = {
'POLO GRAJAU' : [0.0096383301, 0.0090341337, 0.0080462802, 0.0078504192, 0.0081806214, 0.0080718853],
'POLO PINHEIROS' : [0.007607615, 0.007681457, 0.0071822813, 0.0070602497, 0.0066796277, 0.0066205702],
'POLO CAPAO REDONDO' : [0.009475308, 0.0093792124, 0.0091347526, 0.0088763979, 0.0090488893, 0.0087483294],
'POLO OSASCO OESTE' : [0.0083310745, 0.0081956676, 0.0080075599, 0.0078601622, 0.0078534003, 0.0077664617],
'POLO BUTANTA' : [0.0086472538, 0.008150559, 0.007860239, 0.0076552614, 0.0073246349, 0.007380517],
'DISTRITO SP OESTE' : [0.0074073384, 0.0073167743, 0.0070149184, 0.0070230616, 0.0067174629, 0.0066512752],
'DISTRITO SP CENTRO' : [0.0076353681, 0.0074412167, 0.0071659019, 0.0069743932, 0.0071404926, 0.0070626492],
'REGIAO SP' : [0.0081966785, 0.0079776892, 0.0076785626, 0.0075288633, 0.007476661, 0.0073981176]
};

Object.keys(dicMdr).forEach(element =>{
  console.log(element + ' : ' + dicMdr[element]);
})

const myfirstchart = document.getElementById("line_Chart");
//console.log(myfirstchart);
let lineChart = new Chart(myfirstchart,{
    type: 'line',
    data: {
        labels: ["January", "February", "March", "April", "May", "June"], //defines the length of the axis too
        datasets: [
            {
                label: "NET MDR JAN a JUN - " + Object.keys(dicMdr)[0],
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: dicMdr['POLO GRAJAU'],
            }
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

//function to update chart
function updateChart(nomePolo) {
    lineChart.data.datasets[0].data = dicMdr[nomePolo];
    lineChart.data.datasets[0].label = "NET MDR JAN a JUN - " + nomePolo;
    lineChart.update();
};
