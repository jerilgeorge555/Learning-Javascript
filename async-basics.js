console.log('Execution Started');
setTimeout(() => {
    console.log('API Response received');
},2000);

console.log('Executing next steps');



//Promises

const promise1 = new Promise((resolve, reject) => {
    const flag = true;
    setTimeout(() => {
        if(flag){
        resolve('Successfully executed');
    }
    else{
        reject('Failed to execute');
    }
    },2000);
});  


promise1.then((result) => {
    console.log(result);
    return result+' and Data added';
})
.then((result2) => {
    console.log(result2);
})
.catch((error) => {
    console.log(error);
});

//promise with async/await
async function executeTests(){
    try{
        const result = await promise1;
        console.log(result);
        
        const result2 = result+' and data added';
        console.log(result2);
    }
    catch (error){
        console.log(error);
    }
}

executeTests();