// #00FFA6 light shades, #E2B44E light accent, #7B75AF main brand colour, #A74494 dark accent, #292E64 dark shades

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
  },
  login: {
    backgroundColor: '#292E64',
    alignItems: 'center',
  },
  newUser: {
    backgroundColor: '#292E64',
    alignItems: 'center',
  },
  text: {
    color: '#F7B626',
    fontSize: 40,
    fontWeight: 'bold',
  },
  placeholderText: {
    color: '#F7B626',
  },
  goalsText: {
    color: '#F7B626'
  },
  titleText: {
    fontSize: 20,
    color: '#F7B626',
    textDecorationLine: 'underline'
  }
});

export { styles };
