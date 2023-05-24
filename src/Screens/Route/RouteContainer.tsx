import React, { useState } from "react";
import { i18n, LocalizationKey } from "@/Localization";
import { View, Text, StyleSheet, Image, TextInput, ImageBackground, Button } from "react-native";
import { Colors, FontSize } from "@/Theme/Variables";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MapView, { Marker } from 'react-native-maps';

export const RouteContainer = () => {
    const REACT_APP_GOOGLE_MAPS_APIKEY = "AIzaSyBc7OA2KlNay-4w1531wG4AG8fQ2Fr0GPE";
    const [startPos, setStartPos] = useState()
    const [endPos, setEndPos] = useState()
    const [start, setStart] = useState('')

	const pos = {
		lat: 10.87973,
		long: 106.80594,
		latDelta: 0.001,
		longDelta: 0.02,
	}
	
    return (
		<View style={styles.container}>
			<View style={styles.topmidTitle}>
				<ImageBackground source={require('../../Assets/Top-bg.png')} resizeMode="cover" style={styles.bg}>
					<View style={styles.formContainer}>
						<GooglePlacesAutocomplete
							style={styles.formInput}
							placeholder="Đi từ - Vị trí của bạn"
							fetchDetails={true}
							returnKeyTypes={'search'}
							minLength={2}
							enablePoweredByContainer={false}
							query={{
								key: REACT_APP_GOOGLE_MAPS_APIKEY,
								language: 'en',
							}}
							// value = {start}
							nearbyPlacesAPI="GooglePlacesSearch"
							debounce={400}
						/>
						<GooglePlacesAutocomplete
							style={styles.formInput}
							placeholder="Đến - Nhập địa điểm đến"
							fetchDetails={true}
							returnKeyTypes={'search'}
							minLength={2}
							enablePoweredByContainer={false}
							query={{
								key: REACT_APP_GOOGLE_MAPS_APIKEY,
								language: 'en',
							}}
							nearbyPlacesAPI="GooglePlacesSearch"
							debounce={400}
						/>
					</View>
					<View style={styles.btnContainer}>
						<Button style={styles.btn} title={i18n.t(LocalizationKey.FIND)} color={Colors.WHITE}/>
					</View>
				</ImageBackground>
				
				<MapView
					style={styles.map}
					showsUserLocation
					region={{
						latitude: pos.lat,
						longitude: pos.long,
						latitudeDelta: pos.latDelta,
						longitudeDelta: pos.longDelta,
					}}
				>
					{start && <Marker 
						coordinate={{
							latitude: pos.lat,
							longitude: pos.long,
							latitudeDelta: pos.latDelta,
							longitudeDelta: pos.longDelta,
						}}
						title = 'Start'
						identifier="Start"
					/>}
				</MapView>
			</View>
		</View>
    )
}

const styles = StyleSheet.create({
	bg: {
        justifyContent: "space-between",
		alignItems: 'center',
        width: "100%",
        minHeight: '20%',
		flex: 2,
        flexDirection: 'row',
    },
	formContainer: {
		position: 'absolute',
		// backgroundColor: Colors.PRIMARY,
		width: '85%',
		minHeight: '15%',
		paddingTop: '10%',
		padding: 10,
	},
	formInput: {
		maxWidth: '10%',
	},
	btnContainer: {
		position: 'absolute',
		right: '3%',
		alignItems: 'right',
		backgroundColor: Colors.PRIMARY,
		borderRadius: 5,
	},
	map: {
		width: '100%',
		height: '100%',
		zIndex: -1,
		elevation: -1, // works on android
	},
})