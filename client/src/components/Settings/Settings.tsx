import { classNames } from '@/lib/classNames/classNames';
import SettingsIcon from '@assets/settings-icon-outlined.svg?react';
import { FC, useEffect, useRef, useState } from 'react';
import ThemeSwitcher from '../ThemeSwither/ThemeSwitcher';
import Button, { ButtonSize, ButtonTheme } from '../ui/Button/Button';
import LangSwitcher from '../ui/LangSwitcher/LangSwitcher';
import cls from './Settings.module.scss';

interface SettingsProps {
    className?: string;
}

const Settings: FC<SettingsProps> = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false);

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
                        <SettingsIcon className={cls.settings__icon} />
                    </Button>
                </div>

                {collapsed && (
                    <div ref={menuRef} className={cls.settings__menu}>
                        <ul className={cls.settings__list}>
                            <li className={cls.settings__item}>
                                <ThemeSwitcher />
                            </li>
                            <li className={cls.settings__item}>
                                {/* <Button>Languages</Button> */}
                                <LangSwitcher />
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
};

export default Settings;
