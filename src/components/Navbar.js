import * as React from "react";
import { BottomNavigation, Text, View } from "react-native-paper";
import Signup from "../pages/Signup";
import Coursel from "../components/Corousel";
import Profil from "../pages/Profile";
const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

export default class Navbar extends React.Component {
  state = {
    index: 0,
    routes: [
      {
        key: "profile",
        title: "Profile",
        icon: "person",
        color: "green"
      },
      {
        key: "albums",
        title: "Repo",
        icon: "assignment",
        color: "#009688"
      },
      {
        key: "recents",
        title: "Recents",
        icon: "history",
        color: "#795548"
      }
    ]
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    profile: Profil,
    albums: Coursel,
    recents: RecentsRoute
  });

  render() {
    return (
      <BottomNavigation
        barStyle={{ backgroundColor: "white" }}
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}
