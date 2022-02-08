import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>    
    
     <Text>Assignment</Text>
     <div class='card'>
       <h1>Syed Fahar Abbas
         <p><button>19-Arid-1271</button></p>
       </h1>
     </div>
      
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
