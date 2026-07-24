const { contextBridge, ipcRenderer } = require('electron');
const os = require('os');

contextBridge.exposeInMainWorld('electronAPI', {
    platform: process.platform,
    shareStart: () => ipcRenderer.invoke('share-start'),
    shareStop: () => ipcRenderer.invoke('share-stop'),
    openExternal: (url) => ipcRenderer.invoke('open-external', url),
    getSystemInfo: () => ({
        cpus: os.cpus(),
        platform: os.platform(),
        hostname: os.hostname(),
        arch: os.arch(),
        totalmem: os.totalmem(),
        freemem: os.freemem()
    })
});
