 
 const ctx = document.getElementById('multiLineChart').getContext('2d');

 
 new Chart(ctx, {
     type: 'line', 
     data: {
         labels: ['18-25', '26-35', '36-45', '46-55', '56-65', '66+'],  
         datasets: [
             {
                 label: 'Income ($)',
                 data: [25000, 40000, 60000, 55000, 50000, 30000],  
                 borderColor: 'rgba(75, 192, 192, 1)',  
                 backgroundColor: 'rgba(75, 192, 192, 0.2)',  
                 fill: false,  
                 tension: 0.1  
             },
             {
                 label: 'Expenses ($)',
                 data: [20000, 25000, 35000, 30000, 25000, 20000], 
                 borderColor: 'rgba(255, 99, 132, 1)', 
                 backgroundColor: 'rgba(255, 99, 132, 0.2)', 
                 fill: false, 
                 tension: 0.1 
             }
         ]
     },
     options: {
         responsive: true, 
         maintainAspectRatio: false, 
         plugins: {
             legend: {
                 display: true, 
                 position: 'top',  
             }
         },
         scales: {
             y: {
                 beginAtZero: true 
             }
         }
     }
 });