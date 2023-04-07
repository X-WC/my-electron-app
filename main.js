const {app, BrowserWindow, ipcMain, dialog, Menu} = require('electron');
const path = require('path');

async function handleFileOpen() {
    const {canceled, filePaths} = await dialog.showOpenDialog()
    if (canceled) {
        return
    } else {
        return filePaths[0]
    }
}

const handleSetTitle = (event, title) => {
    // 设置文件标题
    const webContents = event.sender
    const win = BrowserWindow.fromWebContents(webContents)
    win.setTitle(title)
}


const createWindow = () => {
    const win = new BrowserWindow({
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
        }
    })
    // ipc通信
    ipcMain.handle('ping', () => 'pong');

    win.loadFile('index.html').then();
    // win.loadURL('https://www.baidu.com').then();
    // const contents = win.webContents;
    // console.log(contents);
}

app.whenReady().then(() => {
    ipcMain.handle('dialog:openFile', handleFileOpen)
    ipcMain.on('set-title', handleSetTitle)

    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    })
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
})


