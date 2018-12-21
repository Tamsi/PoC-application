import React, { Component } from "react";
import { View } from "react-native";
import { Header } from 'react-native-elements';
import { GiftedChat } from 'react-native-gifted-chat';
import Chatkit from "@pusher/chatkit";
import ChatBot from 'react-native-chatbot';

// react-native-chatbot - npm

const CHATKIT_TOKEN_PROVIDER_ENDPOINT = "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/6f9e7f64-1ff5-4f69-9edf-d0397eb2a646/token";
const CHATKIT_INSTANCE_LOCATOR = "v1:us1:6f9e7f64-1ff5-4f69-9edf-d0397eb2a646";
const CHATKIT_ROOM_ID = 21893773;
const CHATKIT_USER_NAME = "Andrew";

export default class ChatScreen extends Component {
  state = {
    profile: {
      name: '',
      age: 0
    },
    messages: [],
    steps: [
      {
        id: '0',
        message: 'Welcome to react chatbot ! We will try to create your profile, are you ready ?',
        trigger: '1',
      },
      {
        id: '1',
        options: [
          { value: 0, label:'No...', trigger: '3' },
          { value: 1, label:'Yes !', trigger: '2' }
        ]
      },
      {
        id: '2',
        message: 'Ok, let\'s go ! What\'s your name ?',
        trigger: '4',
      },
      {
        id: '3',
        message: 'Well then... Bye !',
        end: true,
      },
      {
        id: '4',
        user: true,
        trigger: '5',
      },
      {
        id: '5',
        message: ({ previousValue }) => {
          this.state.profile.name = previousValue;
          return (`So, you are ${previousValue} ?`)
        },
        end: true,
      },
    ]
  };

  onSend([message]) {
    this.currentUser.sendMessage({
      text: message.text,
      roomId: CHATKIT_ROOM_ID
    });
  }

  onReceive(data) {
    const { id, senderId, text, createdAt } = data;
    const incomingMessage = {
      _id: id,
      text: text,
      createdAt: new Date(createdAt),
      user: {
        _id: senderId,
        name: senderId,
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmXGGuS_PrRhQt73sGzdZvnkQrPXvtA-9cjcPxJLhLo8rW-sVA"
      }
    };

    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, incomingMessage)
    }));
  }

  componentDidMount() {
    // This will create a `tokenProvider` object. This object will be later used to make a Chatkit Manager instance.
    const tokenProvider = new Chatkit.TokenProvider({
      url: CHATKIT_TOKEN_PROVIDER_ENDPOINT
    });

    // This will instantiate a `chatManager` object. This object can be used to subscribe to any number of rooms and users and corresponding messages.
    // For the purpose of this example we will use single room-user pair.
    const chatManager = new Chatkit.ChatManager({
      instanceLocator: CHATKIT_INSTANCE_LOCATOR,
      userId: CHATKIT_USER_NAME,
      tokenProvider: tokenProvider
    });

    // In order to subscribe to the messages this user is receiving in this room, we need to `connect()` the `chatManager` and have a hook on `onNewMessage`. There are several other hooks that you can use for various scenarios. A comprehensive list can be found [here](https://docs.pusher.com/chatkit/reference/javascript#connection-hooks).
    chatManager.connect().then(currentUser => {
      this.currentUser = currentUser;
      this.currentUser.subscribeToRoom({
        roomId: CHATKIT_ROOM_ID,
        hooks: {
          onNewMessage: message => this.onReceive(message)
        }
      });
    })
    .catch(error => {
      throw (error);
    });
  }

  render() {
    return (
        // <GiftedChat
        //   messages={this.state.messages}
        //   onSend={messages => this.onSend(messages)}
        //   user={{_id: CHATKIT_USER_NAME}}
        // />
        <ChatBot hideUserAvatar steps={this.state.steps} />
    );
  }
}
