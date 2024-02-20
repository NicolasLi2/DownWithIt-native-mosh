import { Formik } from 'formik';

interface AppFormProps {
  initialValues: object;
  onSubmit: (values: object) => void;
  validationSchema: object;
  children: React.ReactNode;
}

export default function AppForm({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}: AppFormProps) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
}
