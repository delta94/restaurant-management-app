import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import color from '@constants/Color';
import PositionItem from '../../components/StartScreen/PositionItem';
import firestore from '@react-native-firebase/firestore';

const data = [
  {
    icon: require('../../assets/shop.png'),
    title: 'Chủ nhà hàng',
    id: 'HostNavigator',
  },
  {
    icon: require('../../assets/chef.png'),
    title: 'Đầu bếp',
    id: 'ChefNavigator',
  },
  {
    icon: require('../../assets/waiter.png'),
    title: 'Nhân viên',
    id: 'EmployeeNavigator',
  },
];

const StartScreen = () => {
  const [name, setName] = useState('');
  useEffect(() => {
    firestore()
      .collection('users')
      .doc('Zh8UqtWBBQvZ4bTwDzef')
      .onSnapshot(documentSnapshot => {
        setName(documentSnapshot.data().name);
      });
  });
  return (
    <SafeAreaView style={styles.safearea}>
      <LinearGradient colors={['#bf3d65', '#e8bbbe', '#fcdfd8', '#ce03fc']}>
        <Text>{name}</Text>
        <View style={styles.container}>
          {data.map((item, index) => (
            <PositionItem {...item} key={index} />
          ))}
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: color.MAIN_COLOR,
  },
  container: {
    backgroundColor: color.MAIN_COLOR,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
