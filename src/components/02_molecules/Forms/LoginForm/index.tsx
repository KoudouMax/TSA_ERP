import * as React from 'react';
import * as yup from 'yup';
import { Formik, Form, FormikHelpers } from 'formik';
import {Button, TextField} from '../../../01_atoms';
import {useHistory} from 'react-router-dom'

import { Stack, IStackTokens, IStackItemStyles } from '@fluentui/react/lib/Stack';

import {loginUser} from '../../../../store/auth/actions'
import {useDispatch} from 'react-redux';

interface LoginFormValues {
    username: string;
    password: string;
  }

const initialValues: LoginFormValues = {
    username: '',
    password: '',
}

const LoginSchema = yup.object().shape({
    username: yup.string()
      .required('Le nom d\'utilisateur est requis *'),
    password: yup.string()
      .required('Vous devez rentrer votre mot de passe *'),
  });

const stackTokens = { childrenGap: 15 };

const LoginForm: React.FC<{}> = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    const handleSumit = (values: LoginFormValues) => {
        console.log(values)
        dispatch( loginUser(values, history) )
    }

    return(
        <Formik
            initialValues={initialValues}
            validationSchema={LoginSchema}
            onSubmit={(
            values: LoginFormValues,
            { setSubmitting }: FormikHelpers<LoginFormValues>
            ) => {
                handleSumit(values)
                setSubmitting(false);
            }}
        >{({ handleSubmit }) => (
            <Form>
                <Stack tokens={stackTokens}>
                    <TextField name='username' type='text' />
                    <TextField name='password' type='password' canRevealPassword/>
                    <Button text="Se connecter" onClick={handleSubmit} primary />
                </Stack>
            </Form>
        )}
        </Formik>
    )
}

export default LoginForm;