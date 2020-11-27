import React from 'react';
import { Text, View,  StyleSheet} from 'react-native'; 
import Estilos from '../commons/Estilos';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
  });

function EnConstruccion() {

    return (
        <View style={Estilos.formContainer}>
        <Text style={Estilos.titulo}>Modulo en desarrollo</Text>
        </View>
  );
}

export default EnConstruccion;