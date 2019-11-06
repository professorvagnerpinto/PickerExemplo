/**
 * Vídeo #4:Picker - Módulo 11 - React Native Intermediário - B7Web
 * Link para a documentação oficial: https://facebook.github.io/react-native/docs/picker
 */

import React, {Component} from 'react';
import {View, StyleSheet, Picker, Text} from 'react-native';

export default class PickerExemplo extends Component{

  constructor(props){
    super(props);
    this.state = {
        servico: 0,
        servicos: [
            {nome: 'Alinhamento', valor:30},
            {nome: 'Balanceamento', valor:20},
            {nome: 'Rodízio de pneus', valor:20},
            {nome: 'Regulagem faróis', valor:30},
            {nome: 'Limpeza ar condicionado', valor:50}
        ]
    };
  }

  markValor(){
      return (this.state.servicos[this.state.servico].valor).toFixed(2);
  }

  render(){
    let servicosItens = this.state.servicos.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.nome}/>
    });

    return(
        <View style={styles.body}>
            <Text style={styles.textoHeader}>Selecione no Picker</Text>
            <Picker selectedValue={this.state.servico} onValueChange={(itemIndex)=> this.setState({servico:itemIndex})}>
                {servicosItens}
            </Picker>
            <Text style={styles.textoFooter}>R$ {this.markValor(this.state.servicos[this.state.servico].valor)}</Text>
        </View>
    );
  }

}//fim classe

const styles = StyleSheet.create({
    body:{
      paddingTop:20, //para IOs
      flex:1,
      //backgroundColor:'#222222'
    },
    textoHeader:{
        paddingLeft:10
    },
    textoFooter:{
        textAlign:'center',
        fontSize:24
    }
});
