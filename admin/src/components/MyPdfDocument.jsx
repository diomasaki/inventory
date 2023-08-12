import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    padding: 10,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
});

const MyPdfDocument = ({ name }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View>
        <Text style={styles.text}>Hello {name}!</Text>
        <Text>This is your PDF document.</Text>
      </View>
    </Page>
  </Document>
);

export default MyPdfDocument;