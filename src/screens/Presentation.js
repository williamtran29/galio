import React from 'react';
import {
  View, StyleSheet, StatusBar, Image,
} from 'react-native';
import { LinearGradient } from 'expo';
// galio components
import { Text, Button, Block, NavBar } from '..';
import theme from '../theme';

const Presentation = props => (
  <Block flex>
    <StatusBar hidden={false} barStyle="light-content" />
    <Block style={styles.navbar}>
      <NavBar transparent leftIconColor={theme.COLORS.WHITE} onLeftPress={() => props.navigation.openDrawer()} />
    </Block>

    <LinearGradient
      colors={['#ad5389', '#3c1053']}
      end={[0.5, 0.9]}
      style={styles.backgroundGradient}
    />
    <View style={styles.container}>
      <Text h2 color={theme.COLORS.WHITE} style={{ marginBottom: 15 }}>
        Check this out
      </Text>
      <Text p center color={theme.COLORS.WHITE} style={{ marginBottom: 30 }}>
        This is created and was created just for your eyes only. Oh yeah, you really want a piece of this cool UI kit.
      </Text>
      <Button size="large" color="transparent" round onPress={() => props.navigation.openDrawer()}>
        Get Started
      </Button>
    </View>
    <Image
      source={{ uri: 'http://pngimg.com/uploads/iphone/iphone_PNG5744.png' }}
      style={{
        width: '100%', height: '100%', position: 'absolute', top: '60%',
      }}
      resizeMethod="resize"
      resizeMode="contain"
    />
  </Block>
);

const styles = StyleSheet.create({
  backgroundGradient: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 0,
  },
  container: {
    width: '100%',
    height: '100%',
    paddingTop: '30%',
    paddingBottom: '30%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingLeft: '10%',
    paddingRight: '10%',
  },
  navbar: {
    top: 0,
    left: 0,
    right: 0,
    zIndex: 9999,
    position: 'absolute',
  },
});

export default Presentation;