function callback(){
    console.log("this is callback function")
}

function result (callback){
     callback()
}

result (callback)