import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface LibrarySigninActionButtonProps {
  onPress: () => void;
  label?: string;
}

export default function LibrarySigninActionButton({
  onPress,
  label = 'Library Sign-In/Out',
}: LibrarySigninActionButtonProps) {
  return (
    <TouchableOpacity style={styles.signButton} onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  signButton: {
    backgroundColor: '#335E7A',
    paddingHorizontal: 60,
    paddingVertical: 90,
    borderRadius: 12,
    minWidth: 400,
    shadowColor: '#000',
    opacity: 0.8,
  },
  buttonText: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
