import { Header } from '@mantine/core';

interface Props {
    children: React.ReactNode;
}

const HeaderComponent = () => {
    return (
        <Header style={{
            backgroundColor: 'transparent'
        }} height={60} p="xs" withBorder={true}>
            {/* Header content */}
        </Header >
    )

}
export default HeaderComponent;