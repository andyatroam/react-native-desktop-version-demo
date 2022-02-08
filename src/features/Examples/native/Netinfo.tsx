import NetInfo from '@react-native-community/netinfo';
import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import ExampleContainer from '../../../components/ExampleContainer';

const Netinfo = () => {
  const [netType, setNetType] = useState('unknow');
  const [isConnected, setIsConnected] = useState<boolean | null>(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      console.log('Connection type', state.type);
      console.log('Is connected?', state.isConnected);
      setNetType(state.type);
      setIsConnected(state.isConnected);
    });

    NetInfo.fetch().then(state => {
      console.log('Connection type', state.type);
      console.log('Is connected?', state.isConnected);
      setNetType(state.type);
      setIsConnected(state.isConnected);
    });

    return () => unsubscribe();
  }, []);
  return (
    <ExampleContainer title="Netinfo lib test" description="">
      <Text>Netinfo type: {netType}</Text>
      <Text>Netinfo isConnected: {isConnected ? 'true' : 'false'}</Text>
    </ExampleContainer>
  );
};

export default Netinfo;
