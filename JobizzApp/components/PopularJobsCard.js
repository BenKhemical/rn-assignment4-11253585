// components/PopularJobCard.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const PopularJobCard = ({ title, company, salary, location, icon }) => {
  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <Image source={icon} style={styles.icon} />
        <View style={styles.titleCompany}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.company}>{company}</Text>
        </View>
        <View style={styles.salaryLocation}>
          <Text style={styles.salary}>{salary}</Text>
          <Text style={styles.location}>{location}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  titleCompany: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  company: {
    fontSize: 14,
    color: 'gray',
  },
  salaryLocation: {
    alignItems: 'flex-end',
  },
  salary: {
    fontSize: 16,
    color: 'black',
    marginBottom: 10,
  },
  location: {
    fontSize: 12,
    color: 'gray',
  },
});

export default PopularJobCard;
