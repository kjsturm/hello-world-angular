// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
const shell = require('electron').shell;

const { ipcRenderer } = require('electron');

const fs = require('fs');

const remote = require('electron').remote;

const app = remote.app;

const path = require('path');

const url = require('url');

const customTitlebar = require('custom-electron-titlebar');

const Menu = remote.Menu;

const menu = new Menu();

const MenuItem = remote.MenuItem;

const findProcess = require('find-process');

var titlebar;

var pjson = require('../package.json');

const appVersion = pjson.version;

const appName = pjson.name;

var exelocation = process.execPath; //exe location

var rootFolder = path.dirname(__filename);

document.addEventListener('contextmenu', event => event.preventDefault());

window.addEventListener('DOMContentLoaded', () => {
    // webview = document.getElementById('webview');
    // console.log('webview ' + webview.id);
    titlebar = new customTitlebar.Titlebar({
        backgroundColor: customTitlebar.Color.fromHex('#2f3241'),
        icon: url.format(path.join(__dirname, '../resources', '/icon.ico')),
        shadow: true,
        titleHorizontalAlignment: 'center',
        unfocusEffect: true,
        itemBackgroundColor: customTitlebar.Color.fromHex('#3f4251')
    });

    
    var title = 
        'ControlPoint Web'
         + ' | version: ' 
         + appVersion
         + ' | © 2020 digiworx inc. '
         + ' | launch time: '
         + new Date().toLocaleString()
   
    titlebar.updateTitle(title);

    const replaceText = (selector, text) => {
        const element = document.getElementById(selector)
        if (element) element.innerText = text
    }

    for (const type of ['chrome', 'node', 'electron']) {
        replaceText(`${type}-version`, process.versions[type])
    }

    menu.append(new MenuItem(
        {
            label: 'File',
            submenu: [
                {
                    label: 'Open',
                    click: function () {
                        console.log('clicked on open');
                        sendIpc('openFile');
                    }
                },
                {
                    label: 'Save',
                    click: function () {
                        console.log('clicked save');
                        sendIpc('saveFile');
                    }

                },
                {
                    type: 'separator'
                },
                {
                    label: 'Exit',
                    type: 'normal',
                    accelerator: 'CmdOrCtrl+Shift+X',
                    click: function () {
                        console.log('clicked exit menu');
                        app.exit();
                    }
                },
                {
                    type: 'separator'
                }
            ]
        }));


    menu.append(new MenuItem(
        {
            label: 'Edit',
            submenu: [
                {
                    label: 'Gallery',
                    //accelerator: 'CmdOrCtrl + Shift + G',
                    click: function () {
                        console.log('clicked gallery menu');
                        sendIpc('editGallery');
                       
                    }
                    // label: 'Subitem checkbox',
                    // type: 'checkbox',
                    // checked: true
                },
                {
                    label: 'Control Page',
                    click: function () {
                        console.log('clicked controlpage menu');
                        sendIpc('editControlPage');                       
                    }
                },
                {
                    label: 'Scheduler',
                    click: function () {
                        console.log('clicked scheduler menu');
                        sendIpc('editScheduler');
                    }
                },
                {
                    type: 'separator'
                }
            ]
        }));


    menu.append(new MenuItem(
        {
            label: 'View',
            submenu: [
                {
                    label: 'Always On Top',
                    //accelerator: 'CmdOrCtrl + Shift + G',
                    click: function () {
                        console.log('clicked alwaysOnTop menu');
                        sendIpc('alwaysOnTop');
                    },
                    type: 'checkbox',
                    checked: true
                },
                { role: 'reload' },
                { role: 'forcereload' },
                { role: 'toggledevtools' },
                { type: 'separator' },
                { role: 'resetzoom' },
                { role: 'zoomin' },
                { role: 'zoomout' },
                { type: 'separator' },
                { role: 'togglefullscreen' }
            ]
        }));

        menu.append(new MenuItem(
            {
                label: 'Tools',                
                submenu: 
                [
                    {
                        label: 'Find Process',
                        click: function() {
                            getProcess();
                        }
                    }
                ]
            }));


    menu.append(new MenuItem(
        {
            label: 'Help',
            submenu:
                [
                    {
                        label: 'About',
                        click: function () {
                            console.log('clicked help menu');
                        }
                    }
                ]
        }));

    Menu.setApplicationMenu(menu);

    titlebar.updateMenu(menu);
})

function sendIpc(message) {
    ipcRenderer.send('async-message', message);
    console.log('index sent async-message ' + message + ' to main');
}

ipcRenderer.on('async-message-reply', function (event, arg) {
    //event.sender.send('async-message-reply', 'Main process async reply.');
    console.log('preload.js recieved async-message from main ' + arg.toString());
})

function openFolder() {
    console.log('clicked open button');
    shell.showItemInFolder('D:\\electron\\controlpointweb\\src');
};

function getProcess(){
    

  

    console.log('exelocation : ' + exelocation);

    console.log('rootFolder location : ' + rootFolder);

    var processName = appName + '.exe';

    console.log('clicked get process menu appName ' + appName + '.exe');

    findProcess('name', processName, true)
    .then(function (list) {
        var proc = list[0];
        console.log('there are %s ' + processName +' process(es)', list.length);
    }, function (err) {
        console.log(err.stack || err);
    })

}
