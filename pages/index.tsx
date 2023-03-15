import GlassCard from '@/components/ui/card.ui';
import { Container, Grid, Center, useMantineTheme, rem } from '@mantine/core';

const PRIMARY_COL_HEIGHT = rem(300);

//todo make 2 cols 2 rows at the center of screen

export default function Home() {
  const theme = useMantineTheme();

  return (
    <>
      <main className='DltPin'>

        {/* <Container h={rem(400)} size={'xl'}> */}
        <Grid gutter={theme.spacing.xl} justify={'center'} align='center'>
          <Grid.Col md={6} sm={12}>
            <GlassCard background={'rgba(90, 238, 252, 0.15)'} height={PRIMARY_COL_HEIGHT} />
          </Grid.Col>
          <Grid.Col md={6} sm={12}>
            <GlassCard background={'rgba(83, 134, 254, 0.15)'} height={PRIMARY_COL_HEIGHT} />
          </Grid.Col>
          <Grid.Col md={6} sm={12}>
            <GlassCard background={'rgba(255, 187, 90, 0.15)'} height={PRIMARY_COL_HEIGHT} />
          </Grid.Col>
          <Grid.Col md={6} sm={12}>
            <GlassCard background={'rgba(191, 0, 255, 0.15)'} height={PRIMARY_COL_HEIGHT} />
          </Grid.Col>
        </Grid>
        {/* </Container> */}

      </main >
    </>
  )
}
