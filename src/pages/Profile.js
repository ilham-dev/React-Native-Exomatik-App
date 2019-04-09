import React, { Component } from "react";
import { Card, Title, Paragraph } from "react-native-paper";
import {
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";
import mainColor from "../components/Constant";
import { Icon } from "react-native-elements";
import { mocks } from "../constants";

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#f2f3f7",
    borderWidth: 0,
    flex: 1,
    margin: 0,
    padding: 0
  },
  container: {
    flex: 1,
    backgroundColor: "#f2f3f7"
  },
  socialIcon: {
    marginLeft: 14,
    marginRight: 14
  },
  socialRow: {
    paddingTop: 14,
    flexDirection: "row"
  },
  emailContainer: {
    backgroundColor: "#FFF",
    flex: 1,
    paddingTop: 30
  },
  headerBackgroundImage: {
    borderRadius: 50,
    paddingBottom: 20,
    paddingTop: 10
  },
  headerContainer: {
    flex: 1,
    backgroundColor: "#f2f3f7"
  },
  headerColumn: {
    backgroundColor: "transparent",
    ...Platform.select({
      ios: {
        alignItems: "center",
        elevation: 1,
        marginTop: -1
      },
      android: {
        marginBottom: 50,
        alignItems: "center"
      }
    })
  },
  placeIcon: {
    color: "white",
    fontSize: 26
  },
  scroll: {
    backgroundColor: "#f2f3f7"
  },
  telContainer: {
    backgroundColor: "#FFF",
    flex: 1,
    paddingTop: 30
  },
  userAddressRow: {
    alignItems: "center",
    flexDirection: "row"
  },
  userCityRow: {
    backgroundColor: "transparent"
  },
  userCityText: {
    color: "#F3F8F2",
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center"
  },
  userImage: {
    borderColor: mainColor,
    borderRadius: 85,
    borderWidth: 3,
    height: 170,
    marginBottom: 15,
    width: 170
  },
  userNameText: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "bold",
    paddingBottom: 8,
    textAlign: "center"
  },
  card: {
    marginTop: -40,
    margin: 10,
    borderRadius: 10
  }
});

export default class Contact extends Component {
  state = {
    profile: []
  };

  componentDidMount() {
    this.setState({ profile: this.props.profile });
  }

  renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <ImageBackground
          style={styles.headerBackgroundImage}
          blurRadius={10}
          borderBottomLeftRadius={10}
          borderBottomRightRadius={10}
          source={{
            uri: this.state.profile.avatarBackground
          }}
        >
          <View style={styles.headerColumn}>
            <Image
              style={styles.userImage}
              source={this.state.profile.avatar}
            />
            <Text style={styles.userNameText}>{this.state.profile.name}</Text>
            <View style={styles.userAddressRow}>
              <View style={styles.userCityRow}>
                <Text style={styles.userCityText}>
                  {this.state.profile.bio}}
                </Text>
              </View>
            </View>
            <View style={styles.socialRow}>
              <View>
                <Icon
                  size={30}
                  type="entypo"
                  color="#2E7DC1"
                  name="facebook-with-circle"
                  onPress={() => console.log("facebook")}
                />
              </View>
              <View style={styles.socialIcon}>
                <Icon
                  size={30}
                  type="entypo"
                  color="#56ACEE"
                  name="twitter-with-circle"
                  onPress={() => console.log("twitter")}
                />
              </View>
              <View>
                <Icon
                  size={30}
                  type="entypo"
                  color="#DD4C39"
                  name="google--with-circle"
                  onPress={() => console.log("google")}
                />
              </View>
            </View>
          </View>
        </ImageBackground>
        <Card style={styles.card}>
          <Card.Content>
            <Title>About</Title>
            <Paragraph>{this.state.profile.about}</Paragraph>
          </Card.Content>
        </Card>
      </View>
    );
  };
  render() {
    return (
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <Card containerStyle={styles.cardContainer}>
            {this.renderHeader()}
          </Card>
        </View>
      </ScrollView>
    );
  }
}

Contact.defaultProps = {
  profile: mocks.profile
};
