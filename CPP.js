const firebaseConfig = {
    apiKey: "AIzaSyAA3yVFKAm6ppaP4xZaN3620kBWM1ElceM",
    authDomain: "democpp-12579.firebaseapp.com",
    projectId: "democpp-12579",
    storageBucket: "democpp-12579.appspot.com",
    messagingSenderId: "775288010209",
    appId: "1:775288010209:web:bd775280883048d7d6cea0",
    measurementId: "G-BG35DRTZ8P"
  };

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

// Save to Firestore

async function savetofs() {
    let coin = document.getElementById("coin1").value
    let ticker = document.getElementById("ticker1").value
    let buyPrice = document.getElementById("price1").value
    let buyQuantity = document.getElementById("quantity1").value

    alert("Saving data for coin: " + coin)

    await db.collection("Portfolio").doc(coin).set({
        Coin: coin,
        Ticker: ticker,
        Buy_Price: buyPrice,
        Buy_Quantity: buyQuantity
    })

    console.log("Document written with ID: " + coin)
    window.location.reload()
}

async function display() {
    let allDocuments = await db.collection("Portfolio").get()

    let index = 1
    let totalProfit = 0

    allDocuments.forEach((docs) => {
        let documentData = docs.data()

        let coin = (documentData.Coin)
        let ticker = (documentData.Ticker)
        let buyPrice = (documentData.Buy_Price)
        let buyQuantity = (documentData.Buy_Quantity)

        // create rows and cells in the table

        let table = document.getElementById("table")
        let row = table.insertRow(index)

        let cell1 = row.insertCell(0); let cell2 = row.insertCell(1); let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3); let cell5 = row.insertCell(4); let cell6 = row.insertCell(5);
        let cell7 = row.insertCell(6); let cell8 = row.insertCell(7);

        cell1.innerHTML = index;
        cell2.innerHTML = coin;
        cell3.innerHTML = ticker;
        cell4.innerHTML = buyPrice;
        cell5.innerHTML = buyQuantity;
        cell6.innerHTML = 0;
        cell7.innerHTML = 0;

        // creating elements and giving class names through JavaScript

        cell7.className = "profits"

        let deleteButton = document.createElement("button")

        deleteButton.id = String(coin)
        deleteButton.className = "bwt"
        deleteButton.innerHTML = "Delete"

        // append delete button in cells

        cell8.appendChild(deleteButton)
        deleteButton.onclick = function() {
            deleteInstrument(coin)
        }

        profitCalculator(ticker)

        async function profitCalculator(ticker) {
            let binance = new ccxt.binance()
                let x = await binance.fetch_ohlcv(ticker, "5m")
                cell6.innerHTML = x[499][4]
                cell7.innerHTML = Math.round(buyQuantity * (parseFloat(cell6.innerHTML) - parseFloat(buyPrice)))
                totalProfit = totalProfit + parseFloat(cell7.innerHTML)
                document.getElementById("totalProfit").innerHTML = ("Total Profit is : $" + String(totalProfit))
        }

        index += 1

        })
    }

display()

// Delete instruments

async function deleteInstrument(coin) {
    alert("You are going to delete: " + coin)
    await db.collection("Portfolio").doc(coin).delete()
    window.location.reload()
}
