import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from 'react-native';

import { GiftedChat, Actions, SystemMessage } from 'react-native-gifted-chat';
import MessageMath from './CustomChat/MessageMath';
import MessageOptions from './CustomChat/MessageOptions';
import Bubble from './CustomChat/Bubble';
import Color from './CustomChat/Color';
import { MessageType } from './CustomChat/constants';

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      loadEarlier: true,
      typingText: null,
      isLoadingEarlier: false,
    };

    this._isMounted = false;
    this.onSend = this.onSend.bind(this);
    this.onReceive = this.onReceive.bind(this);
    this.renderBubble = this.renderBubble.bind(this);
    this.renderSystemMessage = this.renderSystemMessage.bind(this);
    this.renderFooter = this.renderFooter.bind(this);

    this._isAlright = null;
  }

  componentWillMount() {
    this._isMounted = true;
    this.setState(() => {
      return {
        messages: require('./data/messages.js'),
      };
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  onSend(messages = []) {
    const messagesToSend = messages.map(message => ({
      content: message.text,
      type: 'text',
      _id: Math.round(Math.random() * 1000000),
      user: {
        _id: 1,
        name: 'Developer',
      },
      createdAt: new Date(),
      sent: true,
      received: true,
    }));
    
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, messagesToSend),
      };
    });

    // for demo purpose
    this.answerDemo(messages);
  }

  answerDemo(messages) {
    if (messages.length > 0) {
      if ((messages[0].image || messages[0].location) || !this._isAlright) {
        this.setState((previousState) => {
          return {
            typingText: 'React Native is typing'
          };
        });
      }
    }

    setTimeout(() => {
      if (this._isMounted === true) {
        if (messages.length > 0) {
          if (messages[0].image) {
            this.onReceive('Nice picture!');
          } else if (messages[0].location) {
            this.onReceive('My favorite place');
          } else {
            if (!this._isAlright) {
              this._isAlright = true;
              this.onReceive('Alright');
            }
          }
        }
      }

      this.setState((previousState) => {
        return {
          typingText: null,
        };
      });
    }, 1000);
  }

  onReceive(text) {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, {
          _id: Math.round(Math.random() * 1000000),
          content: text,
          type: 'text',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            // avatar: 'https://facebook.github.io/react/img/logo_og.png',
          },
        }),
      };
    });
  }

  renderBubble(props) {
    if (props.currentMessage.type === MessageType.TEXT ||
        props.currentMessage.type === MessageType.MATHML) {
      return (
        <Bubble
          {...props}
          wrapperStyle={{
            left: {
              backgroundColor: Color.leftBubbleBackground,
            },
            right: {
              backgroundColor: Color.defaultBlue,
            }
          }}
        />
      );
    } 
    
    return (
      <Bubble
        {...props}
      />
    );
  }

  renderSystemMessage(props) {
    return (
      <SystemMessage
        {...props}
        containerStyle={{
          marginBottom: 15,
        }}
        textStyle={{
          fontSize: 14,
        }}
      />
    );
  }

  renderCustomView(props) {
    if (props.currentMessage.type === MessageType.MATHML) {
      return (
        <MessageMath
          {...props}
        />
      );
    } else if (props.currentMessage.type === MessageType.SUGGESTED) {
      return (
        <MessageOptions
          {...props}
        />
      );
    }
    return null;
  }

  renderFooter(props) {
    if (this.state.typingText) {
      return (
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>
            {this.state.typingText}
          </Text>
        </View>
      );
    }
    return null;
  }

  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <GiftedChat
          messages={this.state.messages}
          onSend={this.onSend}
          user={{
            _id: 1, // sent messages should have same user._id
          }}
          renderBubble={this.renderBubble}
          renderSystemMessage={this.renderSystemMessage}
          renderCustomView={this.renderCustomView}
          renderFooter={this.renderFooter}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  footerContainer: {
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  footerText: {
    fontSize: 14,
    color: '#aaa',
  },
  safeArea: {
    flex: 1,
  },
});
