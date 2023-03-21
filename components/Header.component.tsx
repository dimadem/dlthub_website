import {
    Header,
    Burger,
    useMantineTheme,
    createStyles,
    Menu,
    Group,
    Center,
    Container,
    rem
} from '@mantine/core';
import defaultData from '../public/default.data.json';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/logo/logo-white-1080x1080.webp';
import { IJsonItem, IJsonNavigationGrid, IJsonNavigationMap, IJsonSocialMedia } from '@/types/types';
import { useDisclosure } from '@mantine/hooks';
import List from './List';

//todo add a logo
//todo add a login button
//todo add a navButtons 
//todo create menu for mobile


const useStyles = createStyles((theme) => ({
    inner: {
        height: rem(60),
        marginTop: rem(15),
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        [theme.fn.smallerThan('sm')]: {
            height: rem(56),
        }
    },
    logo: {
        maxWidth: rem(120),
        marginTop: rem(20),
        height: 'fit-content',

        [theme.fn.smallerThan('sm')]: {
            marginTop: 0,
            maxWidth: rem(50),
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
    },

    links: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    burger: {
        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },

    link: {
        display: 'block',
        lineHeight: 1,
        padding: `${rem(8)} ${rem(12)}`,
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        color: theme.black,
        fontSize: theme.fontSizes.sm,
        fontWeight: 400,

        '&:hover': {
            background: 'radial-gradient(closest-side, rgb(83, 134, 254), transparent)',
            color: theme.white,

        },
    },

    linkLabel: {
        // marginRight: rem(5),
        fontFamily: theme.headings.fontFamily,
        fontWeight: 300,
        fontSize: theme.fontSizes.xl,
    },
}));


const HeaderComponent = () => {
    //add styles
    const { classes } = useStyles();
    const [opened, { toggle }] = useDisclosure(false);

    return (
        <Header height={60} sx={{ background: 'transparent' }} withBorder={false}>
            <Container size={'xl'}>
                <div className={classes.inner}>
                    <Link href='/'>
                        <Image src={logo} className={classes.logo} alt='logoDLT' />
                    </Link>
                    <Group spacing={5} className={classes.links}>
                        {/*//! Render categories */}
                        <List
                            items={defaultData.navigationMap.slice(0, 3)}
                            renderItem={(group: IJsonNavigationMap) => (
                                <Menu
                                    key={group.title}
                                    trigger="hover"
                                    position='bottom-start'
                                    transitionProps={{ transition: 'rotate-right', duration: 150 }}
                                    withinPortal>
                                    <Menu.Target>
                                        <a
                                            href={group.title}
                                            className={classes.link}
                                            onClick={(event) => event.preventDefault()}
                                        >
                                            <Center>
                                                <span className={classes.linkLabel}>{group.title}</span>
                                                {/* <IconChevronDown size="0.9rem" stroke={1.5} /> */}
                                            </Center>
                                        </a>
                                    </Menu.Target>
                                    <Menu.Dropdown>
                                        {/*//! Pages under catogory */}
                                        <List
                                            items={group.pages}
                                            renderItem={(item: IJsonItem) => (
                                                <Menu.Item
                                                    key={item.name}
                                                    component={Link}
                                                    href={item.url}
                                                >
                                                    {item.name}
                                                </Menu.Item>)} />
                                    </Menu.Dropdown>
                                </Menu>
                            )
                            } />
                    </Group>
                    <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
                </div>
            </Container>
        </Header >
    )

}
export default HeaderComponent;