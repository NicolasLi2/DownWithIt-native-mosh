import { useFormikContext } from 'formik';

import AppTextInput from './AppTextInput';
import ErrorMessage from './ErrorMessage';

interface FormData {
  email: string;
  password: string;
}

interface AppFormFieldProps {
  name: keyof FormData;
  [x: string]: any;
}

export default function AppFormField({
  name,
  ...otherProps
}: AppFormFieldProps) {
  const { setFieldTouched, handleChange, errors, touched } =
    useFormikContext<FormData>();
  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
