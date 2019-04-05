import React, { Component } from "react";
import { Card, Button } from "react-native-paper";
import {
  Image,
  ImageBackground,
  Linking,
  ListView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  Icon,
  View
} from "react-native";
import PropTypes from "prop-types";
import mainColor from "../components/Constant";
import Email from "../components/Email";
import Separator from "../components/Seperator";
import Tel from "../components/Tel";

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#FFF",
    borderWidth: 0,
    flex: 1,
    margin: 0,
    padding: 0
  },
  container: {
    flex: 1
  },
  emailContainer: {
    backgroundColor: "#FFF",
    flex: 1,
    paddingTop: 30
  },
  headerBackgroundImage: {
    paddingBottom: 20,
    paddingTop: 35
  },
  headerContainer: {},
  headerColumn: {
    backgroundColor: "transparent",
    ...Platform.select({
      ios: {
        alignItems: "center",
        elevation: 1,
        marginTop: -1
      },
      android: {
        alignItems: "center"
      }
    })
  },
  placeIcon: {
    color: "white",
    fontSize: 26
  },
  scroll: {
    backgroundColor: "#FFF"
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
    color: "#A5A5A5",
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
  }
});

class Contact extends Component {
  state = {
    data: {
      name: "Darrell Schmeler",
      username: "Leola_VonRueden",
      address: {
        streetA: "Abbott Shoals",
        streetB: "505 Winona Place",
        streetC: "4306 Hudson Street Suite 875",
        streetD: "Suite 489",
        city: "Ginatown",
        state: "Massachusetts",
        country: "Nepal",
        zipcode: "41428-0189",
        geo: {
          lat: "-75.8513",
          lng: "81.3262"
        }
      },
      website: "destany.org",
      bio:
        "Web & Mobile UI/UX designer, Motion designer following the latest ui & ux trends",
      company: {
        name: "Streich, Harber and Hilpert",
        catchPhrase: "Team-oriented hybrid neural-net",
        bs: "user-centric embrace vortals"
      },
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/dvdwinden/128.jpg",
      avatarBackground:
        "https://orig00.deviantart.net/dcd7/f/2014/027/2/0/mountain_background_by_pukahuna-d73zlo5.png",
      tels: [
        { id: 1, name: "Mobile", number: "+66 (089)-928-2134" },
        { id: 2, name: "Work", number: "+41 (112)-435-9887" }
      ],
      emails: [
        { id: 1, name: "Personal", email: "elsie-goodman@mail.com" },
        { id: 2, name: "Work", email: "elsie@work.com" }
      ],
      posts: [
        {
          id: 1,
          words: "cupiditate qui cum",
          sentence: "Ipsum laborum quasi debitis dolores veniam.",
          sentences:
            "Impedit veritatis harum nihil dolores dolorem optio assumenda. Laborum saepe voluptas officia odit. Ut voluptas mollitia mollitia eum autem quisquam qui aut. Et ipsa hic harum molestias et quam qui cum. Sint sit soluta.",
          paragraph:
            "Beatae voluptas ea magni quibusdam dolorem sit aut qui. Dolorem rerum et consequuntur inventore officia excepturi dolore architecto fuga. Quia consequatur asperiores rerum qui corporis dolorum. At harum velit adipisci iste odit modi veniam ut. Deserunt quibusdam velit non ea.",
          image:
            "https://d25tv1xepz39hi.cloudfront.net/2016-12-19/files/foodphotoghacks_image8.jpg",
          createdDate: "2017-11-21T02:33:53.770Z",
          user: {
            name: "Ronaldo",
            username: "Ronaldo.Effertz",
            avatar:
              "https://s3.amazonaws.com/uifaces/faces/twitter/samuelkraft/128.jpg",
            email: "Ronaldo.Effertz.Deckow@hotmail.com"
          }
        },
        {
          id: 2,
          words: "est voluptatum aut",
          sentence: "Omnis omnis aut dolor quaerat sunt et optio.",
          sentences:
            "Nam numquam magni saepe. Deserunt aspernatur dolorem libero soluta sint molestias et sint sed. Maiores id quis assumenda voluptates quos ut saepe officia voluptatem. Ea placeat sed ut. Modi sed earum voluptas cumque unde eum doloribus ipsam.",
          paragraph:
            "Quam aut reprehenderit asperiores aut. Sunt quis aspernatur incidunt. Illo et perferendis ex incidunt eos ut maxime dolorem voluptatem. Qui rem nihil quos cumque eum doloribus. Quae beatae tempore commodi.",
          createdDate: "2017-11-20T18:04:58.858Z",
          user: {
            name: "Markus",
            username: "Markus.Price68",
            avatar:
              "https://s3.amazonaws.com/uifaces/faces/twitter/kikillo/128.jpg",
            email: "Markus.Price68.Dicki@yahoo.com"
          }
        },
        {
          id: 3,
          words: "vitae voluptas quia",
          sentence: "Voluptates dolor ad rem amet voluptas.",
          sentences:
            "Rem ipsum quis. Animi ipsum ut at possimus. Beatae molestiae non odio soluta quidem ut suscipit.",
          paragraph:
            "Veniam veritatis nihil illum rerum et. Temporibus facere sed delectus corporis alias. Et odio aliquid est. Quas sit et quia tempora sit eveniet quam.",
          createdDate: "2017-03-24T10:56:15.461Z",
          image:
            "https://touristmeetstraveler.com/wp-content/uploads/sushi.jpg",
          user: {
            name: "Magali",
            username: "Magali16",
            avatar:
              "https://s3.amazonaws.com/uifaces/faces/twitter/mastermindesign/128.jpg",
            email: "Magali1664@gmail.com"
          }
        }
      ]
    }
    // telDS: new ListView.DataSource({
    //   rowHasChanged: (r1, r2) => r1 !== r2
    // }).cloneWithRows(data.tels),
    // emailDS: new ListView.DataSource({
    //   rowHasChanged: (r1, r2) => r1 !== r2
    // }).cloneWithRows(data.emails)
  };
  onPressPlace = () => {
    console.log("place");
  };
  onPressTel = number => {
    Linking.openURL(`tel:${number}`).catch(err => console.log("Error:", err));
  };
  onPressSms = () => {
    console.log("sms");
  };
  onPressEmail = email => {
    Linking.openURL(`mailto:${email}?subject=subject&body=body`).catch(err =>
      console.log("Error:", err)
    );
  };
  renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <ImageBackground
          style={styles.headerBackgroundImage}
          blurRadius={10}
          source={{
            uri:
              "https://orig00.deviantart.net/dcd7/f/2014/027/2/0/mountain_background_by_pukahuna-d73zlo5.png"
          }}
        >
          <View style={styles.headerColumn}>
            <Image
              style={styles.userImage}
              source={{
                uri:
                  "https://avatars2.githubusercontent.com/u/13794116?s=460&v=4"
              }}
            />
            <Text style={styles.userNameText}>M Ilham Sabar</Text>
            <View style={styles.userAddressRow}>
              <View style={styles.userCityRow}>
                <Text style={styles.userCityText}>Makassar, Indonesia</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  };
  render() {
    return (
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <Card containerStyle={styles.cardContainer}>
            {this.renderHeader()}
            {Separator()}
          </Card>
        </View>
      </ScrollView>
    );
  }
}
export default Contact;