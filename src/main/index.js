const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const { autoUpdater } = require("electron-updater");
const { uploadUrl } = require("../renderer/config/config");

if (process.env.NODE_ENV !== 'development') {
    global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow;
let sycmWindow;
const winURL = process.env.NODE_ENV === 'development'
    ? `http://localhost:9080`
    : `file://${__dirname}/index.html`

// 打开生意参谋
ipcMain.on("open-sycm", function () {
    createView();
})

app.on('ready', createWindow);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
    if (mainWindow === null) createWindow();
});

// 创建窗口
function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1500, height: 900, autoHideMenuBar: true,
        webPreferences: {
            webviewTag: true,
            webSecurity: true,
            nodeIntegration: true
        }
    });
    // 加载网页
    mainWindow.loadURL(winURL);
    // 打开调试
    mainWindow.webContents.openDevTools();
    // 存储进程id
    global.mainWindowId = mainWindow.webContents.id;
    // 存储用户信息
    global.userInfo = {
        token: "",      //token
        phone: ""      // 手机号
    }
    mainWindow.on('closed', function () {
        mainWindow = null;
        global.mainWindowId = null;
        global.userInfo = null;
    });
    // 启动更新
    updateHandle();
}

// 创建生意参谋子窗口
function createView() {
    if (sycmWindow) {
        dialog.showErrorBox("错误提示", "只能登录一个生意参谋");
        return;
    }
    sycmWindow = new BrowserWindow({
        width: 500, height: 500, parent: mainWindow, autoHideMenuBar: true,
        webPreferences: {
            webviewTag: true,
            webSecurity: true,
            nodeIntegration: true,
            preload: path.join(__dirname, "./renderer/assets/js/sycm.js")
        }
    });
    // 加载网页
    sycmWindow.webContents.loadURL('https://sycm.taobao.com/custom/login.htm');
    // 打开调试
    sycmWindow.webContents.openDevTools();
    // 存储进程id
    global.sycmWindowId = { id: null };
    // 存储淘宝信息
    global.tbInfo = {
        user_account: "",    //  淘宝登录账户
        shop_id: "",           //  店铺id
        shop_name: "",      //  当前店铺名称
        tb_login_user_id: "",  //  淘宝登录用户id
        run_as_user_id: ""     //  当前使用的淘宝用户id
    };

    sycmWindow.on('closed', function () {
        sycmWindow = null;
        global.sycmWindowId = null;
        global.tbInfo = null;
    });
}

// 版本更新
function updateHandle() {
    
    autoUpdater.setFeedURL(uploadUrl);
    autoUpdater.on('error', function (error) {
        sendUpdateMessage("检查更新出错");
    });
    autoUpdater.on('checking-for-update', function () {
        sendUpdateMessage("正在检查更新……");
    });
    autoUpdater.on('update-available', function (info) {
        sendUpdateMessage("检测到新版本，正在下载……");
    });
    autoUpdater.on('update-not-available', function (info) {
        sendUpdateMessage("现在使用的就是最新版本，不用更新");
    });
    // 执行更新
    autoUpdater.on('update-downloaded', function (event, releaseNotes, releaseName, releaseDate, updateUrl, quitAndUpdate) {
        ipcMain.on('isUpdateNow', (e, arg) => {
            autoUpdater.quitAndInstall();
        });
        mainWindow.webContents.send('isUpdateNow');
    });

    ipcMain.on("checkForUpdate", () => {
        //执行自动更新检查
        autoUpdater.checkForUpdates();
    });
}

// 通过main进程发送事件给renderer进程
function sendUpdateMessage(text) {
    mainWindow.webContents.send('message', text)
}