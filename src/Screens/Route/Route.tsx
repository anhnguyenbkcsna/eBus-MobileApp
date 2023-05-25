import React, { useRef, useState } from "react";
import { i18n, LocalizationKey } from "@/Localization";
import { View, Text, StyleSheet, Image, TextInput, ImageBackground, TouchableOpacity, Dimensions } from "react-native";
import { Colors, FontSize } from "@/Theme/Variables";
import { GooglePlaceDetail, GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MapView, { LatLng, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from "react-native-maps-directions";
import { Ionicons } from '@expo/vector-icons';
import { position } from "native-base/lib/typescript/theme/styled-system";
import { RootScreens } from "..";

type InputAutocompleteProps = {
	onPlaceSelected: (details: GooglePlaceDetail | null) => void;
	placeholder: string;
}
const InputAutocomplete = ({ 
	onPlaceSelected,
	placeholder
}: InputAutocompleteProps) => {
	return <GooglePlacesAutocomplete
		style={styles.formInput}
		placeholder="Nhập địa điểm"
		fetchDetails
		returnKeyTypes={'search'}
		// minLength={2}
		enablePoweredByContainer={false}
		query={{
			key: "AIzaSyBc7OA2KlNay-4w1531wG4AG8fQ2Fr0GPE",
			language: 'en',
		}}
		onPress={(data, details = null) => {
			onPlaceSelected(details)
		}}
		nearbyPlacesAPI="GooglePlacesSearch"
		debounce={400}
	/>
}
export const Route = (props: {onNavigate: (string: RootScreens) => void; }) => {
    // const REACT_APP_GOOGLE_MAPS_APIKEY = "AIzaSyBc7OA2KlNay-4w1531wG4AG8fQ2Fr0GPE";
	const { width, height } = Dimensions.get('window');
	const ASPECT_RATIO = width / height;
	const LATITUDE_DELTA = 0.001;
	const LONGITUDE_DELTA = 0.03;

	const INITIAL_POSITION = {
		latitude: 10.87673,
		longitude: 106.80594,
		latitudeDelta: LATITUDE_DELTA,
		longitudeDelta: LONGITUDE_DELTA,
	};
	
	const [origin, setOrigin] = useState<LatLng | null>()
	const [destination, setDestination] = useState<LatLng | null>()
	const [show, setShow] = useState(false)

	const mapRef = useRef<MapView>(null)

	const moveTo = async (position: LatLng) => {
		const camera = await mapRef.current?.getCamera()
		if(camera) {
			camera.center = position;
			mapRef.current?.animateCamera(camera, {duration: 500})
		}
	}
	const onPlaceSelected = (
		details: GooglePlaceDetail | null,
		flag: 'origin' | 'destination'
	) => {
		const set = flag == 'origin' ? setOrigin : setDestination
		const position = {
			latitude: details?.geometry.location.lat || 0,
			longitude: details?.geometry.location.lng || 0,
			latDelta: details?.geometry.viewport.northeast.lat - details?.geometry.viewport.southwest.lat || LATITUDE_DELTA,
			lngDelta: (details?.geometry.viewport.northeast.lat - details?.geometry.viewport.southwest.lat) * 5 * ASPECT_RATIO,
		}
		set(position)
		moveTo(position)
	}

    return (
		<View style={styles.container}>
			<View style={styles.topmidTitle}>
				<ImageBackground source={require('../../Assets/Top-bg.png')} resizeMode="cover" style={styles.bg}>
					<View style={{marginLeft: '2%', flex: 1, flexDirection: 'row', justifyContent: 'flex-start',alignItems: 'center' }}>
						<Ionicons 
							onPress={() => props.onNavigate(RootScreens.MAIN)}
							style={{fontSize: 30, color: 'white'}} 
							name="arrow-back-outline"
						/>
					</View>
					<View style={styles.formContainer}>
						<InputAutocomplete label="origin" onPlaceSelected={(details) => {
							onPlaceSelected(details, "origin")
						}} />
						<InputAutocomplete label="destination" onPlaceSelected={(details) => {
							onPlaceSelected(details, "destination")
						}} />
					</View>
					{/* <View style={styles.btnContainer}>
						<TouchableOpacity style={styles.btn} onPress={() => setShow(true)}>
							<Text style={styles.btnText}>
								{i18n.t(LocalizationKey.FIND)}
							</Text>
						</TouchableOpacity>
					</View> */}
				</ImageBackground>
				{/* <MapViewDirections 
					origin={}
					destination={}
					apikey={REACT_APP_GOOGLE_MAPS_APIKEY}
					strokeColor={Colors.PRIMARY}
					strokeWidth={3}
				/> */}
				<MapView
					style={styles.map}
					showsUserLocation
					provider={ PROVIDER_GOOGLE }
					ref={mapRef}
					region={INITIAL_POSITION}
				>
					{origin && <Marker coordinate={origin} />}
					{destination && <Marker coordinate={destination} />}

					{origin && destination && <MapViewDirections
						origin={origin}
						destination={destination}
						apikey="AIzaSyBc7OA2KlNay-4w1531wG4AG8fQ2Fr0GPE"
						strokeColor={Colors.PRIMARY}
						strokeWidth={4}
						// onReady={traceRouteOnReady}
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
		width: '100%',
		minHeight: '15%',
		top: '20%',
		paddingHorizontal: 10,
		overflow: 'visible',
		paddingHorizontal: "12%",
	},
	// formInput: {
	// 	marginVertical: 10,
	// },
	btn: {
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
// quá trầm cảm với maps .-. anhnguyen
// Thanks for https://www.youtube.com/watch?v=Wq3dO05jv6o&ab_channel=FabioBergmann