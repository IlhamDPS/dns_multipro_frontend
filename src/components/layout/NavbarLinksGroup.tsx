import { useState } from 'react';
import { Group, Box, Collapse, ThemeIcon, UnstyledButton, createStyles, rem } from '@mantine/core';
import { IconCalendarStats, IconChevronRight } from '@tabler/icons-react';
import { useRouter } from 'next/router';
import { LinksGroupProps } from '@/interface/link_group_props';
import { isSideMenuActive } from '@/utils/function';

const useStylesParent = createStyles((theme, { isActive, hasLinks }: { isActive: boolean; hasLinks: boolean }) => {
  return {
    control: {
      fontWeight: 500,
      display: 'block',
      width: '100%',
      padding: `${theme.spacing.xs} ${theme.spacing.md}`,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
      backgroundColor: isActive && !hasLinks ? theme.colors.green[0] : 'transparent',
      fontSize: theme.fontSizes.sm,
      '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      },
    },

    chevron: {
      transition: 'transform 200ms ease',
    },
  };
});

const useStylesChildren = createStyles((theme, { isActive }: { isActive: boolean }) => {
  return {
    link: {
      fontWeight: 500,
      display: 'block',
      textDecoration: 'none',
      padding: `${theme.spacing.xs} ${theme.spacing.md}`,
      paddingLeft: rem(31),
      marginLeft: rem(30),
      fontSize: theme.fontSizes.sm,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
      borderLeft: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]}`,
      backgroundColor: isActive ? theme.colors.green[0] : 'transparent',
      '&:hover': {
        cursor: 'pointer',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      },
    },
  };
});

function LinksGroupChildren({ link, label }: { link: string; label: string }) {
  const { push, pathname } = useRouter();
  const isActive = isSideMenuActive({
    currentPath: pathname,
    link: link,
  });

  const { classes } = useStylesChildren({ isActive });

  return (
    <div key={link} className={classes.link} onClick={() => push(link)}>
      {label}
    </div>
  );
}

export function LinksGroup({ icon: Icon, label, link, initiallyOpened, links }: LinksGroupProps) {
  const hasLinks = Array.isArray(links) && links.length > 0;

  const { push, pathname } = useRouter();
  const [opened, setOpened] = useState(hasLinks || initiallyOpened || false);

  const isActive = isSideMenuActive({
    currentPath: pathname,
    link: link || '',
  });
  const { classes } = useStylesParent({ isActive, hasLinks });

  const items = (hasLinks ? links : []).map((link) => (
    <LinksGroupChildren key={link.link} label={link.label} link={link.link} />
  ));

  return (
    <>
      <UnstyledButton onClick={() => setOpened((o) => !o)} className={classes.control}>
        <Group
          position="apart"
          spacing={0}
          onClick={() => {
            if (link) {
              push(link);
            }
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <ThemeIcon variant="light" size={30} color="green">
              <Icon size="1.1rem" />
            </ThemeIcon>
            <Box ml="md">{label}</Box>
          </Box>
          {hasLinks && (
            <IconChevronRight
              className={classes.chevron}
              size="1rem"
              stroke={1.5}
              style={{
                transform: opened ? `rotate(90deg)` : 'none',
              }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
}

const mockdata = {
  label: 'Releases',
  icon: IconCalendarStats,
  links: [
    { label: 'Upcoming releases', link: '/' },
    { label: 'Previous releases', link: '/' },
    { label: 'Releases schedule', link: '/' },
  ],
};

export function NavbarLinksGroup() {
  return (
    <Box
      sx={(theme) => ({
        minHeight: rem(220),
        padding: theme.spacing.md,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
      })}
    >
      <LinksGroup {...mockdata} />
    </Box>
  );
}
