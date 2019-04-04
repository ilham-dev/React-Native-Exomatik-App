import React, { Component } from "react";
import { View } from "react-native";
import Navbar from "../components/Navbar";
export default class Home extends Component<{}> {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Navbar />
      </View>
    );
  }
}
