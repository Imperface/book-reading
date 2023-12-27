import { Footer } from 'components/Footer/Footer';
import {Header} from 'components/Header/Header';

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
