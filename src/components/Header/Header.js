import React from 'react'
import { Menu, Search, User } from 'react-feather'
import styled from 'styled-components/macro'

import { QUERIES } from '../../constants'

import Button from '../Button'
import Logo from '../Logo'
import MaxWidthWrapper from '../MaxWidthWrapper'

const Header = () => {
  return (
    <HeaderWrapper>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <DesktopActionGroup>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </DesktopActionGroup>
        <Logo />
        <SubscribeGroup>
          <Button>Subscribe</Button>
          <SubscribeLink>Already a subscriber?</SubscribeLink>
        </SubscribeGroup>
      </MainHeader>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  position: relative;
`

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.desktopAndUp} {
    display: none;
  }
`

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`

const DesktopActionGroup = styled(ActionGroup)`
  display: none;
  @media ${QUERIES.desktopAndUp} {
    display: flex;
  }
`

const SubscribeGroup = styled.div`
  display: none;

  @media ${QUERIES.desktopAndUp} {
    position: relative;
    display: revert;
    /* display: flex;
    flex-direction: column;
    align-items: center; */
    justify-self: end;
    /* gap: 8px; */
  }
`

const SubscribeLink = styled.a`
  position: absolute;
  width: 100%;
  margin-top: 8px;
  text-align: center;
  text-decoration: underline;
  font-family: var(--font-family-serif);
  font-style: italic;
  font-size: ${14 / 16}rem;
  color: var(--color-gray-900);
`

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    margin-top: 48px;
    margin-bottom: 72px;
  }

  @media ${QUERIES.desktopAndUp} {
    display: grid;
    align-items: center;
    justify-content: revert;
    grid-template-columns: 1fr auto 1fr;
    margin-top: 16px;
    margin-bottom: 72px;
  }
`

export default Header
