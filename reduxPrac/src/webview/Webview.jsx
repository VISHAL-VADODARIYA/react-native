import {View, WebView} from 'react-native';
import React from 'react';

const Webview = () => {
  return (
    <View>
      <Webview
        source={{
          uri: 'https://github.com/facebook/react-native',
        }}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{marginTop: 20}}
      />
    </View>
  );
};

export default Webview;
