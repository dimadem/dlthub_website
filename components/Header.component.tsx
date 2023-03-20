import { useState } from 'react';
import {
    Header,
    Burger,
    Box,
    MediaQuery,
    useMantineTheme,
} from '@mantine/core';
import defaultData from '../public/default.data.json';
import Link from 'next/link';
import { IJsonNavigation } from '@/types/types';

//todo add a logo
//todo add a login button
//todo add a navButtons 
//todo create menu for mobile



const HeaderComponent = () => {
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);

    return (
        <Header
            sx={{
                backgroundColor: 'transparent'
            }}
            height={{ base: 50, md: 70 }}
            hidden={!opened}
            p="lg"
            withBorder={true}>
            <Box
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    height: '100%'
                }}>
                <MediaQuery
                    largerThan="sm"
                    styles={{ display: 'none' }}>
                    <Burger
                        opened={opened}
                        onClick={() => setOpened((o) => !o)}
                        size="sm"
                        color={theme.colors.gray[6]}
                        mr="xl"
                    />
                </MediaQuery>
            </Box>
        </Header>
    )

}
export default HeaderComponent;