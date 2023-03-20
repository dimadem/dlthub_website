import React, { FC } from 'react';
import { Box, Center, Title, useMantineTheme } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import Link from 'next/link';


interface Props {
    url: string;
    rotate?: string;
    header?: string;
    background?: string;
    children?: React.ReactNode;
}


const GlassCard: FC<Props> = ({ url, rotate, header, background, children }) => {
    const { hovered, ref } = useHover();

    const theme = useMantineTheme();

    return <Box
        component={Link}
        href={url}
        sx={{
            textDecoration: 'none',
            color: 'inherit',
        }}>
        <Box
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
                    weight={hovered ? 600 : 100}
                    sx={{
                        transform: rotate,
                        overflow: 'hidden',
                    }}
                    size={64}>
                    {header}
                </Title>
                {children}
            </Center>
        </Box>
    </Box >
};
export default GlassCard;