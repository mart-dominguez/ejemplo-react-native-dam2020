import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Text} from 'react-native'; 
import Estilos from '../commons/Estilos';
import TemasForm from './TemasForm';
import TemaLista from './TemaLista';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
  });

  const Item = ({ tema }) => (
    <View>
      <Text>{tema.nombre}</Text>
      <Text>{tema.destacado}</Text>
    </View>
  );

const temaDefault = {id:null,nombre:'',destacado:false}
let ID_GEN =1;
function Temas() {

  const [tema,setTema] = useState(temaDefault);
  const [listaTemas,setListaTemas] = useState([]);
  const [mensaje,setMensaje] = useState([]);
  const [guardarFormulario,setGuardarFormulario] = useState(false);
  const [editando,setEditando] = useState(true);

  const actualizarTema = (atributo,valor) =>{
    console.log('actualizar ',atributo,valor);
    const temaNuevo ={...tema, [atributo]: valor};
    setTema(temaNuevo);
  }

  
  const guardarTema = () =>{
    console.log(tema.id);
    const temaNuevo = tema.id? tema : {...tema,id:ID_GEN++};
    console.log('guardar el tema ',temaNuevo);
    const nuevaListaTemas = [...listaTemas,temaNuevo];
    setListaTemas(nuevaListaTemas);
    setTema(temaDefault);
  }

  const guardarTema2 = () => {
    const errores = [];
    if(tema.nombre && tema.nombre.length>5){
      setGuardarFormulario(true);
    } else {
      setGuardarFormulario(false);
      errores.push({descripcion:"El nombre debe tener 5 caracteres como minimo",id:1});
      setMensaje(errores);
    }
  }

  // useEffect( ()=>{
  //   const guardar = () =>{
  //     const temaNuevo = tema.id? tema : {...tema,id:ID_GEN++};
  //     const nuevaListaTemas = [...listaTemas,temaNuevo];
  //     setListaTemas(nuevaListaTemas);
  //     setTema(temaDefault);
  //     setMensaje([{descripcion:"Guardado correctamente",id:100}]);
  //     setGuardarFormulario(false);
  //     setEditando(false);
  //   }
    
  //   if(guardarFormulario ){
  //     guardar();
  //   } 

  // },[mensaje,guardarFormulario]);

  // cada vez que entro a modo edicion, es decir editando pasa de false a true
  // limpio la lista de mensajes.
  // ESTA FUNCION se ejecuta solamente cuando cambia el estado de "editando"
  // y el if entra solamente cundo editando pasa de false a true
  useEffect( ()=>{
    if(editando){ 
      setMensaje([]);
    }
  },[editando]);


  useEffect( ()=> {

      const doPostTema = () =>{
        fetch("http://10.0.2.2:5000/temas",{
           method: 'POST',
           headers: {'Content-Type': 'application/json'},
           body: JSON.stringify(tema),
           cache: 'no-cache'
        })
        .then(function(response) { return response.json();     })
        .then(function(temaGuardado) {         
              console.log('data = ', temaGuardado);  
              const nuevaListaTemas = [...listaTemas,temaGuardado];
              setListaTemas(nuevaListaTemas);
              setTema(temaDefault);
              setMensaje([{descripcion:"Guardado correctamente",id:100}]);
              setGuardarFormulario(false);
              setEditando(false);      
         })
        .catch(function(err) {         console.error(err);     });
      }

      if(guardarFormulario){
        doPostTema();
      }

  }, [guardarFormulario])

    return (
      <>
      {editando && <TemasForm  tema={tema} 
                  actualizarTema={actualizarTema}
                  doGuardar={guardarTema2}
                  mensaje={mensaje}
      ></TemasForm>}
      {!editando && <TemaLista temas={listaTemas}
        doEditar={(i)=> console.log('hola '+i)}
        doNuevo={()=>setEditando(true)}
        />}
      </>
  );
}

export default Temas;
