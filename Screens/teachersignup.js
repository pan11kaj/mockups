import React, { Component } from 'react';
import {View,Text,Modal, TextInput,TouchableOpacity,StyleSheet, ScrollView} from 'react-native';
import firebase from 'firebase';
import db from '../config';
import MyHeader from '../MyHeader';
import { Alert } from 'react-native';
export default class Teachers extends Component{
constructor(){
    super();
    this.state={
        name:'',email:'',password:'',school:'',yourcreateid:'',contact:''
    }
}
SignUp=(e,p)=>{
if(this.state.name ==='' ||this.state.password ==='' ||this.state.email ==='' ||this.state.school ==='' ||this.state.contact ==='' ||this.state.yourcreateid ===''){
    return Alert.alert('please fill all the information')
}else{
    db.collection('teachers').add({
        'teacher':this.state.name,
        'school':this.state.school,
        'id':this.state.yourcreateid,
        'email':this.state.email,
        'password':this.state.password,
        'contact':this.state.contact
    })
    firebase.auth().createUserWithEmailAndPassword(e,p)
    .then(response=>{
        this.props.navigaton.navigate('Welcome')
        return Alert.alert('You are signed remember your created id and give to your students')
        
    
    })
    .catch(error=>{
        var msg = error.error
        return Alert.alert(msg)
    })
    this.setState({
        name:'',school:'',email:'',password:'',yourcreateid:'',contact:''
    })
}

}

render(){
    return(
        <View style={{flex:1}}>
            <MyHeader title="Sign Up "/>
            <View style={{justifyContent:"center",alignItems:'center'}}>
            <TextInput
            placeholder=" full Name"
            style={{borderColor:'red',width:200,textAlign:'center',backgroundColor:'yellow',borderWidth:2,marginTop:20}}
            onChangeText={text=>{this.setState({name:text})}}
            value={this.state.name}
            />
              <TextInput
            placeholder=" School Name"
            style={{borderColor:'red',width:200,textAlign:'center',backgroundColor:'yellow',borderWidth:2,marginTop:20}}
            onChangeText={text=>{this.setState({school:text})}}
            value={this.state.school}
            />
              <TextInput
            placeholder="email"
            keyboardType={'email-address'}
            style={{borderColor:'red',width:200,textAlign:'center',backgroundColor:'yellow',borderWidth:2,marginTop:20}}
            onChangeText={text=>{this.setState({email:text})}}
            value={this.state.email}
            />
              <TextInput
            placeholder="Password"
            secureTextEntry

            style={{borderColor:'red',width:200,textAlign:'center',backgroundColor:'yellow',borderWidth:2,marginTop:20}}
            onChangeText={text=>{this.setState({password:text})}}
            value={this.state.password}
            />
              <TextInput
            placeholder="contact"
            maxLength={10}
            keyboardType={'number-pad'}
            style={{borderColor:'red',width:200,textAlign:'center',backgroundColor:'yellow',borderWidth:2,marginTop:20}}
            onChangeText={text=>{this.setState({contact:text})}}
            value={this.state.contact}
            />
              <TextInput
            placeholder="create 6 digit id"
            maxLength={6}
            style={{borderColor:'red',width:200,textAlign:'center',backgroundColor:'yellow',borderWidth:2,marginTop:20}}
            onChangeText={text=>{this.setState({yourcreateid:text})}}
            value={this.state.yourcreateid}
            />
            <TouchableOpacity style={{borderWidth:2,width:160,backgroundColor:'red',borderRadius:190}}><Text style={{color:'#ffff',fontSize:18,textAlign:'center'}}
            onPress={()=>{this.SignUp(this.state.email,this.state.password)
            }}
            >Sign Up</Text></TouchableOpacity>
            </View>
        </View>
    )
}



}
