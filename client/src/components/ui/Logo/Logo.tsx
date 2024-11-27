import { RoutePath } from '@/config/routeConfig/routeConfig';
import { Link } from 'react-router-dom';
import cls from './Logo.module.scss';

const Logo = () => {
    return (
        <Link className={cls.logo} to={RoutePath.upload}>
            {import.meta.env.VITE_TITLE || 'test'}
        </Link>
    );
};

export default Logo;
