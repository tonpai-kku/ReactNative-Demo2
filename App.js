import React, {
  useState,
} from 'react';
import { 
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
} from 'react-native';


export default function App() {
  const [value, setValue] = useState(0);

  function incrementValue(){
    setValue(value + 1);
  }

  function decrementValue(){
    if(value > 0) {
      setValue(value - 1);
    }
    else {
      Alert.alert(
        "ค่าเป็นลบ",
        "ไม่สามารถนับค่าติดลบได้"
      );
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.txtCounter}>{value}</Text>
      <View style={styles.btnEditCounterContainer}>
        <Button title="บวก" onPress={() => incrementValue() }/>
      </View>
      <View style={styles.btnEditCounterContainer}>
        <Button title="ลบ" onPress={() => decrementValue() }/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  txtCounter: {
    alignSelf: 'center',
    fontSize: 150,
    marginBottom: 10,
  },
  btnEditCounterContainer: {
    marginBottom: 8,
  }
});
