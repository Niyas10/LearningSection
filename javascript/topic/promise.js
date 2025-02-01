function checkNumber (prms){
    return new Promise((resolve,reject)=>{
        if(prms%2==1){
            resolve("number is odd")
        }else{
            reject("number is even")
        }
    })
}


async function test(prms){
    try{
let result = await  checkNumber(prms)
console.log(result)
    }catch (error)
    {
console.log(error);
    }
    }

    test(4)





    // const result = task(1).then(result=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error);
// })

