const { app, BrowserWindow,Menu,Tray } = require("electron");
// const { default: WinState } = require("electron-win-state");
const winState = require("electron-win-state").default;
const path = require("path");

//serch
require('./controller/serch')

Menu.setApplicationMenu(null)

const createWindow = () => {
  const winstate = new winState({
    defaultWidth: 800,
    defaultHeight: 600,
  });

  const win = new BrowserWindow({
    ...winstate.winOptions,
    webPreferences: { 
      preload: path.resolve(__dirname, "./preload/index.js"),
    },
    icon: path.join(__dirname, './public/favicon.ico')
  });

  win.webContents.openDevTools();
  winstate.manage(win);
  win.loadURL("http://127.0.0.1:5173/");
  // win.loadFile('./src/view/test.html')

};

app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });

  //系统托盘
  const tray = new Tray('./public/favicon.ico')
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Item1', type: 'radio' },
    { label: 'Item2', type: 'radio' },
    { label: 'Item3', type: 'radio', checked: true },
    { label: 'Item4', type: 'radio' }
  ])
  tray.setToolTip('名城音乐')
  tray.setContextMenu(contextMenu)

});
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
