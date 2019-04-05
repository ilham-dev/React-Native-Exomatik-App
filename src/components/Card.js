import * as React from "react";
import { StyleSheet, Dimensions } from "react-native";
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
    <Card.Cover source={{ uri: props.data.gambar }} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
);

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
    borderRadius: 10
  }
});

export default Cards;
