self.addEventListener('push', function(event) {
    console.log('Received push event:', event);
    console.log('message data:',event.data.text());
    console.log('message data text ', event.data);
    
    const title = 'New Notification';
    const options = {
        body: event.data.text(),
    };
    event.waitUntil(self.registration.showNotification(title, options));

    self.clients.matchAll().then(clients => {
        clients.forEach(client => client.postMessage({
            type: 'PUSH_NOTIFICATION',
            data: event.data.text()
        }));
    });
});

//http://127.0.0.1:5501/index.html