import {
  ScrollView,
  ScrollViewComponent,
  StyleSheet,
  View,
} from 'react-native';
import ImageInput from './ImageInput';
import { useRef } from 'react';

interface ImageInputListProps {
  imageUris?: string[];
  onRemoveImage: (uri: string) => void;
  onAddImage: (uri: string) => void;
}

export default function ImageInputList({
  imageUris = [],
  onRemoveImage,
  onAddImage,
}: ImageInputListProps) {
  const scrollView = useRef<ScrollView>(null);

  return (
    <View>
      {/* Avoid ScrollView covering the whole screen, so wrap it into a View element */}
      <ScrollView
        ref={scrollView}
        horizontal
        onContentSizeChange={() => scrollView.current?.scrollToEnd()}
      >
        <View style={styles.container}>
          {imageUris.map((uri) => (
            <View key={uri} style={styles.image}>
              <ImageInput
                imageUri={uri}
                onChangeImage={() => onRemoveImage(uri)}
              />
            </View>
          ))}
          <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    marginRight: 10,
  },
});
