self.addEventListener('push', function(event) {
    console.log('Received push event:', event);
    const title = 'New Notification';
    const options = {
        body: event.data.text(),
    };
    event.waitUntil(self.registration.showNotification(title, options));
});
