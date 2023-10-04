document.addEventListener('DOMContentLoaded', function() {
     console.log('Page loaded and ready!');

    // Reference to the button and span elements
    const btnChangeColors = document.getElementById('btnChangeColors');
    const texttochangecolor = document.getElementById('texttochangecolor');

    // Event listener for the button
    btnChangeColors.addEventListener('click', function() {
        // Generate a random color
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        
        // Apply the random color to the span's text
        texttochangecolor.style.color = randomColor;
    });
  
//debugger;
    //document.getElementById('markdownInput').addEventListener('input', function() {
        const markdownContent = document.getElementById('markdownOutput').textContent;
        
        const htmlContent = marked.parse(markdownContent);
        document.getElementById('markdownOutput').innerHTML = htmlContent;
     
    //});

    

    const btnStartCalculation = document.getElementById('btnStartCalculation');
    const calculationResult = document.getElementById('calculationResult');
    const calculationResult2 = document.getElementById('calculationResult2');

    // Check if the browser supports Web Workers
    if (window.Worker) {
        const myWorker = new Worker('js/worker.js');
        const myWorker2 = new Worker('js/worker.js');

        btnStartCalculation.addEventListener('click', function() {
            // Send the number 1 to the worker for calculation
            myWorker.postMessage({'number':1,'option':1});
            calculationResult.textContent = 'Calculating...';

            myWorker2.postMessage({'number':1,'option':2});
            calculationResult2.textContent = 'Calculating...';
        });

        // Listen for messages from the worker
        myWorker.onmessage = function(e) {

            if(e.data.option == 1){
                calculationResult.textContent = e.data.result;
            }

            if(e.data.option == 2){
                calculationResult2.textContent = e.data.result;
            }
            
            //console.log('Received result from worker:', e.data.result);
        };


        myWorker2.onmessage = function(e) {

            if(e.data.option == 1){
                calculationResult.textContent = e.data.result;
            }

            if(e.data.option == 2){
                calculationResult2.textContent = e.data.result;
            }
            
            //console.log('Received result from worker:', e.data.result);
        };
    } else {
        console.error('Your browser doesn\'t support web workers.');
    }
    
});




