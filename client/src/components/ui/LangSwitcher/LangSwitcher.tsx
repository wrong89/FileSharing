import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button, { ButtonTheme } from '../Button/Button';

const LangSwitcher = () => {
    const { i18n } = useTranslation();
    const [prevLanguage, setPrevLanguage] = useState<string>(i18n.language);

    const changeLanguage = () => {
        const currentLanguage = prevLanguage;

        for (let i = 0; i < languages.length; i++) {
            if (languages[i] !== currentLanguage) {
                i18n.changeLanguage(languages[i]);
                setPrevLanguage(languages[i]);
                break;
            }
        }
    };

    return (
        <Button theme={ButtonTheme.BACKGROUND_INVERTED} onClick={changeLanguage}>
            {prevLanguage}
        </Button>
    );
};

export default LangSwitcher;
