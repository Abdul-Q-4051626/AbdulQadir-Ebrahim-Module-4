
import React from 'react'
import { Image, Text, View, ScrollView, Button, TouchableOpacity } from 'react-native'
import styles from './styles';
import 'react-native-gesture-handler';


export default function ContactUsScreen({navigation}) {
    const openMaps = () => {
        navigation.navigate('GoogleMapsScreen')
        }
    return (
        <View style = {styles.mainView}>
            <View style = {styles.ContactUs}>
                <Text style = {styles.Intro}>
                    Need to get hold of us? We'd love to hear from you!
                    {'\n'}Reach out to use using the details below. 
                </Text>

            <View>
            <TouchableOpacity style={styles.openMaps}
                onPress={() => navigation.navigate('GoogleMapsScreen')}>
                    <Text style = {styles.mapLink}>
                        Click on this link to visit our nearest stores!
                    </Text>
            </TouchableOpacity>
            </View>

            <View style= {styles.cell}>
                <Text style = {styles.cellText}>
                    Phone:{'\n'}060 102 0403
                </Text>
            </View>

            <View style= {styles.email}>
                <Text style= {styles.emailText}>
                    Email:{'\n'}Boundlesscharging@gmail.com
                </Text>
            </View>

            </View>
        </View>
        
    );
}












     