import React, { Component } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  Platform
} from "react-native";
//import { Constants } from 'expo';
import Card from "../components/Card";
import { mocks } from "../constants";
import { Block } from "../components";
const { width } = Dimensions.get("window");

export default class App extends Component {
  state = {
    repo: []
  };
  componentDidMount() {
    // setTimeout(() => {
    //   this.scrollView.scrollTo({ x: -20 });
    // }, 1); // scroll view position fix
    this.setState({ repo: this.props.repo });
  }

  render() {
    return (
      <Block>
        <ScrollView
          ref={scrollView => {
            this.scrollView = scrollView;
          }}
          style={styles.container}
          pagingEnabled={true}
          horizontal={false}
          decelerationRate={0}
          snapToInterval={width - 60}
          snapToAlignment={"center"}
          contentInset={{
            ...Platform.select({
              ios: {},
              android: {
                top: 0,
                left: 30,
                bottom: 0,
                right: 30
              }
            })
          }}
        >
          {this.state.repo.map((obj, index) => (
            <Card style={styles.card} key={index} data={obj} />
          ))}
        </ScrollView>
      </Block>
    );
  }
}

App.defaultProps = {
  repo: mocks.repo
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center"
  },
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
    flex: 1,
    ...Platform.select({
      ios: {
        backgroundColor: "blue",
        width: width - 20,
        borderRadius: 10,
        padding: 30
      },
      android: {
        margin: 10,
        backgroundColor: "blue",
        width: width - 80,
        borderRadius: 10
      }
    })
  }
});
