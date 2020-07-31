import React from 'react';
import styled from 'styled-components';
import Icon from '../Icon';
import Card from '../Card';
import Text from '../Text';
import Divider from '../Divider';
import Identicon from '../../utils/Identicon';
import Button from '../../inputs/Button';
import NestedList from '../List';

const Container = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 54px 1fr;
  grid-template-areas:
    'topbar topbar'
    'sidebar body';

  /* @media (max-width: 400px) {
    grid-template-columns: 1fr;
    grid-template-rows: 54px auto 1fr;
    grid-template-areas:
      'topbar'
      'sidebar'
      'body';
  } */
`;

const Topbar = styled.nav`
  background-color: white;
  box-shadow: 0 2px 4px 0 rgba(212, 212, 211, 0.59);
  border-bottom: 2px solid ${({ theme }) => theme.colors.separator};
  z-index: 999;
  grid-area: topbar;
`;
const Sidebar = styled.aside`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-right: 2px solid ${({ theme }) => theme.colors.separator};
  grid-area: sidebar;
`;

const Body = styled.section`
  margin: 24px 16px;
  grid-area: body;
`;

const WalletInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const IconContainer = styled.div`
  justify-content: space-around;
  align-items: center;
  padding: 8px 0;
`;

const Layout = (): React.ReactElement => (
  <Container>
    <Topbar>Gnosis Logo</Topbar>
    <Sidebar>
      <WalletInfo>
        <IconContainer>
          <Identicon address="thisIsAnExample" size="md" />
        </IconContainer>
        <Icon size="md" type="circleDropdown" />

        <Text size="xl">Safe Name</Text>
        <Text size="sm">x058...DB78</Text>
        <IconContainer>
          <Icon size="sm" type="qrCode" />
          <Icon size="sm" type="copy" />
          <Icon size="sm" type="externalLink" />
        </IconContainer>
        <Button size="lg" color="primary" variant="contained">
          New Transaction
        </Button>
      </WalletInfo>
      <Divider />
      <NestedList />
      <Divider />
      <Text size="sm">Help Center</Text>
    </Sidebar>
    <Body>
      <Text size="lg" color="primary">
        Assets
      </Text>
      <Card>Body</Card>
    </Body>
  </Container>
);

export default Layout;
