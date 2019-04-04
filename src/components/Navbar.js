import * as React from "react";
import { BottomNavigation, Text, View } from "react-native-paper";
import Signup from "../pages/Signup";
import Coursel from "../components/Corousel";
const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

export default class Navbar extends React.Component {
  state = {
    index: 0,
    routes: [
      {
        key: "music",
        title: "Music",
        icon: "queue-music",
        barColor: "#3F51B5"
      },
      { key: "albums", title: "Albums", icon: "album", barColor: "#009688" },
      { key: "recents", title: "Recents", icon: "history", barColor: "#795548" }
    ]
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    music: Signup,
    albums: Coursel,
    recents: RecentsRoute
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}
