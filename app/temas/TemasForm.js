import React, { useState } from 'react';
import { Text, TextInput , View, Button, Switch, StyleSheet} from 'react-native'; 
import Estilos from '../commons/Estilos';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
  });

function TemasForm({tema,actualizarTema,doGuardar,mensaje}) {

    return (
      <View >    
        <Text style={Estilos.titulo}>Gestion de Temas</Text>
        <View style={Estilos.formContainer}>
            {tema.id && <Text>{tema.id}</Text>}
            <TextInput 
                    placeholder="Ingrese el titulo"
                    onChangeText={text => actualizarTema('nombre',text)}
                    defaultValue={tema.nombre}            
            ></TextInput>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              ios_backgroundColor="#3e3e3e"
              onValueChange={val => actualizarTema('destacado',val)}
              value={tema.destacado}
              te
            />
            <Button title="Guardar" onPress={doGuardar}></Button>
        </View>
        {mensaje && mensaje.map( e => <Text key={e.id}>{e.descripcion}</Text>)}
        </View>
  );
}

export default TemasForm;
