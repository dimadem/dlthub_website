import React, { FC } from 'react';
import { Box, Center, Title, useMantineTheme } from '@mantine/core';
import { useHover } from '@mantine/hooks';


interface Props {
    rotate?: string;
    header?: string;
    background?: string;
    children?: React.ReactNode;
}


const GlassCard: FC<Props> = ({ rotate, header, background, children }) => {

    const { hovered, ref } = useHover();

    const theme = useMantineTheme();

    return <Box
        ref={ref}
        h={{
            base: 120,
            xs: 140,
            sm: 180,
            md: 270,
            lg: 300,
            xl: 320
        }}
        bg={background}
        sx={{
            boxShadow: hovered ? theme.shadows.sm : theme.shadows.md,
            backdropFilter: 'blur( 1.5px )',
            borderRadius: '80px',
            border: hovered ? '1px solid rgba( 255, 255, 255, 0.2 )' : '1px solid rgba( 255, 255, 255, 0.18 )',
        }}>
        <Center
            h={{
                base: 120,
                xs: 140,
                sm: 180,
                md: 270,
                lg: 300,
                xl: 320
            }}>
            <Title
                order={hovered ? 1 : 2}
                weight={hovered ? 200 : 100}
                sx={{
                    transform: rotate
                }}>
                {header}
            </Title>
            {children}
        </Center>
    </Box >;
};
export default GlassCard;