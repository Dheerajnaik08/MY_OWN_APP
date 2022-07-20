import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import CountDown from 'react-native-countdown-component';

export default class Countdown extends Component{
    render(){
        return(
            <View style={styles.container}>
            <StatusBar style="auto" />
            <CountDown
              until={1200}
              onFinish={() => alert('finished')}
              onPress={() => alert('hello')}
              size={20}
            />
          </View>
        )
    }
    
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });