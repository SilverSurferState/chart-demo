import { StyleSheet, Text, View, Dimensions, Pressable, TextInput} from 'react-native';
import { LineChart } from "react-native-chart-kit";
import React, { useState } from 'react';


export default function App() {
  const [data, setData] = useState([80, 75, 90, 95, 75, 30]);
  const [number, setNumber] = useState(0);

  return <>
    <View style={styles.container}>
      <LineChart
    data={{
      labels: ["Johannes", "Toon", "Floo", "Ward", "Fouad", "Umberto"],
      datasets: [
        {
          data: data,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        },
        {
          data: [
            10, 20, 40, 10, 30, 60
          ]
        }

      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={220}
    yAxisLabel=""
    yAxisSuffix="%"
    chartConfig={{
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "#fb8c00",
      backgroundGradientTo: "#ffa726",
      decimalPlaces: 0,
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
  />
    </View>
    <View style={styles.container}>
    <TextInput
        style={styles.input}
        onChangeText={setNumber}
        value={Number}
        placeholder="Voer een cijfer in"
      />
    </View>
    <View>
    <Pressable
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: pressed ? '#6c757d' : '#007bff',
        },
      ]}
      onPress={() => setData([...data, number ])}
    >
      <Text style={styles.text}>Voeg toe!</Text>
    </Pressable>
    </View>
    </>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: '#fff',
    fontSize: 18,
  },
  container: {
    margin: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
});
