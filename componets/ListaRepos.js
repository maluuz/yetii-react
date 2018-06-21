import React from "react";
import { List, ListItem } from "react-native-elements";
import { View, ScrollView, Text } from "react-native";
import { withNavigation } from "react-navigation";

export class ListRepos extends React.Component {
  render() {
    if (this.props.lista != undefined) {
      return (
        <ScrollView>
          <List>
            {this.props.lista.map((item, i) => (
              <ListItem
                key={i}
                title={item.html_url.slice(19)}
                subtitle={item.description}
                onPress={() =>
                  this.props.navigation.navigate("Details", {
                    contributorsURL: item.contributors_url
                  })
                }
                leftIcon={{ name: item.icon }}
              />
            ))}
          </List>
        </ScrollView>
      );
    } else
      return (
        <View>
          <Text>~~</Text>
        </View>
      );
  }
}
export default withNavigation(ListRepos);
