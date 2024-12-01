import { classNames } from '@/lib/classNames/classNames';
import SettingsIcon from '@assets/settings-icon-outlined.svg?react';
import { FC, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ThemeSwitcher from '../ThemeSwither/ThemeSwitcher';
import Button, { ButtonSize, ButtonTheme } from '../ui/Button/Button';
import cls from './Settings.module.scss';

interface SettingsProps {
    className?: string;
}

const Settings: FC<SettingsProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const { t } = useTranslation();
    const menuRef = useRef(null);
    const settingsRef = useRef(null);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const menuClosing = (event: MouseEvent) => {
        if (!menuRef.current && !settingsRef.current) return;
        event.preventDefault();

        const { offsetParent } = event.target as HTMLElement;

        if (offsetParent && offsetParent !== menuRef.current && offsetParent !== settingsRef.current) {
            setCollapsed(false);
            window.removeEventListener('click', menuClosing);
        }
    };

    useEffect(() => {
        window.addEventListener('click', menuClosing);
    }, [collapsed]);

    return (
        <>
            <div ref={settingsRef} className={classNames(cls.settings, {}, [])}>
                <div className={cls.settings__inner}>
                    <Button onClick={onToggle} square size={ButtonSize.XL} theme={ButtonTheme.CLEAR}>
                        <SettingsIcon height={40} fill="var(--primary-inverted-background-color)" />
                    </Button>
                </div>

                {collapsed && (
                    <div ref={menuRef} className={cls.settings__menu}>
                        <ul className={cls.settings__list}>
                            <li className={cls.settings__item}>
                                <ThemeSwitcher />
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
};

export default Settings;
