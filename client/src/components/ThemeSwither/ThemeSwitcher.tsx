import { Theme, useTheme } from '@/providers/ThemeProvider';
import DarkThemeIcon from '@assets/DarkThemeIcon.svg?react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ToggleSwitch from '../ui/ToggleSwitch/ToggleSwitch';

const ThemeSwitcher = () => {
    const { toggleTheme, theme } = useTheme();
    const [active, setActive] = useState<boolean>(theme === Theme.LIGHT ? false : true);
    const { t } = useTranslation();

    return (
        <ToggleSwitch
            active={active}
            setActive={setActive}
            callback={toggleTheme}
            text={t('dark_theme')}
            icon={DarkThemeIcon}
        />
    );
};
export default ThemeSwitcher;
