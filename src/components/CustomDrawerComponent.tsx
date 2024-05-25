import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const CustomDrawerContent = (props: any) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.imageContainer}>
        <Image 
          source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/unimate-f1630.appspot.com/o/DSC_3883.JPG?alt=media&token=ffebee26-4d2c-4986-85ec-396832b05347' }}
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