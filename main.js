const { app, BrowserWindow, ipcMain, shell } = require('electron');
const path = require('path');
const http = require('http');
const fs = require('fs');
const os = require('os');

let win;
let splash;
let shareServer = null;

function getLocalIP() {
    const nets = os.networkInterfaces();
    for (const name of Object.keys(nets)) {
        for (const net of nets[name]) {
            if (net.family === 'IPv4' && !net.internal) return net.address;
        }
    }
    return '127.0.0.1';
}

function startShareServer(port) {
    return new Promise((resolve, reject) => {
        const dir = __dirname;
        const mimeTypes = {
            '.html': 'text/html',
            '.css': 'text/css',
            '.js': 'application/javascript',
            '.png': 'image/png',
            '.json': 'application/json',
            '.svg': 'image/svg+xml'
        };

        const server = http.createServer((req, res) => {
            let reqPath = req.url.split('?')[0];
            if (reqPath === '/') reqPath = '/share.html';
            const filePath = path.join(dir, reqPath);
            const ext = path.extname(filePath);

            if (!filePath.startsWith(dir)) {
                res.writeHead(403);
                res.end('Forbidden');
                return;
            }

            fs.readFile(filePath, (err, data) => {
                if (err) {
                    res.writeHead(404);
                    res.end('Not found');
                    return;
                }
                res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
                res.end(data);
            });
        });

        server.listen(port, '0.0.0.0', () => {
            const ip = getLocalIP();
            resolve({ url: `http://${ip}:${port}`, port });
        });

        server.on('error', (e) => {
            if (e.code === 'EADDRINUSE') {
                resolve(startShareServer(port + 1));
            } else {
                reject(e);
            }
        });

        shareServer = server;
    });
}

function stopShareServer() {
    if (shareServer) {
        shareServer.close();
        shareServer = null;
    }
}

function createSplash() {
    splash = new BrowserWindow({
        width: 480,
        height: 360,
        frame: false,
        transparent: true,
        resizable: false,
        alwaysOnTop: true,
        skipTaskbar: true,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            webSecurity: false,
            allowRunningInsecureContent: true
        }
    });

    splash.loadFile(path.join(__dirname, 'splash.html'));

    splash.on('closed', () => { splash = null; });
}

function createWindow() {
    win = new BrowserWindow({
        width: 520,
        height: 780,
        minWidth: 420,
        minHeight: 600,
        resizable: true,
        fullscreenable: false,
        icon: path.join(__dirname, 'IQ.ku - Background.png'),
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            webSecurity: false,
            allowRunningInsecureContent: true,
            preload: path.join(__dirname, 'preload.js')
        },
        titleBarStyle: 'hidden',
        title: 'IQku',
        backgroundColor: '#0f0c29',
        show: true
    });

    win.loadFile(path.join(__dirname, 'index.html'));

    win.on('closed', () => { win = null; });
}

ipcMain.handle('share-start', async () => {
    try {
        const result = await startShareServer(3456);
        return { success: true, url: result.url, port: result.port };
    } catch (e) {
        return { success: false, error: e.message };
    }
});

ipcMain.handle('share-stop', () => {
    stopShareServer();
    return { success: true };
});

ipcMain.handle('open-external', async (event, url) => {
    await shell.openExternal(url);
    return { success: true };
});

app.whenReady().then(() => {
    createWindow();
});

app.on('window-all-closed', () => {
    stopShareServer();
    app.quit();
});

app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});
