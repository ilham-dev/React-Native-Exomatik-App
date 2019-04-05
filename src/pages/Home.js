import React, { Component } from "react";
import { View } from "react-native";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
export default class Home extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* <Topbar /> */}
        <Navbar />
      </View>
    );
  }
}
