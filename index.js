// var xyValues = [
//     { x: 1970, y: 50 },
//     { x: 1980, y: 48 },
//     { x: 1990, y: 56 },
//     { x: 2000, y: 63 },
//     { x: 2010, y: 68 },
//     { x: 2020, y: 72 },
// ];

var xValuesWeight=[1970,1980,1990,2000,2010,2020]
var yValuesWight=[50,48,56,63,68,72]

var xValuesMed=[1984,1991,1998,2005,2012,2016,2019]
var yValuesMed=[9,30,39,45,59,56,90]


chart=new Chart("myChart", {
    type: "line",
    data: {
        labels:xValuesWeight,
        datasets: [{
            label:'Propotion Of Overweight Population',
            borderColor: "#FF6FB5",
            backgroundColor: "#FFF",
            // color:"#000",
            data: yValuesWight
        },
    ]
    },
});

chart=new Chart("myChart2", {
    type: "line",
    data: {
        labels:xValuesMed,
        datasets: [{
            
            label:'Earning of pharma company in billion dollars',
            borderColor: "#FF6FB5",
            backgroundColor: "#FFF",
            // color:"#000",
            data: yValuesMed
        },
    ]
    },
});

