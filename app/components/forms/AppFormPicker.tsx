import { useFormikContext } from 'formik';

import AppPicker from '../AppPicker';
import ErrorMessage from './ErrorMessage';

interface FormData {
  category: string;
}

interface AppFormPickerProps {
  items: any[];
  name: keyof FormData;
  placeholder: string;
  width?: string;
}

export default function AppFormPicker({
  items,
  name,
  placeholder,
  width,
}: AppFormPickerProps) {
  const { errors, setFieldValue, touched, values } =
    useFormikContext<FormData>();

  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
