import React, { useState } from 'react';
import ErrorIcon from '@mui/icons-material/Error';

import { FormWrapper } from '../../../components/forms';
import { TitlePassword, SubtitlePassword } from '../../../components/titles';
import { StyledPasswordInput } from '../../../components/textFields';
import { PassDescWrapper, PassAlertWrapper } from '../../../components/wrappers';
import { PassDescList } from '../../../components/lists';
import { PassSubmitButton } from '../../../components/buttons';

const regExpression = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[#$^+=!*()@%&_?.-])";

const PasswordForm: React.FC = () => {
    const [pass, setPass] = useState<string>('');
    const [confirmationPass, setConfimationPass] = useState<string>('');
    const [validErrFlag, setValidErrFlag] = useState<boolean>(false);
    const [sameErrFlag, setSameErrFlag] = useState<boolean>(false);

    const validationCheck = (password: string) => {
        setPass(password);
        if (password.toLowerCase().includes("qwerty") || password.toLowerCase().includes("123456")) {
            setValidErrFlag(true);
        }
        let regex = new RegExp(regExpression);
        password.match(regex) ? setValidErrFlag(false) : setValidErrFlag(true);
    }

    const sameCheck = (confirmationPassword: string) => {
        setConfimationPass(confirmationPassword);
        confirmationPassword === pass ? setSameErrFlag(false) : setSameErrFlag(true);
    }

    return (
        <>
            <TitlePassword>Пароль</TitlePassword>
            <SubtitlePassword>Придумайте новый пароль</SubtitlePassword>
            <FormWrapper>
                <StyledPasswordInput
                    label="Придумайте пароль*"
                    error={validErrFlag ? true : false}
                    helperText={validErrFlag ? "Слабый пароль!" : ""}
                    onChange={e => validationCheck(e.target.value)}
                    value={pass}
                />
                <StyledPasswordInput
                    label="Повторите пароль*"
                    error={sameErrFlag ?  true : false}
                    helperText={sameErrFlag ? "Пароли не совпадают!" : ""}
                    onChange={e => sameCheck(e.target.value)}
                    value={confirmationPass}
                />
                <PassDescWrapper>
                    <p style={{fontWeight: 'bold'}}>Пароль должен содержать:</p>
                    <PassDescList>
                        <li>латинские буквы</li>
                        <li>1 заглавную латинскую букву</li>
                        <li>цифры от 0-9</li>
                        <li>символы (#$^+=!*()@%&_?-.)</li>
                        <li>запрет последовательности букв (qwerty), цифр (123456)</li>
                    </PassDescList>
                </PassDescWrapper>
                <PassAlertWrapper>
                    <ErrorIcon style = {{width:"25", height: "25"}}/>
                    <div>
                        Введенный пароль будет являться паролем для выпущенной ЭЦП.
                        <br/>Запомните введенные данные!
                    </div>
                </PassAlertWrapper>
                <PassSubmitButton
                    disabled = {validErrFlag || sameErrFlag}
                >
                    Подтвердить
                </PassSubmitButton>
            </FormWrapper>
        </>
    )
}

export default PasswordForm;