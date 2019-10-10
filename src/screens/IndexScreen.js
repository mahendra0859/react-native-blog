import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity
} from "react-native";
// import BlogContext from "../context/BlogContext";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const IndexScreen = () => {
  const { state, addBlogToPost, deleteBlogPost } = useContext(Context);
  return (
    <View>
      <Button title="Add Blog" onPress={addBlogToPost} />
      <FlatList
        data={state}
        keyExtractor={item => item.title}
        renderItem={({ item }) => (
          <View style={styles.blogViewStyle}>
            <Text style={styles.blogTitleStyle}>
              {item.title} - {item.id}
            </Text>
            <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
              <Feather style={styles.iconstyle} name="trash" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  blogViewStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    borderColor: "gray",
    borderBottomWidth: 1
  },
  blogTitleStyle: {
    fontSize: 18
  },
  iconstyle: { fontSize: 24 }
});

export default IndexScreen;
