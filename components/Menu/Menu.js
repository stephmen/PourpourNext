import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">
        Spectacles
      </a>
      <a href="/">
        Disques
        </a>
      <a href="/">
        Affiches
        </a>
      <a href="/">
        Photos
        </a>
      <a href="/">
        Histoire
        </a>
      <a href="/">
        Presse
        </a>
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;