import { Grid, Divider } from '@mantine/core';
import { ReactNode } from 'react';

type InputSpanProps = {
  label: ReactNode | string;
  content: ReactNode;
  labelFlex?: number;
  align?: React.CSSProperties['alignContent'];
  withDivider?: boolean;
};
const InputSpan = ({ label, labelFlex = 3, content, align = 'center', withDivider = false }: InputSpanProps) => {
  return (
    <>
      <Grid align={align}>
        <Grid.Col sm={12} lg={labelFlex}>
          {typeof label === 'string' ? (
            <div className="text-sm font-semibold bg-gray-200 rounded-sm py-1 px-2">{label}</div>
          ) : (
            label
          )}
        </Grid.Col>
        <Grid.Col span={'content'}>{content}</Grid.Col>
      </Grid>

      {withDivider && <Divider />}
    </>
  );
};

export default InputSpan;
