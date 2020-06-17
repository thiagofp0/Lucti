import React from 'react';
import { View, Text, CheckBox, Linking } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { TextInput } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function Cadastro(){
    const navigator = useNavigation();
    return(

        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=>{navigator.goBack()}}>
                    <Feather name="arrow-left" size={28} color="#616161"/>
                </TouchableOpacity>
                <Text style={styles.title}>Cadastro</Text>
            </View>

            <View style={styles.form}>
                
                <View style={styles.formRow}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        theme={{colors: {primary: 'transparent'}}}
                        underlineColor={'transparent'}
                        style={styles.labelInput}
                        placeholder='Ex: seuemail@email.com'
                    />
                </View>

                <View style={styles.formRow}>
                    <Text style={styles.label}>Senha</Text>
                    <TextInput
                        theme={{colors: {primary: 'transparent'}}}
                        underlineColor={'transparent'}
                        style={styles.labelInput}
                        placeholder='Digite uma senha'
                    />
                </View>

                <View style={styles.formRow}>
                    <Text style={styles.label}>Confirme a senha</Text>
                    <TextInput
                        theme={{colors: {primary: 'transparent'}}}
                        underlineColor={'transparent'}
                        style={styles.labelInput}
                        placeholder='Digite a senha novamente'
                    />
                </View>
                <View style={styles.termsCheck}>
                    <CheckBox />
                    <Text>Li e concordo com os <Text onPress={() => Linking.openURL('http://google.com')} style={{color: "#3B5C2F"}}>termos de uso</Text></Text>
                </View>

            </View>

            <TouchableOpacity style={styles.buttonContinue} onPress={()=>{navigator.navigate('Dados')}}>
                <Text style={styles.textContinue}>Continuar</Text>
            </TouchableOpacity>

        </View>

    );
}