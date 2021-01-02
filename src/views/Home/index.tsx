import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect, ConnectedProps } from 'react-redux';

import { updateSession } from '../../redux/actions';

interface RootState {
  system: Object,
}

const mapState = (state: RootState) => ({
  system: state.system,
});

const mapDispatch = { updateSessionAction: updateSession };

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App = ({ system, updateSessionAction }: Props): JSX.Element => (
  <View style={styles.container}>
    <Text>{JSON.stringify(system)}</Text>
    <Button onPress={() => updateSessionAction({ loggedIn: true, session: '', userName: '' })} title="Overide Session" />
    <StatusBar />
  </View>
);

export default connector(App);
