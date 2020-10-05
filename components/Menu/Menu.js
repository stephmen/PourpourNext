//https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/
import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import Link from 'next/link'

const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <Link href="/disques">
      <a href="/" onClick={() => setOpen(!open)}>
        Disques
        </a>
      </Link>
        <Link href="/photos">
      <a href="/" onClick={() => setOpen(!open)}>
        Photos
        </a>
        </Link>
      <Link href="/historique">
      <a href="/" onClick={() => setOpen(!open)}>
        Histoire
      </a>
      </Link>
      <Link href="/presse">
      <a href="/" onClick={() => setOpen(!open)}>
        Presse
        </a>
      </Link>
      <a href="/" onClick={() => setOpen(!open)}>
        Spectacles
      </a>
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;