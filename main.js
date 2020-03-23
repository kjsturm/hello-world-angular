const {app, BrowserWindow} = require('electron')
    const url = require("url");
    const path = require("path");

    let mainWindow

    function createWindow () {
      mainWindow = new BrowserWindow({
        title:'MainWindow',
        show:false,
        width: 1200,
        height: 900,
        webPreferences: {
          //preload: path.join(__dirname, 'preload.js'),
          nodeIntegration: true, // is default value after Electron v5
          enableRemoteModule: true, // turn off remote    
          webviewTag: true,
          accessibleTitle: 'mainWindow',
        }
      })

      mainWindow.loadURL(
        url.format({
          pathname: path.join(__dirname, 'src/index.html'),
          protocol: "file:",
          slashes: true
        })
      );
      // Open the DevTools.
      mainWindow.webContents.openDevTools()

      mainWindow.once('ready-to-show', () => {
        mainWindow.show();
    });


      mainWindow.on('closed', function () {
        mainWindow = null
      })
    }

    app.on('ready',function(){
      createWindow();

      var pathname= path.join(__dirname, 'src/index.html');

      console.log('main.js ready __dirname: ' + __dirname);      
      //main.js ready __dirname: D:\angular\hello-world
      console.log('main.js ready index pathname: ' + pathname);
      //main.js ready index pathname: D:\angular\hello-world\src\index.html
    })

    app.on('window-all-closed', function () {
      if (process.platform !== 'darwin') app.quit()
    })

    app.on('activate', function () {
      if (mainWindow === null) createWindow()
    })