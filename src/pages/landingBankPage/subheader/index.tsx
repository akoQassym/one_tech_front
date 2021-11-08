import React from 'react';

import { SubheaderWrapper, SubheaderElement } from './style.module';
import { LogoWrapper } from '../../../components/images';
import { subheaders } from './subheaders';

const Subheader: React.FC = () => {
    return (
        <SubheaderWrapper>
            {
                subheaders.map((subheaderElement, key) => {
                    return (
                        <SubheaderElement key={key}>
                            <LogoWrapper src={subheaderElement.img} alt={subheaderElement.alt}/>
                            <p>{subheaderElement.name}</p>
                        </SubheaderElement>
                    )
                })
            }
        </SubheaderWrapper>
    )
}

export default Subheader;