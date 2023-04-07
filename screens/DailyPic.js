import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ImageBackground, SafeAreaView, StatusBar, Image } from 'react-native'

export default class DailyPicScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}> </SafeAreaView>
                <ImageBackground source={require('../assets/daily_pictures.png')} style={styles.backgroundImage}>
                    <View style={styles.titleBar}>
                        <Text style={styles.titleText}>
                            Daily Pic
                        </Text>
                    </View>

                    <TouchableOpacity
                        style={styles.routeCard}
                        onPress={() =>
                            this.props.navigation.navigate("SpaceCrafts")}>

                        <Text style={styles.routeText}> Space Crafts </Text>
                        <Image source={require('../assets/space_crafts.png')} style={styles.iconImage}>
                        </Image>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.routeCard}
                        onPress={() =>
                            this.props.navigation.navigate("StarMap")}>

                        <Text style={styles.routeText}> Star Map </Text>
                        <Image source={require('../assets/star_map.png')} style={styles.iconImage}>
                        </Image>
                    </TouchableOpacity>

                </ImageBackground>

            </View>

        )
    }
}


const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        },
        droidSafeArea: {
            marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
        },
            backgroundImage:{
                flex:1,
                resizeMode:'cover',
            },
            routeCard:{
                flex:0.25,
                marginLeft:50,
                marginTop:50,
                marginRight:50,
                borderRadius:30,
                backgroundColor:'white',
            },
            titleBar:{
                flex: 0.25,
                justifyContent: "center",
                alignItems: "center",
            },
            titleText:{
               fontSize:40,
               fontWeight:'bold',
               color:'white',
            },
            routeText:{
                fontSize:35,
               fontWeight:'bold',
               color:'black',
               marginTop:75,
               paddingLeft:30,
            },
            bgDigit:{
                position:'absolute',
                color:'lightgrey',
                fontSize:150,
                right:20,
                bottom:-15,
                zIndex:-1
            },
            iconImage:{
                position:'absolute',
                height:200,
                width:200,
                resizeMode:'contain',
                right:20,
                top:-80,
            }
            

    }
)
