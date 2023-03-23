import {
    Header,
    Burger,
    useMantineTheme,
    createStyles,
    Menu,
    Group,
    Center,
    Container,
    rem,
    Transition,
    Paper,
    Text
} from '@mantine/core';
import defaultData from '../public/default.data.json';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/logo/logo-white-1080x1080.webp';
import { IJsonItem, IJsonNavigationGrid, IJsonNavigationMap, IJsonSocialMedia } from '@/types/types';
import { useDisclosure, useHeadroom } from '@mantine/hooks';
import List from './List';
import { useState } from 'react';



const HEADER_HEIGHT = rem(60);

const useStyles = createStyles((theme) => ({
    root: {
        position: 'relative',
        zIndex: 1,
    },

    //закругленные края 
    dropdown: {
        position: 'absolute',
        top: HEADER_HEIGHT,
        left: 0,
        right: 0,
        zIndex: 0,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        borderTopWidth: 0,
        overflow: 'hidden',
        background: theme.white,
        borderRadius: theme.radius.xl,
        padding: theme.spacing.md,
        margin: theme.spacing.xs,
        minHeight: '90vh',
        height: 'fit',

        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },
    dropdownLink: {
        display: 'block',
        lineHeight: 1,
        padding: `${rem(8)} ${rem(12)}`,
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        color: theme.black,
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },

        [theme.fn.smallerThan('sm')]: {
            borderRadius: 0,
            padding: theme.spacing.md,
        },
    },

    linkActive: {
        '&, &:hover': {
            backgroundColor: theme.black,
            color: theme.white,
            borderRadius: theme.radius.xl,
        },
    },

    header: {
        paddingTop: rem(40),
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '100%',

        [theme.fn.smallerThan('sm')]: {
            justifyContent: 'space-between',

        }
    },
    logo: {
        maxWidth: rem(120),
        marginTop: rem(20),
        height: 'fit-content',

        [theme.fn.smallerThan('sm')]: {
            marginTop: 0,
            maxWidth: rem(45),
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
    },

    links: {
        padding: 4,
        background: theme.white,
        borderRadius: theme.radius.xl,
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
            background: theme.black,
            borderRadius: theme.radius.xl,
            color: theme.white,

        },
    },

    linkLabel: {
        // marginRight: rem(5),
        padding: `${rem(8)} ${rem(12)}`,
        fontFamily: theme.headings.fontFamily,
        fontWeight: 300,
        fontSize: theme.fontSizes.xl,
    },
}));


const HeaderComponent = () => {

    // data for menu
    const menuData = defaultData.navigationMap.slice(0, 3);

    // add styles
    const { classes, cx } = useStyles();

    // toggle menu
    const [opened, { toggle, close }] = useDisclosure(false);

    // active link 
    const [active, setActive] = useState(menuData[0].pages[0].url);


    //! https://mantine.dev/hooks/use-headroom/
    const pinned = useHeadroom({ fixedAt: 60 });




    return (
        <Header
            height={HEADER_HEIGHT}
            sx={{ background: 'transparent' }}
            fixed={false}
            withBorder={false}
        // className={classes.root}
        >
            <Container className={classes.header}>

                <Link href='/'>
                    <Image src={logo} className={classes.logo} alt='logoDLT' />
                </Link>

                <Group spacing={5} className={classes.links}>

                    {/*//! Render categories */}
                    <List
                        items={menuData}
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
                                            <span className={classes.linkLabel}>
                                                {group.title}
                                            </span>
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

                {/*//! DROPDOWN MENU */}
                <Burger opened={opened} onClick={toggle} className={classes.burger} size="md" />

                <Transition transition="pop-top-right" duration={200} mounted={opened}>
                    {(styles) => (
                        <Paper className={classes.dropdown} withBorder style={styles}>
                            <List
                                items={defaultData.navigationMap.slice(0, 3)}
                                renderItem={(group: IJsonNavigationMap) => (
                                    <>
                                        <Center>
                                            <span className={classes.linkLabel}>
                                                {group.title}
                                            </span>
                                        </Center>
                                        <List
                                            items={group.pages}
                                            renderItem={(item: IJsonItem) => (
                                                <Text
                                                    key={item.name}
                                                    component={Link}
                                                    href={item.url}
                                                    className={
                                                        cx(classes.dropdownLink,
                                                            {
                                                                [classes.linkActive]: active === item.url
                                                            })
                                                    }
                                                    onClick={(event) => {
                                                        // event.preventDefault();
                                                        setActive(item.url);
                                                        close();
                                                    }}

                                                >
                                                    {item.name}
                                                </Text>
                                            )} />

                                    </>
                                )
                                } />
                        </Paper>
                    )}
                </Transition>
            </Container>
        </Header >
    )

}
export default HeaderComponent;