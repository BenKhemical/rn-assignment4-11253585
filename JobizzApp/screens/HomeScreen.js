import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import FeaturedJobCard from '../components/FeaturedJobs';
import PopularJobCard from '../components/PopularJobs';

import searchIcon from '../assets/icon.png';
import filterIcon from '../assets/filter.png'; 

import jobIcon1 from '../assets/fb.png';
import jobIcon2 from '../assets/google.png';
import jobIcon3 from '../assets/microsoft.png';
import jobIcon4 from '../assets/amazon.png';
import jobIcon5 from '../assets/uber.png';
import jobIcon6 from '../assets/Apple1.png';
import jobIcon7 from '../assets/burger.png';
import jobIcon8 from '../assets/b.png';
import jobIcon9 from '../assets/sportify.png';
import jobIcon10 from '../assets/netflix.png';
import jobIcon11 from '../assets/cola.png';
import jobIcon12 from '../assets/adobe.png';

const HomeScreen = ({ route }) => {
  const { name, email } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerText}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
        <Image source={require('../assets/profile-pic.png')} style={styles.profilePic} />
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.searchContainer}>
          <Image source={searchIcon} style={styles.searchIcon} />
          <TextInput style={styles.searchInput} placeholder="Search a job or position" />
        </View>
        <TouchableOpacity onPress={() => {}} style={styles.filterButton}>
          <Image source={filterIcon} style={styles.filterIcon} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Featured Jobs</Text>
            <TouchableOpacity onPress={() => { }}>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal>
            <FeaturedJobCard
              title="Software Engineer"
              company="Facebook"
              salary="$180,000"
              location="Accra, Ghana"
              backgroundColor="#4169E1"
              icon={jobIcon1}
            />
            <FeaturedJobCard
              title="Data Scientist"
              company="Google"
              salary="$160,000"
              location="New York, USA"
              backgroundColor="#00008B"
              icon={jobIcon2}
            />
            <FeaturedJobCard
              title="Project Manager"
              company="Microsoft"
              salary="$150,000"
              location="San Francisco, USA"
              backgroundColor="#8A2BE2"
              icon={jobIcon3}
            />
            <FeaturedJobCard
              title="UX Designer"
              company="Amazon"
              salary="$140,000"
              location="Seattle, USA"
              backgroundColor="#5F9EA0"
              icon={jobIcon4}
            />
            <FeaturedJobCard
              title="Backend Developer"
              company="Uber"
              salary="$130,000"
              location="Chicago, USA"
              backgroundColor="#FF6347"
              icon={jobIcon5}
            />
            <FeaturedJobCard
              title="Product Designer"
              company="Apple"
              salary="$200,000"
              location="Cupertino, USA"
              backgroundColor='#FFA500'
              icon={jobIcon6}
            />
          </ScrollView>
        </View>
        <View>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Popular Jobs</Text>
            <TouchableOpacity onPress={() => { }}>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>
          <View>
            <PopularJobCard
              title="Jr Executive"
              company="Burger King"
              salary="$96,000/y"
              location="Los Angeles, US"
              icon={jobIcon7}
            />
            <PopularJobCard
              title="Product Manager"
              company="Beats"
              salary="$84,000/y"
              location="Florida, US"
              icon={jobIcon8}
            />
            <PopularJobCard
              title="Marketing Specialist"
              company="Spotify"
              salary="$90,000/y"
              location="Miami, US"
              icon={jobIcon9}
            />
            <PopularJobCard
              title="Business Analyst"
              company="Netflix"
              salary="$110,000/y"
              location="San Jose, US"
              icon={jobIcon10}
            />
            <PopularJobCard
              title="HR Manager"
              company="Coca Cola"
              salary="$120,000/y"
              location="Spintex, Accra"
              icon={jobIcon11}
            />
            <PopularJobCard
              title="Software Developer"
              company="Adobe"
              salary="$105,000/y"
              location="Tema, Accra"
              icon={jobIcon12}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
    marginTop: 70,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    marginBottom: 40,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 10,
  },
  headerText: {
    flexDirection: 'column',
    flex: 1, 
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
    color: 'gray',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    marginBottom: 40,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1, 
    borderWidth: 0,
    borderRadius: 15,
    paddingHorizontal: 30,
    backgroundColor: '#F2F2F3',
    padding:5,
  },
  searchIcon: {
    width: 20,
    height: 20,
    tintColor: 'gray',
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },
  filterButton: {
    padding: 15,
    backgroundColor: '#F2F2F3',
    borderRadius: 10,
    marginLeft: 10,
  },
  filterIcon: {
    width: 20,
    height: 20,
    tintColor: 'gray',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop:40,
  },
  seeAllText: {
    fontSize: 16,
    color: 'gray',
    fontWeight: 'bold',
    marginTop:40,
  },
});

export default HomeScreen;
