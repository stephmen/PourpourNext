import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';

const styledBy = (property, mapping) => (props) => mapping[props[property]];

const styles = {
    root: {  
    //   font-size: 4rem,
      borderRadius: 0,
      border: 0,
      color: 'red',
    },
  };
  const StyledMenu = withStyles(styles)(({ classes, ...other }) => (
    <Menu className={classes.root} {...other} />
  ));
  const StyledMenuItem = withStyles(styles)(({ classes, ...other }) => (
    <MenuItem className={classes.root} {...other} />
  ));


export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
      <img src="Iconemenu.png" alt="nav"/>
      </Button>
      <StyledMenu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem onClick={handleClose}>Spectacles</StyledMenuItem>
        <StyledMenuItem onClick={handleClose}>Disques</StyledMenuItem>
        <StyledMenuItem onClick={handleClose}>Affiches</StyledMenuItem>
        <StyledMenuItem onClick={handleClose}>Photos</StyledMenuItem>
        <StyledMenuItem onClick={handleClose}>Histoire</StyledMenuItem>
        <StyledMenuItem onClick={handleClose}>Presse</StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
