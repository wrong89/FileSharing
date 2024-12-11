import { classNames } from '@/lib/classNames/classNames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Button, { ButtonTheme } from '../Button/Button';
import cls from './Copy.module.scss';

interface CopyProps {
    text: string;
    className?: string;
}

const Copy: FC<CopyProps> = ({ text, className = '' }) => {
    const { t } = useTranslation();

    const onClick = async () => {
        try {
            // navigator.clipboard.addEventListener();
            await navigator.clipboard.writeText(text);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <Button onClick={onClick} theme={ButtonTheme.OUTLINE} className={classNames(cls.copy, {}, [className])}>
            {text}
            <div className={cls.copy__text}>{t('copy_text')}</div>
        </Button>
    );
};

export default Copy;
