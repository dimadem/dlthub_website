import GlassCard from '@/components/ui/card.ui';
import { Grid, useMantineTheme } from '@mantine/core';
import List from './List';
import defaultData from '../public/default.data.json';
import { IJsonNavigation } from '../types/types';


export default function NavGrid() {
    const theme = useMantineTheme();

    return (
        <Grid gutter={theme.spacing.lg} align={'center'} h={'100%'}>
            <List
                items={defaultData.navigation.slice(3, 7)}
                renderItem={(item: IJsonNavigation) => (
                    <Grid.Col md={6} sm={12} key={item.id}>
                        <GlassCard
                            header={item.name}
                            url={item.url}
                            background={item.background}
                            rotate={item.rotate}
                        />
                    </Grid.Col>
                )} />
        </Grid >
    )
}
