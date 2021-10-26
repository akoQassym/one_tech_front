import React from 'react';

import PasswordForm from './passwordForm/index';
import { OuterPassWrapper } from '../../components/wrappers';

export default function MainFile() {
    return (
        <OuterPassWrapper>  
            <PasswordForm />
        </OuterPassWrapper>
    )
}