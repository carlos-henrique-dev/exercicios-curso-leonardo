import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import Padrao from '../estilo/Padrao';

export default class Evento extends Component {
    state = {
        texto: ''
    }

    alterarTexto = texto => {
        this.setState({
            texto   /*  se o nome do da chave for = ao nome do parametro,
                     pode colocar só um nome. não precisa fazer assim:   texto: texto */
        })
    }

    render() {
        return (
            <View>
                <Text style={Padrao.fonte40}> {this.state.texto}</Text>
                <TextInput
                    value={this.state.texto}
                    style={Padrao.input}
                    onChangeText={this.alterarTexto}>
                </TextInput>
            </View>
        )
    }
}