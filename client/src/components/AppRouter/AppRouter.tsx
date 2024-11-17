import { routeConfig } from '@/config/routeConfig/routeConfig';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Loader from '../ui/Loader/Loader';

const AppRouter = () => {
    return (
        <Routes>
            {Object.values(routeConfig).map(({ path, element }) => (
                <Route
                    key={path}
                    path={path}
                    element={
                        <Suspense fallback={<Loader />}>
                            <Layout>{element}</Layout>
                        </Suspense>
                    }
                />
            ))}
        </Routes>
    );
};

export default AppRouter;
