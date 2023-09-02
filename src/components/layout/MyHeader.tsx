import Image from 'next/image';
import Logo from '@images/logo.png';
import { Anchor, Burger, Container, createStyles, Group, Header, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('xs')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.lg,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}));

interface HeaderSimpleProps {
  links: { link?: string; label: string }[];
  onClickBurger: () => void;
  isOpenedBurger: boolean;
}

function HeaderSimple({ links, onClickBurger, isOpenedBurger }: HeaderSimpleProps) {
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <div
      key={link.label}
      className={cx(classes.link, classes.linkActive)}
      onClick={(event) => {
        event.preventDefault();
      }}
    >
      {link.label}
    </div>
  ));

  return (
    <Header height={{ base: 80 }} p="md">
      <Container className={classes.header} fluid>
        <Anchor href="/">
          <Image src={Logo} alt="Logo" />
        </Anchor>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>

        <Burger opened={isOpenedBurger} onClick={onClickBurger} className={classes.burger} size="sm" />
      </Container>
    </Header>
  );
}

export default HeaderSimple;
