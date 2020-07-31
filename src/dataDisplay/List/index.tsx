import React from 'react';
import styled from 'styled-components';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';

import Icon from '../Icon';
import FixedIcon from '../FixedIcon';
import Text from '../Text';

const StyledListItemText = styled(ListItemText)`
  font-family: Averta;
`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 200,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(3),
    },
  })
);

export default function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}>
      <ListItem button>
        <ListItemIcon>
          <Icon size="md" type="assets" />
        </ListItemIcon>
        <StyledListItemText primary="Assets" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <Icon size="md" type="transactionsInactive" />
        </ListItemIcon>
        <ListItemText primary="Transactions" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <Icon size="md" type="addressBook" />
        </ListItemIcon>
        <ListItemText primary="Address Book" />
      </ListItem>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <Icon size="md" type="apps" />
        </ListItemIcon>
        <ListItemText primary="Apps" />
        {open ? (
          <FixedIcon type="chevronUp" />
        ) : (
          <FixedIcon type="chevronDown" />
        )}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon><Icon size="md" type="apps" /></ListItemIcon>
            <ListItemText primary="App 1" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon><Icon size="md" type="apps" /></ListItemIcon>
            <ListItemText primary="App 2" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon><Icon size="md" type="apps" /></ListItemIcon>
            <ListItemText primary="App 3" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <Icon size="md" type="settings" />
        </ListItemIcon>
        <ListItemText primary="Settings" />
        {open ? (
          <FixedIcon type="chevronUp" />
        ) : (
          <FixedIcon type="chevronDown" />
        )}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon><Icon size="md" type="settings" /></ListItemIcon>
            <ListItemText primary="Setting 1" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon><Icon size="md" type="settings" /></ListItemIcon>
            <ListItemText primary="Setting 2" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon><Icon size="md" type="settings" /></ListItemIcon>
            <ListItemText primary="Setting 3" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}
