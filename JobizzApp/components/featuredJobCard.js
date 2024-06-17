// components/FeaturedJobCard.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const FeaturedJobCard = ({ title, company, salary, location, backgroundColor, icon }) => {
  return (
    <View style={[styles.card, { backgroundColor }]}>
      <View style={styles.iconTitleContainer}>
        <Image source={icon} style={styles.icon} />
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.company}>{company}</Text>
        </View>
      </View>
      <View style={styles.bottomRow}>
        <Text style={styles.salary}>{salary}</Text>
        <Text style={styles.location}>{location}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    padding: 20,
    marginRight: 10,
    width: 250,
  },
  iconTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 90,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: "#fff",
  },
  company: {
    fontSize: 14,
    color: "#fff",
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 'auto', 
  },
  salary: {
    fontSize: 14,
   color: "#fff",
  },
  location: {
    fontSize: 12,
    color: "#fff",
  },
});

export default FeaturedJobCard;
