import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import 'react-native-gesture-handler';



export default function RegistrationScreen({navigation}) {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState();

    const onFooterLinkPress = () => {
        navigation.navigate('LoginScreen')
    }
   


    return (
        <View style = {styles.mainView}>
        
            <View style = {styles.IconName}>
            <Image style = {styles.ImageStyle} source={require('../../assets/head.png')}/>

            </View>
           
            <View style= {styles.FormView}>
                <TextInput value = {name} name='name' 
                    onChangeText={(name) => { setName(name)}}
                    placeholder= {"Name"}
                    placeholderTextColor={"black"}
                    style = {styles.TextInput}
                />

                <TextInput  value = {email} email = 'email'
                    onChangeText={(email) => {setEmail(email)}}
                    placeholder= {"Email Address"} 
                    placeholderTextColor={"black"} 
                    style = {styles.TextInput}/>
            
                <TextInput value = {password} password = 'password'
                    onChangeText={(password)=> {setPassword(password)}}
                    placeholder= {"Password"} secureTextEntry={true}
                    placeholderTextColor={"black"} style = {styles.TextInput}/>
                <TextInput
                    style={styles.TextInput}
                    placeholderTextColor="black"
                    secureTextEntry
                    placeholder='Confirm Password'
                    onChangeText={(text) => setConfirmPassword(text)}
                    value={confirmPassword}
                    
                />
               

                <TouchableOpacity  onPress={ () => navigation.navigate('LoginScreen')}style= {styles.Button} >
                    <Text style= {styles.ButtonText}>Register</Text>
                </TouchableOpacity>
            </View>
           <TouchableOpacity style= {styles.LoginButton}  onPress={ () => navigation.navigate('LoginScreen')}>
           <Text style = {styles.LoginText}>
                Already have an account? Login
            </Text>
           </TouchableOpacity>
           
        </View>
    );

    }