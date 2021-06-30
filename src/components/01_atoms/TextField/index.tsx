import * as React from 'react';
import { TextField as DefaultTextField } from '@fluentui/react/lib/TextField';
import { useField } from 'formik';

const TextField: React.FC<any> = (props: any) => {
   // this will return field props for an <input />
   const [field, meta, helpers] = useField(props.name);
   return (
     <>
        <DefaultTextField {...field} {...props}  errorMessage={meta.error && meta.touched && meta.error}/>
     </>
   );
 }

 export default TextField
