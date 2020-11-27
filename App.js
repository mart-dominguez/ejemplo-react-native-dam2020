/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';

import Temas from './app/temas/Temas';
import Menu from './app/commons/Menu';
import EnConstruccion from './app/commons/EnConstruccion';

import {
  Header,
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  const [optMenu,setOptMenu] = useState(99);
  const opciones = ["Temas","Cursos","Buscar"];

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
         <Menu doElegirMenu={setOptMenu} opciones={opciones} idSeleccionado={optMenu}></Menu>
         {optMenu == 0 && <Temas></Temas>}
         {optMenu == 1 && <EnConstruccion></EnConstruccion>}
         {optMenu == 2 && <EnConstruccion></EnConstruccion>}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
