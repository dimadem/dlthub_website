import React, { FC } from 'react'

// рамка с черной обводкой для компонентов внутри

interface Props {
    children: React.ReactNode;
}

const Frame: FC<Props> = ({ children }) => {
    return (
        <div className="frame">
            {children}
        </div>
    )
}

export default Frame;