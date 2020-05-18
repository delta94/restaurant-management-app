import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import normalize from 'react-native-normalize';

import TableItem from '@components/Host/TableManagementScreen/TableItem';

const TableListScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <TableItem />
      <TableItem />
      <TableItem />
      <TableItem />
      <TableItem />
    </ScrollView>
  );
};

export default TableListScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    padding: normalize(16),
  },
});
