chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('window.html', {
    id: 'window2',
    resizable: false,
    frame: { color: "#DDDDDD" },
    innerBounds: { width: 420, height: 236 }
  });
});
