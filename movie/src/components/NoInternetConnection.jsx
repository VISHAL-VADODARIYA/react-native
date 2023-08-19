import NetInfo from '@react-native-community/netinfo';

const NoInternetConnection = (setCheck) => NetInfo.addEventListener(state => {
  // console.log('Connection type', state.type);
  // console.log('Is connected?', state.isConnected);
  setCheck(state.isConnected)
  
});

export default NoInternetConnection;
