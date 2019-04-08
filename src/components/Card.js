import * as React from "react";
import { StyleSheet, Dimensions, Platform } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
const { width } = Dimensions.get("window");

const Cards = props => (
  <Card style={styles.card}>
    {/* <Card.Title
      title="Card Title"
      subtitle="Card Subtitle"
      left={props => <Avatar.Icon {...props} icon="folder" />}
    /> */}
    <Card.Content>
      <Title>{props.data.title}</Title>
      <Paragraph>Card content</Paragraph>
    </Card.Content>
    <Card.Cover style={styles.img} source={{ uri: props.data.gambar }} />
  </Card>
);

const styles = StyleSheet.create({
  card: {
    flex: 1,
    ...Platform.select({
      ios: {
        // margin: 1
      },
      android: {
        margin: 10
      }
    }),
    marginTop: 10,
    borderRadius: 10
  }
});

export default Cards;
