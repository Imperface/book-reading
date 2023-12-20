import { ContainerWrapper } from './Container.styled.ts';
interface Props {
  children: React.ReactElement;
}

export const Container = ({ children }: Props) => (
  <ContainerWrapper>{children}</ContainerWrapper>
);
