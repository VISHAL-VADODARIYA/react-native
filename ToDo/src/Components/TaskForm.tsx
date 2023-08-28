import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useMemo, useState} from 'react';
import {Color} from '../utils/Color';
import {windowWidth} from '../utils/Dimensions';
import {RadioButton} from 'react-native-paper';

const TaskForm = () => {
  const [selectedValue, setSelectedValue] = useState<string>('option1');

  const handleRadioPress = (value: string) => {
    setSelectedValue(value);
  };
  const [taskDetail, setTaskDetail] = useState({title: '', discription: ''});
  return (
    <View>
      <View style={styles.taskForm}>
        <View style={styles.bottomBorder}>
          <Text style={styles.fieldTitle}>Task Title</Text>
          <TextInput
            value={taskDetail.title}
            placeholder="Enter Task Name"
            placeholderTextColor={`${Color.white}90`}
            selectionColor={Color.yellow}
            style={styles.inputField}
          />
          <Text style={styles.fieldTitle}>Task Discription</Text>
          <TextInput
            value={taskDetail.discription}
            placeholder="Enter Task Discription"
            placeholderTextColor={`${Color.white}90`}
            selectionColor={Color.yellow}
            style={styles.inputField}
          />
        </View>
        <View style={styles.bottomBorder}>
          <Text style={styles.fieldTitle}>Priority</Text>
          <View style={{flexDirection: 'row'}}>
            <RadioButton.Group
              onValueChange={value => handleRadioPress(value)}
              value={selectedValue}>
              <View style={styles.radioButtonContainer}>
                <RadioButton.Item label="Option 1" value="option1" />
                <RadioButton.Item label="Option 2" value="option2" />
                <RadioButton.Item label="Option 3" value="option3" />
              </View>
            </RadioButton.Group>
          </View>
        </View>

        <View style={styles.buttonView}>
          <TouchableOpacity activeOpacity={0.7} style={styles.saveButton}>
            <Text style={styles.saveText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TaskForm;

const styles = StyleSheet.create({
  taskForm: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  bottomBorder: {
    borderBottomWidth: 1,
    borderBottomColor: Color.white,
  },
  fieldTitle: {
    fontSize: 14,
    color: Color.white,
    fontWeight: 'bold',
  },
  inputField: {
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 10,
    color: Color.white,
    marginBottom: 5,
  },
  buttonView: {flexDirection: 'row-reverse', marginHorizontal: 10},
  saveButton: {
    backgroundColor: Color.white,
    width: windowWidth / 6,
    padding: 10,
    borderRadius: 5,
  },
  saveText: {
    fontSize: 15,
    fontWeight: '700',
    textAlign: 'center',
    color: Color.gray,
  },
  radioButtonContainer: {
    flexDirection: 'column',
  },
});
