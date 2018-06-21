import React from "react";
import { Button, View, Text } from "react-native";
import { createStackNavigator } from "react-navigation"; // Version can be specified in package.json
import Buscador from "./componets/Buscador";
import GitHubSearch from "./componets/GitHubSearch";
import ListRepos from "./componets/ListaRepos";
import { ListUsers } from "./componets/ListUsers";
import Profile from "./componets/Profile";

class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: "Search For a Repo",
    headerStyle: { backgroundColor: "#BDBABA" }
  };
  constructor() {
    super();
    this.state = {
      loading: false,
      videos: []
    };
  }
  onPressSearch = search => {
    this.GTSearch(search);
  };
  GTSearch = search => {
    this.setState({ loading: true });
    GitHubSearch({ term: search }, videos => {
      this.setState({
        loading: false,
        videos: videos
      });
    });
  };

  render() {
    return (
      <View>
        <Buscador onPressSearch={this.onPressSearch} />
        <ListRepos
          lista={this.state.videos}
          style={{ backgroundColor: "powderblue" }}
          navigation={this.props.navigation}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    const contributorsURL = navigation.getParam("contributorsURL", "NO-ID");

    return (
      <View>
        <ListUsers url={contributorsURL} navigation={this.props.navigation}>
          {" "}
        </ListUsers>
      </View>
    );
  }
}

class InfoCardScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    const profileURL = navigation.getParam("profileURL", "NO-ID");
    return (
      <View>
        <Profile url={profileURL} />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    InfoCard: InfoCardScreen
  },
  {
    initialRouteName: "Home"
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
