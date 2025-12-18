import React from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import PublicRoutes from './routes';
import DefaultLayout from './layout/DefaultLayout';
import AnimationWrapper from './common/page-animation';

const App = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                {PublicRoutes.map((route, index) => {
                    const Page = route.component;
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <DefaultLayout>
                                    <AnimationWrapper
                                        keyValue={route.path}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            ease: 'easeInOut',
                                        }}
                                        className="page-transition"
                                    >
                                        <Page />
                                    </AnimationWrapper>
                                </DefaultLayout>
                            }
                        />
                    );
                })}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </AnimatePresence>
    );
};

export default App;
