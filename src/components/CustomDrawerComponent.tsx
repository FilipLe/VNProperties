import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const CustomDrawerContent = (props: any) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.imageContainer}>
        <Image 
          source={{ uri: 'https://www.shutterstock.com/image-vector/front-view-house-nature-elements-260nw-1938273742.jpg' }}
          style={styles.image}
        />
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  image: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
  },
});

export default CustomDrawerContent;