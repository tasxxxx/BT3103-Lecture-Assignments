function Handler(){
    console.log("consoled by handler on click");
}

function changeHTML(){
    alert("going to change div texts");
    document.getElementById("first").innerHTML="This is second div";
    console.log("changedfirst");
    document.getElementById("second").innerHTML="This is first div";
    console.log("changedsecond");
}

document.getElementById("btn").addEventListener('click', function(){
        Handler()
});

document.getElementById("btn").addEventListener('click', Handler);

document.getElementById("btn").addEventListener('click', function(){
    changeHTML()
});

// function getData(){
//     console.log("Inside getData function");
//     console.log("Going to call ccxt");
//     let binance = new ccxt.binance;
//     let z = binance.fetch_ohlcv("BTC/USDT", "5m");
//     //console.log("Fetched the Bitcoin price", z);
//     //return z;

//     // z.then(()=>{
//     //     console.log("Fetched the Bitcoin price", z)
//     // });

//     z.then((x)=>{
//         let y = x[499][4]
//         console.log("Fetched the Bitcoin price", y)
//     });
// }

// console.log("First Line");
// let a = getData();
// console.log("Second Line");
// console.log("The a is", a);

// function hw(){
//     return "Hello World!";
// }

// async function hw(){
//     return "Hello World!"
// }

// console.log(hw());

async function getData(){
    console.log("Inside getData function");
    console.log("Going to call ccxt");
    let binance = new ccxt.binance;
    //let x = await binance.fetch_ohlcv("BTC/USDT", "5m");
    let x = binance.fetch_ohlcv("BTC/USDT", "5m");
    //console.log("Fetched the Bitcoin price", x[499][4]);
    console.log("Fetched the Bitcoin price", x);
    console.log("The promise resolved", x);
    return x;
}

console.log("First Line");
let a = getData();
console.log("Second Line");
console.log("The a is", a);
console.log("Going to resolve the promise");