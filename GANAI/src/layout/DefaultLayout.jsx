import React from 'react';
import Navbar from '../components/navbar.component';
import Footer from '../components/footer.component';
import '../styles/main.scss';

const DefaultLayout = ({ children }) => {
    return (
        <div className="default-layout">
            <Navbar />
            <main className="default-layout__main">{children}</main>
            <Footer />
        </div>
    );
};

export default DefaultLayout;
