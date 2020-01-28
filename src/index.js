const electron = require("electron");
const path = require("path");
const BrowserWindow = electron.remote.BrowserWindow;

const notifyBtn = document.getElementById("notifyBtn");
let price = document.querySelector("notifyBtn");
let targetPrice = document.getElementById("targetPrice");

const getBTC = () => {
  axios
    .get(
      "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC&tsyms=USD"
    )
    .then(res => {
      const cryptos = res.data.BTC.USD;
      price.innerHTML = `$${cryptos.toLocaleString("en")}`;
    })
    .catch(error => {
      console.log("error", error);
    });
};

getBTC();
setInterval(getBTC, 30000);

notifyBtn.addEventListener("click", function(event) {
  // const modalPath = path.join("./", __dirname, "add.html");
  const modalPath = `file:///home/silverback/Documents/Projects/electron/bitcoin-app/src/add.html`;
  let win = new BrowserWindow({
    frame: false,
    transparent: true,
    width: 400,
    height: 200
  });
  win.on("close", function() {
    win = null;
  });
  win.loadURL(modalPath);
  win.show();
});
