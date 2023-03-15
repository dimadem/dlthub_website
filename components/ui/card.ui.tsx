import React, { FC } from 'react';
import { Box } from '@mantine/core';
import { useMantineTheme } from '@mantine/core';


interface Props {
    width?: string;
    height?: string;
    background?: string;
    children?: React.ReactNode;
}

// https://www.youtube.com/watch?v=hv0rNxr1XXk
// https://medium.com/@slavahead/creating-a-beautiful-glass-effect-in-css-580673fd84ea
// https://hype4.academy/tools/glassmorphism-generator
const GlassCard: FC<Props> = ({ background, width, height, children }) => {
    const theme = useMantineTheme();

    return <Box sx={{
        width: width || '100%',
        height: height || '100%',
        background: background,
        boxShadow: theme.shadows.lg,
        backdropFilter: ' blur( 1.5px )',
        borderRadius: '10px',
        border: '1px solid rgba( 255, 255, 255, 0.18 )',
    }}>
        {children}
    </Box >;
};
export default GlassCard;