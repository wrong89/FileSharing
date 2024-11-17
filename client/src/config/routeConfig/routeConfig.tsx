import { NotFoundPage } from '@/pages/NotFoundPage';
import { ReadFilePage } from '@/pages/ReadFilePage';
import { UploadFilePage } from '@/pages/UploadFilePage';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
    UPLOAD = 'upload',
    READ = 'read',
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.UPLOAD]: '/',
    [AppRoutes.READ]: '/read/:fileId',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.UPLOAD]: {
        path: RoutePath.upload,
        element: <UploadFilePage />,
    },
    [AppRoutes.READ]: {
        path: RoutePath.read,
        element: <ReadFilePage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
