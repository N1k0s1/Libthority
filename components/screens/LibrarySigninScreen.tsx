import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

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

      <View style={styles.footer} pointerEvents="none">
        <Text style={styles.footerText}>
          A Libthority product. About: built and maintained by Libthority.
        </Text>
        <Text style={styles.footerText}>© {new Date().getFullYear()} Libthority. All rights reserved.</Text>
      </View>

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
  footer: {
    position: 'absolute',
    bottom: 12,
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  footerText: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 12,
    textAlign: 'center',
  },
});
