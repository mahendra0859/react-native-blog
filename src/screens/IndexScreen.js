import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
// import BlogContext from "../context/BlogContext";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost, getBlogPost } = useContext(Context);
  const { navigate } = navigation;
  useEffect(() => {
    getBlogPost();
    const listner = navigation.addListener("didFocus", () => {
      getBlogPost();
    });
    return () => {
      listner.remove();
    };
  }, []);
  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={item => item.title}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigate("Show", { id: item.id })}>
            <View style={styles.blogViewStyle}>
              <Text style={styles.blogTitleStyle}> {item.title}</Text>
              <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                <Feather style={styles.iconstyle} name="trash" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
IndexScreen.navigationOptions = ({ navigation }) => {
  const { navigate } = navigation;
  return {
    headerRight: (
      <TouchableOpacity onPress={() => navigate("Create")}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    )
  };
};
const styles = StyleSheet.create({
  blogViewStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    borderColor: "gray",
    borderBottomWidth: 1
  },
  blogTitleStyle: {
    fontSize: 18,
    fontWeight: "bold"
  },
  iconstyle: { fontSize: 24 }
});

export default IndexScreen;
