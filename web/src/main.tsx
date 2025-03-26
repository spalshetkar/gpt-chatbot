import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './config/routes';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);