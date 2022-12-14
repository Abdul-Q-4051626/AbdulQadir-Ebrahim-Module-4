import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    mainView:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',

    },
    TopView: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    IconName: {
        justifyContent: 'center',
        //display:'flex',
        flexDirection:'row',
        alignItems: 'center',
        marginBottom: 30,
    },
    ImageStyle: {
        width: 80,
        height: 89,
    },
    FormView:{
        width:'100%',
        display:'flex',
        flexDirection:'column',
        alignItems: 'center',
    },
    TextInput:{
        width: '60%',
        borderWidth:1,
        borderColor:'black',
        height: 52,
        borderRadius:10,
        paddingLeft: 10,
        marginTop: 20,
        color: 'black',
        fontWeight:'bold',

    },
    Button:{
        width:'60%',
        height: 52,
        borderRadius: 10,
        marginTop: 20,
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center',
        fontSize:18,
        backgroundColor:'black',
    },
    ButtonText: {
        color: 'white',
        fontSize:14,
        fontWeight:'bold',

    },
    SignUpText: {
        color: 'blue',
        fontWeight:'bold',
    },
    SignUpButton:{
        width:'100%',
        marginTop: 20,
        alignItems: 'center',
        display: 'flex',
        
    },
})