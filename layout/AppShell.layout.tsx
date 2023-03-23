import React, { FC } from 'react';
import { AppShell } from '@mantine/core';
import HeaderComponent from '../components/Header.component';
import FooterComponent from '../components/Footer.component';


interface Props {
    children: React.ReactNode;
}

const AppShellLayout: FC<Props> = ({ children }) => {
    return (
        <AppShell
            padding="md"
            header={<HeaderComponent />}
            footer={<FooterComponent />}
            sx={{
                border: '5px solid black',
            }}
        >
            {children}
        </AppShell >
    );
};

export default AppShellLayout;