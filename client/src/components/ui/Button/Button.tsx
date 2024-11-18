import { classNames } from '@/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC, MouseEvent } from 'react';
import cls from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<ButtonProps> = (props) => {
    const { onClick, children, className = '' } = props;

    const mods: Record<string, boolean> = {
        // [cls.square]: square,
        // [cls[size]]: true,
        // [cls.disabled]: disabled,
    };

    return (
        <button className={classNames(cls.btn, mods, [className])} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
