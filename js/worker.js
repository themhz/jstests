self.addEventListener('message', function(e) {

    if(e.data.option==1){
        let number = e.data.number;
        let result = 0;
    
        for (let i = 0; i < 1000000; i++) {
            result += number;
            self.postMessage({'result':result, 'option':1});
        }
    
        // Post the result back to the main thread
        self.postMessage({'result':result, 'option':1});
    }
    
    if(e.data.option==2){

        let number = e.data.number;
        let result = 0;
    
        for (let i = 0; i < 1000000; i++) {
            result += number;
            self.postMessage({'result':result, 'option':2});
        }
    
        // Post the result back to the main thread
        self.postMessage({'result':result, 'option':2});
    }
}, false);
