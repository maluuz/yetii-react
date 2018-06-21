import React from "react";
import { View, Text, TextInput } from "react-native";
import { SearchBar } from "react-native-elements";
import { Icon } from "react-native-elements";

export class Buscador extends React.Component {
  constructor() {
    super();
    this.state = { search: "" };
  }

  render() {
    return (
      <View>
        <TextInput
          onChangeText={search => this.setState({ search })}
          onSubmitEditing={() => this.props.onPressSearch(this.state.search)}
          placeholder="Search"
        />
      </View>
    );
  }
}
export default Buscador;
