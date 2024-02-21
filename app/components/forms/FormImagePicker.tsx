import { useFormikContext } from 'formik';

import ImageInputList from '../ImageInputList';
import ErrorMessage from './ErrorMessage';

interface FormData {
  [key: string]: string[];
}

interface FormImagePickerProps {
  name: string;
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
      <ErrorMessage error={errors[name]?.[0]} visible={touched[name]} />
    </>
  );
}
