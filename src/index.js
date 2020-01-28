const electron = require("electron");
const path = require("path");
const BrowserWindow = electron.remote.BrowserWindow;

const notifyBtn = document.getElementById("notifyBtn");

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
