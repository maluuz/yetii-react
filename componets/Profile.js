import React from "react";
import {
  FlatList,
  ActivityIndicator,
  Text,
  View,
  ScrollView,
  StyleSheet
} from "react-native";
import { List, ListItem, Avatar, Divider } from "react-native-elements";
import { withNavigation } from "react-navigation";

export class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    return fetch(this.props.url)
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson
          },
          function() {}
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Avatar
            xlarge
            rounded
            source={{ uri: this.state.dataSource.avatar_url }}
            activeOpacity={0.7}
          />
        </View>

        <View style={styles.container}>
          <Text style={{ padding: 30 }}>
            <Text style={{ fontWeight: "bold" }}>Nombre: </Text>
            <Text>
              {" "}
              {this.state.dataSource.name}
              {"\n"}
            </Text>
            <Text style={{ fontWeight: "bold" }}>Bio: </Text>{" "}
            <Text>
              {" "}
              {this.state.dataSource.bio}
              {"\n"}
            </Text>
            <Text style={{ fontWeight: "bold" }}>Public repos: </Text>
            <Text>
              {" "}
              {this.state.dataSource.public_repos}
              {"\n"}
            </Text>
            <Text style={{ fontWeight: "bold" }}>Location: </Text>{" "}
            <Text>
              {" "}
              {this.state.dataSource.location}
              {"\n"}
            </Text>
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#DED7D6",
    backgroundColor: "#DED7D6"
  }
});
export default Profile;
