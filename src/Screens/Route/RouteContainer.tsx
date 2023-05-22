import React from "react";
import { i18n, LocalizationKey } from "@/Localization";
import { View, Text, StyleSheet, Image, TextInput, ImageBackground } from "react-native";
import { Colors, FontSize } from "@/Theme/Variables";

export const RouteContainer = () => {
    const APIKey = "AIzaSyBc7OA2KlNay-4w1531wG4AG8fQ2Fr0GPE";
    const [startPos, setStartPos] = useState()
    const [endPos, setStartPos] = useState()
    
    getInitialState() {
        return {
          region: {
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          },
        };
      }
      
      onRegionChange(region) {
        this.setState({ region });
      }
      
    return (
        <MapView
            region={this.state.region}
            onRegionChange={this.onRegionChange}
        />
    )

}