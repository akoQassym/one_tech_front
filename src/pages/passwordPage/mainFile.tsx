import React from 'react';

import PasswordForm from './passwordForm/index';
import { OuterPassWrapper } from '../../components/wrappers';

const MainFile: React.FC = () => {
    return (
        <OuterPassWrapper>  
            <PasswordForm />
        </OuterPassWrapper>
    )
}

export default MainFile;