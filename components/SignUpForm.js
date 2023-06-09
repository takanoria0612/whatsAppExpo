import React, { useReducer } from 'react';
import Input from '../components/Input';
import SubmitButton from '../components/SubmitButton';
import { Feather, FontAwesome } from '@expo/vector-icons';

import { validateInput } from '../utils/actions/formActions';

const reducer = (state, action) => {
    const { validationResult } = action;
    return {
        ...state,
        formIsValid: validationResult === undefined
    };
}

const initialState = {
    inputValidities: {
        firstName: false,
        lastName: false,
        email: false,
        password: false,
    },
    formIsValid: false
}

const SignUpForm = props => {

    const [formState, dispatchFormState] = useReducer(reducer, initialState);

    const inputChangedHandler = (inputId, inputValue) => {
        const result = validateInput(inputId, inputValue);
        dispatchFormState({ validationResult: result })
    }

    return (
            <>
                <Input
                    id="firstName"
                    label="First name"
                    icon="user-o"
                    iconPack={FontAwesome}
                    onInputChanged={inputChangedHandler}
                    autoCapitalize="none" />

                <Input
                    id="lastName"
                    label="Last name"
                    icon="user-o"
                    iconPack={FontAwesome}
                    onInputChanged={inputChangedHandler}
                    autoCapitalize="none" />

                <Input
                    id="email"
                    label="Email"
                    icon="mail"
                    iconPack={Feather}
                    onInputChanged={inputChangedHandler}
                    keyboardType="email-address"
                    autoCapitalize="none" />

                <Input
                    id="password"
                    label="Password"
                    icon="lock"
                    autoCapitalize="none"
                    secureTextEntry
                    iconPack={Feather}
                    onInputChanged={inputChangedHandler} />
                
                <SubmitButton
                    title="Sign up"
                    onPress={() => console.log("Button pressed")}
                    style={{ marginTop: 20 }}
                    disabled={!formState.formIsValid}/>
            </>
    )
};

export default SignUpForm;