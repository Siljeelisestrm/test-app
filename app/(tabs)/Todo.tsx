import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const Explore = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { key: `${tasks.length}`, task }]);
      setTask('');
    }
  };

  const removeTask = (key) => {
    setTasks(tasks.filter(task => task.key !== key));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ToDo List</Text>
      <TextInput
        style={styles.input}
        placeholder="Add a new task"
        value={task}
        onChangeText={setTask}
      />
      <Button title="Add Task" onPress={addTask} />
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <View style={styles.taskContainer}>
            <Text style={styles.task}>{item.task}</Text>
            <TouchableOpacity onPress={() => removeTask(item.key)}>
              <Text style={styles.removeTask}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  list: {
    marginTop: 16,
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  task: {
    fontSize: 16,
  },
  removeTask: {
    color: 'red',
  },
});

export default Explore;