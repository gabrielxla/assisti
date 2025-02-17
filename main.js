const { app, BrowserWindow, nativeTheme} = require('electron')

let win

const createWindow = () => {
   nativeTheme.themeSource ='dark'
   win = new BrowserWindow({
    width: 1024,
    height: 768,
    autoHideMenuBar:true,
    minimizable: false,
    resizable:false,
    
   
  })

  win.loadFile('./src/views/index.html')
}
// inicia a aplicação
app.whenReady().then(() => {
    createWindow()
  
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
      }
    })
  })
  
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })