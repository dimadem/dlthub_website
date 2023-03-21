import GlassCard from '@/components/ui/card.ui';
import { Grid, useMantineTheme } from '@mantine/core';
import List from './List';
import defaultData from '../public/default.data.json';
import { IJsonNavigationGrid } from '../types/types';
import { useElementSize } from '@mantine/hooks';


export default function NavGrid() {
    const theme = useMantineTheme();
    const { ref, width, height } = useElementSize();

    console.log(width, height)

    return (
        <Grid ref={ref} gutter={theme.spacing.lg} align={'center'} h={'100%'}>
            <List
                items={defaultData.navigationGrid.slice(0, 4)}
                renderItem={(item: IJsonNavigationGrid) => (
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
