import React, { FC } from 'react';

interface Props {
    width?: string;
    height?: string;
    children: React.ReactNode;
}

// https://www.youtube.com/watch?v=hv0rNxr1XXk
// https://medium.com/@slavahead/creating-a-beautiful-glass-effect-in-css-580673fd84ea
// https://hype4.academy/tools/glassmorphism-generator
const GlassCard: FC<Props> = ({ children }) => {
    return <div>{children}</div>;
};
export default GlassCard;