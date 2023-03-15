import GlassCard from '@/components/ui/card.ui';
import { Grid, useMantineTheme, } from '@mantine/core';


export default function NavGrid() {
    const theme = useMantineTheme();

    return (
        <Grid gutter={theme.spacing.lg} align={'center'} h={'100%'}>
            <Grid.Col md={6} sm={12}>
                <GlassCard
                    background={'linear-gradient(to right bottom, rgba(90, 238, 252, 0.3), rgba(90, 238, 252, 0.1))'}
                    rotate={'rotate(0deg)'}
                    header={"EVENTS"}
                />
            </Grid.Col>
            <Grid.Col md={6} sm={12}>
                <GlassCard
                    background={'linear-gradient(to left bottom, rgba(83, 134, 254, 0.3), rgba(83, 134, 254, 0.1))'}
                    rotate={'rotate(0deg)'}
                    header={"OFFERINGS"}
                />
            </Grid.Col>
            <Grid.Col md={6} sm={12}>
                <GlassCard
                    background={'linear-gradient(to right top, rgba(255, 187, 90, 0.3), rgba(255, 187, 90, 0.1))'}
                    rotate={'rotate(0deg)'}
                    header={"SERVICE"}
                />
            </Grid.Col>
            <Grid.Col md={6} sm={12}>
                <GlassCard
                    background={'linear-gradient(to left top, rgba(191, 0, 255, 0.3), rgba(191, 0, 255, 0.1))'}
                    rotate={'rotate(0deg)'}
                    header={"MEMBERSHIP"}
                />
            </Grid.Col>
        </Grid >
    )
}
