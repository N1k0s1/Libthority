import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import ConnectionStatus from '@/components/ConnectionStatus';
import DebugPanel from '@/components/DebugPanel';
import LibrarySigninActionButton from '@/components/library/LibrarySigninActionButton';
import LibrarySigninBackground from '@/components/library/LibrarySigninBackground';
import LibrarySigninModals from '@/components/library/LibrarySigninModals';

export default function LibrarySigninScreen() {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignOut, setShowSignOut] = useState(false);

  const handleSignIn = () => {
    console.log('Sign In/Out pressed');
    setShowSignIn(true);
  };

  const handleSignInSubmit = (studentId: string) => {
    console.log('Student ID submitted:', studentId);
  };

  const handleSignInClose = () => {
    setShowSignIn(false);
  };

  const handleSignOutClose = () => {
    setShowSignOut(false);
  };

  return (
    <View style={styles.container}>
      <LibrarySigninBackground>
        <View style={styles.buttonContainer}>
          <LibrarySigninActionButton onPress={handleSignIn} />
        </View>
      </LibrarySigninBackground>

      <LibrarySigninModals
        showSignIn={showSignIn}
        showSignOut={showSignOut}
        onCloseSignIn={handleSignInClose}
        onCloseSignOut={handleSignOutClose}
        onSubmit={handleSignInSubmit}
      />

      <ConnectionStatus position="bottom" />
      <DebugPanel />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
