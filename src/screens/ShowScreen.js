import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import { EvilIcons } from "@expo/vector-icons";

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context),
    blogPost = state.find(
      blogPost => blogPost.id === navigation.getParam("id")
    );

  return (
    <View style={styles.viewStyle}>
      <Text style={styles.titleStyle}>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};
ShowScreen.navigationOptions = ({ navigation }) => {
  const { navigate } = navigation;
  return {
    headerRight: (
      <TouchableOpacity
        onPress={() => navigate("Edit", { id: navigation.getParam("id") })}
      >
        <EvilIcons name="pencil" size={30} />
      </TouchableOpacity>
    )
  };
};
const styles = StyleSheet.create({
  titleStyle: { fontSize: 20, fontWeight: "bold" },
  viewStyle: { padding: 20 }
});

export default ShowScreen;
