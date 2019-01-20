# Chat-App

[![](https://img.shields.io/github/license/shahisa/mars.svg)](https://github.com/shahisa/chat-app)

A React Chat application using the Pusher Chatkit API

## Issues
### First Issue 
```
currentUser.subscribeToRoom({
        roomId: 19395163,
        hooks:{
          onNewMessage: message => {
            console.log('message.text: ', message.text)
          }
```

According to Pusher Chatkit API documentation roomId is a integer not a string. However, returning an error stating that roomId should be a string not an integer. 


