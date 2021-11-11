import React from 'react';
import { Link } from 'react-router-dom';

import { SubheaderWrapper, SubheaderElement } from './style.module';
import { LogoWrapper } from '../../../components/images';
import { subheaders } from './subheaders';

const Subheader: React.FC = () => {
    return (
        <SubheaderWrapper>
            {
                subheaders.map((subheaderElement, key) => {
                    return (
                        <Link to={subheaderElement.href} style={{textDecoration: 'none', color: 'inherit'}}>
                            <SubheaderElement key={key}>
                                <LogoWrapper src={subheaderElement.img} alt={subheaderElement.alt}/>
                                <p>{subheaderElement.name}</p>
                            </SubheaderElement>
                        </Link>
                    )
                })
            }
        </SubheaderWrapper>
    )
}

export default Subheader;