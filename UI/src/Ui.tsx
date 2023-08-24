import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import AddToDo from './screen/AddToDo';
import {useDispatch, useSelector} from 'react-redux';
import {Data, dataAction} from './ReduxStore/DataSlice';
import {RootState} from './ReduxStore/Store';
import Icon from 'react-native-vector-icons/Entypo';
import Ico from 'react-native-vector-icons/MaterialIcons';

const Ui = () => {
  const selector = useSelector((state: RootState) => state.data.data);

  const RenderTaskData = ({item}: {item: Data}) => {
    const dispatch = useDispatch();
    const EditHandler = (id: string) => {
      const selectedById = selector.find((e: Data) => e.id === id);
    };
    const DeleteHandler = (id: string) => {
      dispatch(dataAction.delete(id));
    };
    return (
      <View style={styles.movieItem}>
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.releaseYear}> {item.discription}</Text>
        </View>
        <View>
          <TouchableOpacity
            key={item.id}
            style={styles.editButton}
            onPress={()=>EditHandler(item.id)}>
            <Text style={styles.Text}>
              <Icon name="edit" size={18} color="#fff" />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            key={item.id}
            style={styles.deleteButton}
            onPress={() => DeleteHandler(item.id)}>
            <Text style={styles.Text}>
              <Ico name="delete" size={18} color="#fff" />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <AddToDo />
      {selector && (
        <FlatList
          data={selector}
          renderItem={({item}) => <RenderTaskData item={item} />}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  movieItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    padding: 12,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  releaseYear: {
    marginTop: 4,
    color: '#666',
  },
  editButton: {
    backgroundColor: '#3498db',
    marginVertical: 2,
    padding: 2,
  },
  deleteButton: {
    backgroundColor: '#e74c3c',
    marginVertical: 2,
    padding: 2,
  },
  Text: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Ui;
