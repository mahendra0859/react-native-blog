import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const BlogPostform = ({ header, button, onSubmit, initialValue }) => {
  const [title, setTitle] = useState(initialValue.title),
    [content, setContent] = useState(initialValue.content);
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.headerStyle}>{header}</Text>
      <Text style={styles.textStyle}>Enter Title:</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.viewStyle}
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <Text style={styles.textStyle}>Enter Content:</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.viewStyle}
        value={content}
        onChangeText={text => setContent(text)}
      />
      <Button title={button} onPress={() => onSubmit(title, content)} />
    </View>
  );
};
BlogPostform.defaultProps = {
  initialValue: { title: "", content: "" }
};
const styles = StyleSheet.create({
  viewStyle: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
    padding: 5
  },
  textStyle: { padding: 5, fontWeight: "bold" },
  headerStyle: { fontSize: 30, fontWeight: "bold", textAlign: "center" }
});
export default BlogPostform;
