import { Grid, Group } from '@mantine/core';
import { ReactNode } from 'react';

type ContainerInputFileActionIconProps = {
  input: ReactNode;
  iconActions: ReactNode[];
};
function ContainerInputFileActionIcon({ input, iconActions }: ContainerInputFileActionIconProps) {
  return (
    <Grid gutter={'md'} align="end">
      <Grid.Col span={'auto'}>{input}</Grid.Col>
      <Grid.Col span={'content'}>
        <Group spacing={'xs'}>{iconActions.map((item) => item)}</Group>
      </Grid.Col>
    </Grid>
  );
}

export default ContainerInputFileActionIcon;
