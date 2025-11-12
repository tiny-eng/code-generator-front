import Header from "./header";
import Footer from "./footer";

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <> 
            <Header />
            <Suspense>
                <Outlet />
            </Suspense>
            <Footer />
        </>
    )
}