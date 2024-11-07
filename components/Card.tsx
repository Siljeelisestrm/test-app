import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface CardProps {
  title: string;
  content: string;
  containerStyle?: ViewStyle;
  titleStyle?: TextStyle;
  contentStyle?: TextStyle;
}

const Card: React.FC<CardProps> = ({ title, content, containerStyle, titleStyle, contentStyle }) => {
  return (
    <View style={[styles.card, containerStyle]}>
      <Text style={[styles.cardTitle, titleStyle]}>{title}</Text>
      <Text style={[styles.cardContent, contentStyle]}>{content}</Text>
    </View>
  );
};



export const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardContent: {
    fontSize: 16,
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 16,
    borderRadius: 8,
  },
  cardContainer: {
    backgroundColor: '#e0f7fa',
  },
  
});

export default Card;