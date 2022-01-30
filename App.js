import React, {useEffect,useState} from 'react';

import { Dimensions, StyleSheet, Text, View, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Skeleton from './src/Skeleton'

const { width } = Dimensions.get('window')

export default function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let timer = setInterval(() => {
      setLoading(false);
    }, 3000)
  })

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#121212' />

      <Skeleton visible={loading}>
        <View style={{ margin: 10 }}>

          <View style={styles.card}>

            <Image
              source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' }}
              style={{ width: 100, height: 100, borderRadius: 60, backgroundColor: '#FFF', marginRight: 15 }}
            />

            <View style={{ flex: 1, justifyContent: 'space-evenly' }}>
              <Text style={{ color: '#FFF', fontSize: 23, fontWeight: 'bold' }}>React Native</Text>
              <Text style={{ color: '#FFF', fontSize: 18 }}>@ReactNative</Text>
            </View>

          </View>

          <Text style={{ margin: 10, color: '#FFF', fontSize: 18 }}>
            Testando nosso skeleton loading animado que ficou show de bola!
            </Text>

          <Text style={{ margin: 10, color: '#FFF', fontSize: 18 }}>
            Ja se inscreveu no canal?
            </Text>

        </View>
      </Skeleton>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    paddingTop: 15
  },

  card: {
    width: width - 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
});
