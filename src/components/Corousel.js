import React, { Component } from "react";
import { View, StyleSheet, ScrollView, Dimensions } from "react-native";
//import { Constants } from 'expo';
import Card from "../components/Card";

const { width } = Dimensions.get("window");

export default class App extends Component {
  state = {
    data: [
      {
        id: 1,
        title: "M Ilham Sabar",
        gambar:
          "https://cdn.pixabay.com/photo/2016/06/18/17/42/image-1465348_1280.jpg"
      },
      {
        id: 2,
        title: "M Ikram Sabar",
        gambar:
          "https://cdn.pixabay.com/photo/2016/06/18/17/42/image-1465348_1280.jpg"
      }
    ]
  };
  componentDidMount() {
    setTimeout(() => {
      this.scrollView.scrollTo({ x: -30 });
    }, 1); // scroll view position fix
  }

  render() {
    return (
      <ScrollView
        ref={scrollView => {
          this.scrollView = scrollView;
        }}
        style={styles.container}
        //pagingEnabled={true}
        horizontal={false}
        decelerationRate={0}
        snapToInterval={width - 60}
        snapToAlignment={"center"}
        contentInset={{
          top: 0,
          left: 30,
          bottom: 0,
          right: 30
        }}
      >
        {/* <View style={styles.view} /> */}
        {/* <View style={styles.view2} /> */}
        {/* <View style={styles.view} /> */}
        {/* <View style={styles.view2} /> */}
        {/* <View style={styles.view} /> */}

        {this.state.data.map((obj, index) => (
          <Card style={styles.card} key={index} data={obj} />
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  view: {
    marginTop: 100,
    backgroundColor: "blue",
    width: width - 80,
    margin: 10,
    height: 200,
    borderRadius: 10
    //paddingHorizontal : 30
  },
  view2: {
    marginTop: 100,
    backgroundColor: "red",
    width: width - 80,
    margin: 10,
    height: 200,
    borderRadius: 10
    //paddingHorizontal : 30
  },
  card: {
    margin: 10,
    backgroundColor: "blue",
    width: width - 80,
    borderRadius: 10
  }
});
