import React from "react";
import {
  FlatList,
  ActivityIndicator,
  Text,
  View,
  ScrollView
} from "react-native";
import { List, ListItem } from "react-native-elements";
import { withNavigation } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";

export class ListUsers extends React.Component {
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
        <View style={{ alignItems: "center", marginTop: 5 }}>
          <Icon name="md-people" size={30}>
            <Text> Contributors </Text>
          </Icon>
        </View>
        <View>
          <ScrollView>
            <List containerStyle={{ marginBottom: 20 }}>
              {this.state.dataSource.map((item, i) => (
                <ListItem
                  key={i}
                  roundAvatar
                  avatar={{ uri: item.avatar_url }}
                  title={item.login}
                  subtitle={item.html_url}
                  onPress={() =>
                    this.props.navigation.navigate("InfoCard", {
                      profileURL: item.url
                    })
                  }
                />
              ))}
            </List>
          </ScrollView>
        </View>
      </View>
    );
  }
}
export default withNavigation(ListUsers);
