import { StyleSheet} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import React, {Component} from "react";
import {useRoute} from "@react-navigation/native";



export default function TabTwoScreen(){
        const route = useRoute();

        return (
        <View style={styles.container}>
          <Text style={styles.title}>Tab Two</Text>
          <h1>{route.params.user}</h1>
          <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
          <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
