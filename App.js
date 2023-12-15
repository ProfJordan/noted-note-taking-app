import React, { useState } from 'react';
import {
 View,
 Text,
 StyleSheet,
 TextInput,
 Button,
 ScrollView,
} from 'react-native';

const App = () => {
 const [note, setNote] = useState('');
 const [notes, setNotes] = useState([]);

 const addNote = () => {
    if (note.trim() === '') {
      alert('Note cannot be empty.');
      return;
    }
    setNotes([...notes, note]);
    setNote('');
 };

 const deleteNote = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
 };

 return (
    <View style={styles.container}>
      <Text style={styles.title}>Notes</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter note..."
        value={note}
        onChangeText={setNote}
      />
      <Button title="Add Note" onPress={addNote} />
      <ScrollView style={styles.scrollView}>
        {notes.map((note, index) => (
          <View key={index} style={styles.note}>
            <Text style={styles.noteText}>{note}</Text>
            <Button
              title="Delete"
              color="red"
              onPress={() => deleteNote(index)}
            />
          </View>
        ))}
      </ScrollView>
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 50,
 },
 title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
 },
 input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
 },
 note: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
 },
 noteText: {
    flex: 1,
    fontSize: 16,
 },
 scrollView: {
    flex: 1,
    marginBottom: 20,
 },
});

export default App;