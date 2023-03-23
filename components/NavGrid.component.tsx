import GlassCard from '@/components/ui/card.ui';
import { Grid, useMantineTheme, createStyles } from '@mantine/core';
import List from './List';
import defaultData from '../public/default.data.json';
import { IJsonNavigationGrid } from '../types/types';
import { useElementSize } from '@mantine/hooks';

const useStyles = createStyles((theme) => ({

}))

export default function NavGrid() {
    const theme = useMantineTheme();

    // add styles
    const { classes, cx } = useStyles();

    const { ref, width, height } = useElementSize();

    // navData - массив из 4 элементов || потом увеличить до 8
    const navigationData = defaultData.navigationGrid.slice(0, 4);

    // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
    //! ширина и высота элемента
    console.log(width, height)

    return (
        <Grid ref={ref} align={"center"} justify={"center"} h={"90vh"}>
            <List
                items={navigationData}
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
