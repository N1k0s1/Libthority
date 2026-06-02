import React, { useEffect, useMemo, useState } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

import { apiService } from '@/services/ApiService';

interface LibrarySigninBackgroundProps {
  children: React.ReactNode;
}

const defaultBackgroundImageUrl =
  'https://images.squarespace-cdn.com/content/v1/595c349a86e6c029dc2cb08b/1531796849464-D1CE8QPYI63K3WMY76O8/Jason_Mann_Sacredheart_002.jpg?format=1500w';

export default function LibrarySigninBackground({ children }: LibrarySigninBackgroundProps) {
  const [backgroundUrl, setBackgroundUrl] = useState(defaultBackgroundImageUrl);

  useEffect(() => {
    let isMounted = true;

    apiService
      .getBackgroundImage()
      .then((response) => {
        const url = response.data?.url;
        if (isMounted && url) {
          setBackgroundUrl(url);
        }
      })
      .catch(() => {
        // Keep the default background if the config fetch fails.
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const backgroundImage = useMemo(() => ({ uri: backgroundUrl }), [backgroundUrl]);

  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.backgroundImage}
      imageStyle={styles.backgroundImageStyle}
    >
      <View style={styles.overlay}>{children}</View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '110%',
  },
  backgroundImageStyle: {
    opacity: 0.6,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
});
