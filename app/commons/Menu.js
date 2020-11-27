import React, { useState } from 'react';
import { Text, View, Button,  StyleSheet} from 'react-native'; 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
  });

function Menu({opciones,doElegirMenu,idSeleccionado}) {

    return (
    <View>
        <Text>{idSeleccionado>=0? opciones[idSeleccionado] : 'Seleccionar una opcion'}</Text>
        <View style={styles.container}>
            {opciones.map( (elemento,indice) => {
              return <Button key={indice} disabled={idSeleccionado===indice} onPress={() => doElegirMenu(indice)} title={elemento}></Button>
            })}
        </View>
    </View>
  );
}

export default Menu;
