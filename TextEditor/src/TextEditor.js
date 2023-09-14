import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import RNFS from 'react-native-fs';

const TextEditor = () => {
  const [text, setText] = useState('');

  // File path (you can customize this)
  const filePath = RNFS.DocumentDirectoryPath + '/textfile.txt';

  useEffect(() => {
    // Read the text file when the component mounts
    RNFS.readFile(filePath, 'utf8')
      .then((fileText) => setText(fileText))
      .catch((error) => console.error('Error reading file:', error));
  }, []);

  const handleSaveText = () => {
    // Write the text to the file
    RNFS.writeFile(filePath, text, 'utf8')
      .then(() => Alert.alert('File Saved', 'Text has been saved to the file.'))
      .catch((error) => console.error('Error writing file:', error));
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TextInput
        multiline
        style={{ flex: 1, borderWidth: 1, borderColor: 'gray', padding: 8 }}
        value={text}
        onChangeText={(newText) => setText(newText)}
      />
      <Button title="Save" onPress={handleSaveText} />
    </View>
  );
};

export default TextEditor;
