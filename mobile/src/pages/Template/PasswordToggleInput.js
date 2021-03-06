import React from 'react'
import {View, TextInput, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../Login/styles';

export default class PasswordToggleInput extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            secureTextEntry: true,
            iconName: 'eye'
        }
    }

    iconOnPress = () => {
        this.setState({
            secureTextEntry: !this.state.secureTextEntry,
            iconName: this.state.iconName == 'eye' ? 'eye-off' : 'eye'
        })
    }

    render () {
        return (
            <View style={styles.passwordView}>
                <TextInput {...this.props} style={styles.labelPassword} placeholderTextColor="#616161" secureTextEntry={this.state.secureTextEntry} onChangeText={this.props.onChange} />
                <TouchableOpacity onPress={this.iconOnPress} style={{paddingTop: 20}}>
                    <Icon name={this.state.iconName} size={20}/>
                </TouchableOpacity>
            </View>
        )
    }
}