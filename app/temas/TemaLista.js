import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Text, Button, SafeAreaView} from 'react-native'; 
import Estilos from '../commons/Estilos';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
  });

  const Item = ({ tema,fxButton }) => (
    <View>
      <Text>{tema.nombre}</Text>
      <Text>{tema.destacado}</Text>
      <Button title="X" onPress={ () => fxButton(tema.id)}></Button>
    </View>
  );

function TemaLista({temas,doEditar,doNuevo}) {

  const renderItem = ({ item }) => (
    <Item tema={item} fxButton={doEditar} />
  );

    return (
        <>
        <Text style={Estilos.titulo}>Lista de Temas</Text>
        <FlatList
            data={temas}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
        <Button title="Nuevo Tema" onPress={() => doNuevo()}></Button>
        </>
  );
}

export default TemaLista;
