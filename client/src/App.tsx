import AppRouter from '@providers/router/ui/AppRouter';
import { classNames } from './lib/classNames/classNames';

function App() {
    return (
        <div className={classNames('app', {}, [])}>
            <AppRouter />
        </div>
    );
}

export default App;
