var fetchTimer;
var latestFromServer = []
var updatedTill = 0;
// Add logic to this script to poll server every second for updated pixels.
function pollFuncForUpdatePixel(){
    
    const postRequestOptions = {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({clientupdates: clientupdates, updatedTill:0}),
    }
    fetch("/updates", postRequestOptions)
        .then(handleErrors => handleErrors.json())
        .then(data => { 
            
            updatedTill=data.updatedTill;
            latestFromServer = data.updates; 
            latestFromServer.forEach(element => {
                bitmap.setColor(element[0], element[1], element[2])
                clientupdates = [];
            });  
                    
        })      
    .catch(error => {
            console.log(error)
            document.body.innerHTML="Oops server is down.Please try again later";
            clearTimeout(fetchTimer);        
        });
    fetchTimer=setTimeout(pollFuncForUpdatePixel,1000)
}

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    errCount=0;
    return response;
}

pollFuncForUpdatePixel();