import React, { FC } from 'react';

// посмотреть на типы в своей визуальной архитектуре

interface Props {
    width?: string;
    height?: string;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    disabled?: boolean;
    compact?: boolean;
    uppercase?: boolean;
    state?: 'default' | 'hover';
    leftIcon?: boolean;
    rightIcon?: boolean
    borderRadius?: string;
    color?: string;
    variant?: 'filled' | 'outlined' | 'subtle';
    onClick: () => void;
    children: React.ReactNode;
}

const Button: FC<Props> =
    ({
        children,
        width,
        height,
        size,
        disabled,
        compact,
        uppercase,
        state,
        leftIcon,
        rightIcon,
        borderRadius,
        color,
        variant,
        onClick
    }) => {
        return (
            <button
                style={{ width, height }}
                onClick={onClick}>
                {children}</button>
        )
    }

export default Button;