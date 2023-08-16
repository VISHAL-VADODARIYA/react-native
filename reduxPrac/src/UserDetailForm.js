import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const UserDetailForm = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('male'); // Default to 'Male'

  const [age, setAge] = useState('');
  const handleGenderChange = selectedGender => {
    setGender(selectedGender);
  };

  return (
    <View>
      <Text>Primary Passenger Seat No.</Text>
      <View style={styles.inputContainer}>
        <Icon name="person" size={24} color="#D84E55" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
      </View>
      <View style={styles.genderContainer}>
        <Text style={styles.genderLabel}>Gender:</Text>
        <TouchableOpacity
          style={[
            styles.genderButton,
            gender === 'male' && styles.selectedGenderButton,
          ]}
          onPress={() => handleGenderChange('male')}>
          <Icon
            name="male"
            size={24}
            color="#D84E55"
            style={styles.genderIcon}
          />
          <Text style={styles.genderButtonText}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.genderButton,
            gender === 'female' && styles.selectedGenderButton,
          ]}
          onPress={() => handleGenderChange('female')}>
          <Icon name="female" size={24} style={styles.genderIcon} />
          <Text style={styles.genderButtonText}>Female</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.genderButton,
            gender === 'other' && styles.selectedGenderButton,
          ]}
          onPress={() => handleGenderChange('other')}>
          <Icon name="genderless" size={24} style={styles.genderIcon} />
          <Text style={styles.genderButtonText}>Other</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <Icon name="cake" size={24} color="#D84E55" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Age"
          keyboardType="numeric"
          value={age}
          onChangeText={setAge}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  genderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 1,
    paddingHorizontal: 10,
  },

  genderLabel: {
    fontSize: 16,
    marginRight: 10,
  },
  genderButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,

    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 10,
  },
  selectedGenderButton: {
    borderColor: '#D84E55',
    backgroundColor: '#F5D0D1',
  },
  genderIcon: {
    marginRight: 5,
  },
  genderButtonText: {
    fontSize: 16,
  },
});

export default UserDetailForm;
