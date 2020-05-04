import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import normalize from 'react-native-normalize';

import color from '@constants/Color';
import OrderScreen from './OrderScreen';
import PaymentScreen from './PaymentScreen';
import FoodSelectionScreen from './FoodSelectionScreen';
import Header from '@components/Employee/TableDetailScreen/Header';

const foodIcon = require('@assets/food.png');
const selectedFoodIcon = require('@assets/selectionFood.png');
const orderIcon = require('@assets/order.png');
const selectedOrderIcon = require('@assets/selectionOrder.png');
const paymentIcon = require('@assets/payment.png');
const selectedPaymentIcon = require('@assets/selectionPayment.png');

const Tab = createMaterialBottomTabNavigator();

const TableDetailScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#ffffff" />
      <Header />
      <Tab.Navigator labeled={false} barStyle={styles.tabBar}>
        <Tab.Screen
          name="FoodSelectionScreen"
          component={FoodSelectionScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={focused ? styles.activeTab : styles.normalTab}>
                <Image
                  source={focused ? selectedFoodIcon : foodIcon}
                  style={styles.icon}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="OrderScreen"
          component={OrderScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={focused ? styles.activeTab : styles.normalTab}>
                <Image
                  source={focused ? selectedOrderIcon : orderIcon}
                  style={styles.icon}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="PaymentScreen"
          component={PaymentScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={focused ? styles.activeTab : styles.normalTab}>
                <Image
                  source={focused ? selectedPaymentIcon : paymentIcon}
                  style={styles.icon}
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default TableDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    backgroundColor: '#ffffff',
    borderTopWidth: 0.5,
    borderColor: '#ababab',
  },
  normalTab: {
    // paddingVertical: normalize(10),
  },
  activeTab: {
    height: '100%',
    paddingHorizontal: normalize(20),
  },
  icon: {
    width: normalize(25),
    height: normalize(25),
  },
});