//https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/
import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import Link from 'next/link'

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">
        Disques
        </a>
        <Link href="/photos">
      <a href="/">
        Photos
        </a>
        </Link>
      <Link href="/historique">
      <a href="/">
        Histoire
      </a>
      </Link>
      <Link href="/presse">
      <a href="/">
        Presse
        </a>
      </Link>
      <a href="/">
        Spectacles
      </a>
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;