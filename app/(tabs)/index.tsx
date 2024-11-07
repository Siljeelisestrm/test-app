import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Card, { styles } from '@/components/Card'

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Silje's dashboard</Text>
      <Card
        title="Card 1"
        content="Content for card 1"
        containerStyle={styles.cardContainer}
        titleStyle={styles.cardTitle}
        contentStyle={styles.cardContent}
      />
      <Card
        title="Card 2"
        content="Content for card 2"
        containerStyle={styles.cardContainer}
        titleStyle={styles.cardTitle}
        contentStyle={styles.cardContent}
      />
    
      <Image
        source={require('@/assets/images/alma.jpeg')}
        style={styles.image}
      />
        <Card
        title="Card 3"
        content="Content for card 3"
        containerStyle={styles.cardContainer}
        titleStyle={styles.cardTitle}
        contentStyle={styles.cardContent}
      />
    </View>
  );
};



export default Dashboard;