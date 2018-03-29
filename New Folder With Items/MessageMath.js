/* eslint no-use-before-define: ["error", { "variables": false }] */

import PropTypes from 'prop-types';
import React from 'react';
import { WebView, StyleSheet, View, ViewPropTypes, Dimensions } from 'react-native';

import AutoHeightWebView from 'react-native-autoheight-webview';

export default class MessageMath extends React.Component {

  wrapMathjax(content) {

		const mathOptions = {
      showMathMenu: false,
			messageStyle: 'none',
			displayAlign: 'left',
      tex2jax: {preview: 'none'},
      ml2jax: {preview: 'none'}
		};

		return `
      <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
          <script type="text/x-mathjax-config">
             MathJax.Hub.Config(${mathOptions});
           </script>
           <script src="MathJax/MathJax.js?config=MML_SVG"></script>
           <style type="text/css">
            body { display: block; zoom: 1.0; -webkit-text-size-adjust: 100%%; }
            div {display: table; vertical-align: middle;}
           </style>
         </head>
         <body>
          <div id=content>
           <mathml style="font-size: 15px;"><math xmlns="http://www.w3.org/1998/Math/MathML" xmlns:mathematica="http://www.wolfram.com/XML/" mathematica:form="StandardForm">
            ${content}
            </math></mathml>
          </div>
        </body>
      </html>
    `;
	}

  render() {
    return (
      <View style={[styles.container, this.props.containerStyle]}>
        <AutoHeightWebView
          style={styles.web}
          source={{html:this.wrapMathjax(this.props.currentMessage.content)}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
  web: {
    borderRadius: 13,
    maxWidth: Dimensions.get('window').width - 100,
  },
});

MessageMath.defaultProps = {
  currentMessage: {
    content: null,
  },
  containerStyle: {},
};

MessageMath.propTypes = {
  currentMessage: PropTypes.object,
  containerStyle: ViewPropTypes.style,
};
