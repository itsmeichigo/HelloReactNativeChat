import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, View, ViewPropTypes, Text, TouchableHighlight } from 'react-native';
import MessageText from './MessageText';
import Color from './Color';

export default class MessageOptions extends React.Component {

  constructor(props) {
    super(props);
    this.onOptionPress = this.onOptionPress.bind(this);
    this.state = {
      selectedOptionId: null,
    };
  }

  onOptionPress(option) {
    if (this.state.selectedOptionId) {
      return;
    }
    this.setState({ selectedOptionId: option.id });

    // TODO: perform action
  }

  styleForOption(option) {
    const { buttonToNext, unselectedButtonColor, disabledButtonColor, selectedButtonColor } = styles;
    const { options } = this.props.currentMessage;
    const isLastOption = options.findIndex(item => option.id === item.id) === options.length - 1;

    let stateColor = disabledButtonColor;
    if (!this.state.selectedOptionId) {
      stateColor = unselectedButtonColor;
    } else if (option.id === this.state.selectedOptionId) {
      stateColor = selectedButtonColor;
    }

    if (!isLastOption) {
      return [buttonToNext, stateColor];
    }
    return [stateColor];
  }

  styleForOptionTitle(option) {
    const { text, unselectedTextColor, selectedTextColor, disabledTextColor} = styles;
    if (!this.state.selectedOptionId) {
      return [text, unselectedTextColor];
    } else if (option.id === this.state.selectedOptionId) {
      return [text, selectedTextColor];
    }
    return [text, disabledTextColor];
  }

  renderOptions() {
    return this.props.currentMessage.options.map(option =>
      <TouchableHighlight
        key={option.id}
        onPress={() => this.onOptionPress(option)}
        style={this.styleForOption(option)}
        underlayColor={Color.leftBubbleBackground}>
        <Text style={this.styleForOptionTitle(option)}>
          {option.title}
        </Text>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <View style={[this.props.containerStyle, styles.container]}>
        <MessageText
          {...this.props}
          containerStyle={{
            left: {
              backgroundColor: Color.leftBubbleBackground,
              borderRadius: 15,
              borderTopLeftRadius: 3,
            },
          }} />
          <View style={styles.buttonWrapper}>
            {this.renderOptions()}
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  },
  messageText: {
    overflow: 'hidden',
  },
  text: {
    fontSize: 16,
    lineHeight: 40,
    textAlign: 'center',
    marginLeft: 25,
    marginRight: 25,
  },
  unselectedTextColor: {
    color: Color.defaultBlue,
  },
  selectedTextColor: {
    color: 'white',
  },
  disabledTextColor: {
    color: 'black',
  },
  buttonWrapper: {
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor: Color.defaultColor,
    overflow: 'hidden',
    marginTop: 5,
    alignSelf: 'baseline',
  },
  buttonToNext: {
    borderBottomWidth: 0.5,
    borderColor: Color.defaultColor,
  },
  selectedButtonColor: {
    backgroundColor: Color.defaultBlue,
  },
  disabledButtonColor: {
    backgroundColor: Color.leftBubbleBackground,
  },
  unselectedButtonColor: {
    backgroundColor: 'white',
  }
});

MessageOptions.defaultProps = {
  currentMessage: {
    content: null,
  },
  containerStyle: {},
};

MessageOptions.propTypes = {
  currentMessage: PropTypes.object,
  containerStyle: ViewPropTypes.style,
};
