import { GroupPosition, Group, Tooltip, Avatar, DefaultMantineColor } from '@mantine/core';

type StatusAvatarProps = {
  color?: DefaultMantineColor;
  tooltip?: string;
  onClick?: () => void;
  position?: GroupPosition;
};
function StatusAvatar({ color = 'green', tooltip, position, onClick }: StatusAvatarProps) {
  return (
    <Group position={position}>
      <Tooltip label={tooltip || 'Default Tooltip'}>
        <Avatar
          radius={'xl'}
          size={'sm'}
          color={color}
          variant="filled"
          className={`
            ${onClick ? 'cursor-pointer' : ''}
          `}
          onClick={onClick}
        >
          &nbsp;
        </Avatar>
      </Tooltip>
    </Group>
  );
}

export default StatusAvatar;
