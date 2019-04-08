import * as React from "react";
import { BottomNavigation } from "react-native-paper";
import Repo from "../pages/Repo";
import Profil from "../pages/Profile";
import Member from "../pages/Member";

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
        key: "repo",
        title: "Repo",
        icon: "toc",
        color: "#009688"
      },
      {
        key: "member",
        title: "Member",
        icon: "people",
        color: "#795548"
      }
    ]
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    profile: Profil,
    repo: Repo,
    member: Member
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
