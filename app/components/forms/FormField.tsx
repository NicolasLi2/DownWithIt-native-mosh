import { useFormikContext } from 'formik';

import AppTextInput from '../TextInput';
import ErrorMessage from './ErrorMessage';

interface FormData {
  email: string;
  password: string;
  price: string;
  title: string;
  description: string;
  name: string;
}

interface AppFormFieldProps {
  name: keyof FormData;
  [x: string]: any;
}

export default function AppFormField({
  name,
  width,
  ...otherProps
}: AppFormFieldProps) {
  const { setFieldTouched, handleChange, errors, touched } =
    useFormikContext<FormData>();
  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        width={width}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
