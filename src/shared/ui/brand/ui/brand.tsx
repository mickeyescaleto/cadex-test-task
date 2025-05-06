import { StyledIcon, StyledIconProps } from './styled-icon';

type BrandProps = StyledIconProps;

export function Brand({ ...props }: BrandProps) {
  return (
    <StyledIcon {...props}>
      <path d="M0 0H100V0C100 13.2548 89.2548 24 76 24H0V0Z" />
      <path d="M0 28H76V28C76 41.2548 65.2548 52 52 52H0V28Z" />
      <path d="M0 56H52V56C52 69.2548 41.2548 80 28 80H0V56Z" />
    </StyledIcon>
  );
}
