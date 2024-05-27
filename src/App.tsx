import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icons from './components/Icons';

export default function App() {
  const [isData, setIsData] = React.useState(Array(9).fill(''));
  return (
    <View style={styles.components}>
      {isData.map((item, index) => {
        return (
          <View key={index}>
            <Icons name={item} />
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  components: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 90,
  },
  item: {
    width: '33.33%',
  },
});
