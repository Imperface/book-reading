import { Footer, Header } from 'components';

import { LayoutWrapper } from './LayoutWrapper';

interface Props {
  children: React.ReactElement;
}

export const Layout = ({ children }: Props) => (
  <LayoutWrapper>
    <Header />
    <main>{children}</main>
    <Footer />
  </LayoutWrapper>
);
