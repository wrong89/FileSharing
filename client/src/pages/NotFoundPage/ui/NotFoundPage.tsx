import { RoutePath } from '@/config/routeConfig/routeConfig';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import cls from './NotFoundPage.module.scss';

const NotFoundPage = () => {
    const { t } = useTranslation();

    return (
        <div className={cls.notfound}>
            <h1 className={cls.notfound__text}>{t('not_found')}</h1>
            <Link className={cls.notfound__link} to={RoutePath.upload}>
                {t('upload_page')}
            </Link>
        </div>
    );
};

export default NotFoundPage;
