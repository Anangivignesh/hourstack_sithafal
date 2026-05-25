// HOURSTACK - Electron Preload Script
// Exposes safe IPC functions to renderer process

import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
  getScreenshot: () => ipcRenderer.invoke('get-screenshot'),
  getActiveWindow: () => ipcRenderer.invoke('get-active-window'),
  sendActivity: (data: any) => ipcRenderer.invoke('send-activity', data),
});

declare global {
  interface Window {
    electronAPI: {
      getScreenshot: () => Promise<any>;
      getActiveWindow: () => Promise<any>;
      sendActivity: (data: any) => Promise<void>;
    };
  }
}
