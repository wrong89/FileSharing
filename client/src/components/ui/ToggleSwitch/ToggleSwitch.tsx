import { classNames } from '@/lib/classNames/classNames';
import { Dispatch, FC, SetStateAction } from 'react';
import Button, { ButtonTheme } from '../Button/Button';
import cls from './ToggleSwitch.module.scss';

interface ToggleSwitchProps {
    active: boolean;
    setActive: Dispatch<SetStateAction<boolean>>;
    icon?: React.VFC<React.SVGProps<SVGSVGElement>>;
    text?: string;
}

const ToggleSwitch: FC<ToggleSwitchProps> = (props) => {
    const { active, setActive, icon: Icon, text } = props;

    const toggleTheme = () => {
        setActive((prev) => !prev);
    };

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            onClick={toggleTheme}
            className={classNames(cls.toggleSwitch__btn, {}, [active ? cls.active : ''])}
        >
            <div className={cls.toggleSwitch__content}>
                {Icon && <Icon className={cls.toggleSwitch__icon} />}
                {text && <div className={cls.toggleSwitch__text}>{text}</div>}
            </div>
            <div className={classNames(cls.toggleSwitch, {}, [active ? cls.active : ''])}>
                <div className={cls.toggleSwitch__circle}></div>
            </div>
        </Button>
    );
};

export default ToggleSwitch;
