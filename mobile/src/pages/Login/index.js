import React, { useEffect, useState} from 'react';
import {View, Image, KeyboardAvoidingView, Text, TextInput, Linking} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/logo.png';

import styles from './styles';

import firebaseService from '../../services/Firebase/firebaseService';


export default function Login2(){

    const navigator = useNavigation();
    
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    async function signInUser(){

        //login pra testes
        // email "gilberto@gmail.com"
        // senha "gilberto"
        //ou 
        // email "gil@gmail.com"
        // senha "gilberto"

        try {
            let user = await firebaseService.loginUser(email,password);
            if(user!=null){
                navigator.navigate("Home");
            }
        }catch{
            alert("eu to cansando")
        }
    }

    return(

        <KeyboardAvoidingView style={styles.container} behavior='position' keyboardVerticalOffset={-175}>
            
            <View style={styles.header}>
                <Image source={logoImg} style={styles.headerLogo}/>
                <Text style={styles.headerSlogan}>Encontre empresas agora!</Text>
            </View>

            <View style={styles.form}>

                <Text style={styles.formLabel}>Email</Text>
                <TextInput style={styles.input} placeholder="Digite seu email" placeholderTextColor="#616161" selectionColor="#3B5C2F"/>

                <Text style={styles.formLabel}>Senha</Text>
                <TextInput style={styles.input} placeholder="Digite sua senha" placeholderTextColor="#616161" selectionColor="#3B5C2F"/>

            </View>

            <View style={styles.submit}>

                <TouchableOpacity style={styles.buttonSubmit} onPress={signInUser}>
                    <Text style={styles.textSubmit}>Entrar</Text>
                </TouchableOpacity>

                <View style={styles.links}>

                    <TouchableOpacity style={styles.forgotButton}
                    onPress={()=>{firebaseService.doPasswordReset(email)}}
                    >
                        <Text style={styles.forgotText}>Esqueci minha senha</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.cadastroButton}
                        onPress={()=>{ navigator.navigate('Stack', { screen: 'Cadastro' })}}
                    >
                        <Text style={styles.cadastroText}>Ainda não possui cadastro?</Text>
                    </TouchableOpacity>

                    <Text style={styles.pwdText}>Powered by No Bugs</Text>

                </View>
            </View>
            
        </KeyboardAvoidingView>

    );
}