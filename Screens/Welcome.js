import React, { Component } from 'react';
import {View,Text,Modal, TextInput,TouchableOpacity,StyleSheet, ScrollView} from 'react-native';
import firebase from 'firebase';
import db from '../config';
import Teachers from './teachersignup';
import MyHeader from '../MyHeader'
export default class WelcomeScreen extends Component{
constructor(){
    super();
    this.state={
        email:'',password:''
    }
}
Login=(e,p)=>{
    firebase.auth().signInWithEmailAndPassword(e,p)
    .then(response=>{
        
    })
}


render(){
    return(
        <View style={{flex:1,backgroundColor:'cyan',justifyContent:'center'}}>
        <MyHeader title=" School HomeWork"/>
            <View style={{justifyContent:'center',alignSelf:'center'}}>
                <TextInput
                placeholder="email-id"
                keyboardType={'email-address'}
                onChangeText={Text=>{this.setState({email:Text})}}
                style={{alignSelf:'center',marginTop:20,textAlign:'center',borderWidth:2,borderColor:'red',width:200,height:40,fontSize:16}}
                value={this.state.email}
                />
                <TextInput
                placeholder="password"
                secureTextEntry
                onChangeText={Text=>{this.setState({password:Text})}}
                style={{alignSelf:'center',textAlign:'center',borderWidth:2,borderColor:'red',width:200,height:40,fontSize:16,marginTop:20}}
                value={this.state.password}
                />
                <TouchableOpacity style={{marginTop:20,backgroundColor:'red',justifyContent:'center',alignItems:'center',borderWidth:2,width:230,borderRadius:80}}>
                <Text>
                  LogIn
                </Text>
            </TouchableOpacity>
            </View>


            <View style={{justifyContent:'center',alignItems:'center',marginTop:80}}>
            <Text style={{fontSize:18,color:'blue'}}>Sign Up:-</Text>


            <TouchableOpacity style={{backgroundColor:'red',marginTop:20,justifyContent:'center',alignItems:'center',borderWidth:2,width:230,borderRadius:80}}
            onPress={()=>{this.props.navigation.navigate('teacher')}}>
                <Text>
                  I'm a teacher
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  style={{backgroundColor:'red',marginTop:20,justifyContent:'center',alignItems:'center',borderWidth:2,width:230,borderRadius:80}}
            onPress={()=>{this.props.navigation.navigate('student')}}
            >
                <Text>
                  I'm a Student
                </Text>
            </TouchableOpacity>
        </View>
        </View>
    )
}



}




