
const { app, BrowserWindow, webContents } = require('electron/main')

app.whenReady().then(() => {
  const mainWindow = new BrowserWindow({ height: 600, width: 600 })
  mainWindow.loadFile('index.html')