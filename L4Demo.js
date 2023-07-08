const firebaseConfig = {
    apiKey: "AIzaSyAA3yVFKAm6ppaP4xZaN3620kBWM1ElceM",
    authDomain: "democpp-12579.firebaseapp.com",
    projectId: "democpp-12579",
    storageBucket: "democpp-12579.appspot.com",
    messagingSenderId: "775288010209",
    appId: "1:775288010209:web:bd775280883048d7d6cea0",
    measurementId: "G-BG35DRTZ8P"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Access database (firestore) from firebase
var db = firebase.firestore();

// Set data function
async function setData() {
    await db.collection("class demo").doc("testdata2").set({
        first: "Tasneem",
        last: "Benazir",
        born: "SG",
    })
    console.log("Document written with ID restdata")
}

// Read data function
async function readData() {
    let value = await db.collection("class demo").get()
    value.forEach((d) => {
        console.log(d.data())
    })
}

// Delete data function
async function delData() {
    await db.collection("class demo").doc("testdata").delete()
    console.log("Document successfully deleted!")
}

// Get Bitcoin price from Binance
async function btcData() {
    console.log("Fetching Bitcoin price")
    let binance = new ccxt.binance()
    let x = await binance.fetch_ohlcv("BTC/USDT", "5m")
    price = x[499][4]
    console.log("Bitcoin price: USD", price)
}