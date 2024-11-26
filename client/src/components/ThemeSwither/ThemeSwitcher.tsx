import { useTheme } from '@/providers/ThemeProvider';
import Button from '../ui/Button/Button';

const ThemeSwitcher = () => {
    const { toggleTheme } = useTheme();

    return <Button onClick={toggleTheme}>Switch</Button>;
};
export default ThemeSwitcher;
