import Settings from '../Settings/Settings';
import Logo from '../ui/Logo/Logo';
import cls from './Header.module.scss';

const Header = () => {
    return (
        <header className={cls.header}>
            <div className="container">
                <div className={cls.header__inner}>
                    <Logo />
                    <Settings />
                </div>
            </div>
        </header>
    );
};

export default Header;
