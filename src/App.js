import React, { Component } from 'react';
import Chatkit from '@pusher/chatkit-client'
import RoomList from './components/RoomList'
import MessageList from './components/MessageList'
import SendMessageForm from './components/SendMessageForm'
import NewRoomForm from './components/NewRoomForm'
import logo from './logo.svg';
import './App.css';
import {tokenUrl, instanceLocator} from './config'

class App extends Component {

  componentDidMount(){
    const chatManager = new Chatkit.ChatManager({
      instanceLocator,
      userId: 'raja',
      tokenProvider: new Chatkit.TokenProvider({
        url: tokenUrl
      })
    })
    chatManager.connect()
    .then(currentUser => {
      currentUser.subscribeToRoom({
        roomId: '19395163',
        hooks:{
          onNewMessage: message => {
            console.log('message.text: ', message.text)
          }
        }
      })
    })
  }


  render() {
    return (
      <div className ="app">
        <RoomList />
        <MessageList />
        <SendMessageForm />
        <NewRoomForm />

      </div>
    );
  }
}

export default App;
