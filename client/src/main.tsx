import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';

import '@config/i18n/i18n.ts';
import '@styles/index.scss';
import { ThemeProvider } from './providers/ThemeProvider/index.tsx';

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>
);
