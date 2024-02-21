import { useFormikContext } from 'formik';

import ImageInputList from '../ImageInputList';
import ErrorMessage from './ErrorMessage';

interface FormData {
  images: string[];
}

interface FormImagePickerProps {
  name: keyof FormData;
}

export default function FormImagePicker({ name }: FormImagePickerProps) {
  const { errors, setFieldValue, touched, values } =
    useFormikContext<FormData>();

  const imageUris = values[name];

  const handleAdd = (uri: string) => {
    setFieldValue(name, [...imageUris, uri]);
  };

  const handleRemove = (uri: string) => {
    setFieldValue(
      name,
      imageUris.filter((imageUri) => imageUri !== uri)
    );
  };

  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name] as string} visible={touched[name]} />
    </>
  );
}
