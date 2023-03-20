import Image from 'next/image';
import Link from 'next/link';
import List from './List';
import defaultData from '../public/default.data.json';
import { IJsonItem, IJsonNavigationMap } from '../types/types';
import { FaInstagram, FaYoutube, FaWhatsapp, FaPhone, FaMapMarkedAlt, FaTelegram } from 'react-icons/fa';
import { SiEventbrite } from 'react-icons/si';
import { createStyles, Text, Container, ActionIcon, Group, rem } from '@mantine/core';
import logoMono from "../public/logo/logo-white-1080x1080.webp"


const useStyles = createStyles((theme) => ({
    footer: {
        // marginTop: rem(120),
        paddingTop: `calc(${theme.spacing.sm} * 2)`,
        // paddingBottom: `calc(${theme.spacing.xl} * 2)`,
        background: 'transparent',
        borderTop: `${rem(1)} dashed ${theme.white}`,
    },

    logo: {
        maxWidth: rem(200),
        height: 'fit-content',
        [theme.fn.smallerThan('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
    },

    description: {
        marginTop: rem(5),

        [theme.fn.smallerThan('sm')]: {
            marginTop: theme.spacing.xs,
            textAlign: 'center',
        },
    },

    inner: {
        display: 'flex',
        minWidth: '90%',
        justifyContent: 'space-around',
        [theme.fn.smallerThan('sm')]: {
            flexDirection: 'column',
            alignItems: 'center',
        },
    },

    groups: {
        display: 'flex',
        flexWrap: 'wrap',


        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    wrapper: {
        width: rem(160),
    },

    link: {
        display: 'block',
        color: theme.white,
        fontSize: theme.fontSizes.sm,
        paddingTop: rem(3),
        paddingBottom: rem(3),

        '&:hover': {
            textDecoration: 'underline',
        },
    },

    title: {
        fontSize: theme.fontSizes.lg,
        fontWeight: 700,
        textTransform: 'uppercase',
        marginBottom: `calc(${theme.spacing.xs} / 2)`,
        color: theme.white,
    },

    afterFooter: {
        display: 'flex',
        minWidth: '90%',

        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: theme.spacing.xl,
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.xl,
        borderTop: `${rem(1)} dashed ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
            }`,

        [theme.fn.smallerThan('sm')]: {
            flexDirection: 'column',
        },
    },

    social: {
        [theme.fn.smallerThan('sm')]: {
            marginTop: theme.spacing.xs,
        },
    },
}));



const FooterComponent = () => {
    // use Classes hook to access all classes from useStyles
    const { classes } = useStyles();

    return (
        <footer className={classes.footer}>
            <Container className={classes.inner}>
                <div className={classes.logo}>
                    <Image src={logoMono} className={classes.logo} alt='logoDLT' />
                    <Text size="xs" color="white" className={classes.description}>
                        We are a community-driven space, located in the heart of London.
                    </Text>
                </div>
                <div className={classes.groups}>
                    {/* NAVIGATION MAP */}
                    <List items={defaultData.navigationMap} renderItem={(group: IJsonNavigationMap) => (
                        <div className={classes.wrapper} key={group.title}>
                            <Text className={classes.title}>{group.title}</Text>
                            <List items={group.pages} renderItem={(page: IJsonItem) => (
                                <div className={classes.wrapper} key={page.id}>
                                    <Text
                                        key={page.id}
                                        className={classes.link}
                                        component={Link}
                                        href={page.url}
                                    // onClick={(event) => event.preventDefault()}
                                    >
                                        {page.name}
                                    </Text>
                                </div>
                            )} />
                        </div>
                    )} />
                </div>
            </Container>
            <Container className={classes.afterFooter}>
                <Text color='dark' size="sm">
                    © 2023 DLThub | All rights reserved.
                </Text>
                {/* social media links */}
                <Group spacing={0} className={classes.social} position="right" noWrap>
                    <ActionIcon color="dark" size="lg" component={Link} href={defaultData.socialMedia[0].url} target='_blank'>
                        <FaInstagram size={defaultData.socialMedia[0].size} />
                    </ActionIcon>
                    <ActionIcon color="dark" size="lg" component={Link} href={defaultData.socialMedia[1].url} target='_blank'>
                        <FaYoutube size={defaultData.socialMedia[1].size} />
                    </ActionIcon>
                    <ActionIcon color="dark" size="lg" component={Link} href={defaultData.socialMedia[2].url} target='_blank'>
                        <SiEventbrite size={defaultData.socialMedia[2].size} />
                    </ActionIcon>
                    {/* <ActionIcon color="dark" size="lg" component={Link} href={defaultData.socialMedia[3].url} target='_blank'>
                        <FaWhatsapp size={defaultData.socialMedia[3].size} />
                    </ActionIcon>
                    <ActionIcon color="dark" size="lg" component={Link} href={defaultData.socialMedia[4].url} target='_blank'>
                        <FaTelegram size={defaultData.socialMedia[4].size} />
                    </ActionIcon> */}
                </Group>
            </Container>
        </footer >
    )
}

export default FooterComponent;