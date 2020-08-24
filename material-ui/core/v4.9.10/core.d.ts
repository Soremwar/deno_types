import React from '../../../react/v16.13.1/react.d.ts';
import { Omit } from '../../types/v5.1.0/index.d.ts';
import { StyledComponentProps } from './core/styles.d.ts';
export { StyledComponentProps };

/**
 * @deprecated
 * Import from `@material-ui/types` instead
 *
 * TODO: to remove in v5
 */
export { Omit };

/**
 * All standard components exposed by `material-ui` are `StyledComponents` with
 * certain `classes`, on which one can also set a top-level `className` and inline
 * `style`.
 */
export type StandardProps<C, ClassKey extends string, Removals extends keyof C = never> = Omit<
  C,
  'classes' | Removals
> &
  StyledComponentProps<ClassKey> & {
    className?: string;
    ref?: C extends { ref?: infer RefType } ? RefType : React.Ref<unknown>;
    style?: React.CSSProperties;
  };

export type PaletteType = 'light' | 'dark';
export interface Color {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  A100: string;
  A200: string;
  A400: string;
  A700: string;
}

export namespace PropTypes {
  type Alignment = 'inherit' | 'left' | 'center' | 'right' | 'justify';
  type Color = 'inherit' | 'primary' | 'secondary' | 'default';
  type Margin = 'none' | 'dense' | 'normal';
}

// From index.js
import * as colors from './core/colors.d.ts';

export { colors };
export * from './core/styles.d.ts';

export * from './core/utils.d.ts';

export { default as AppBar } from './core/AppBar.d.ts';
export * from './core/AppBar.d.ts';

export { default as Avatar } from './core/Avatar.d.ts';
export * from './core/Avatar.d.ts';

export { default as Backdrop } from './core/Backdrop.d.ts';
export * from './core/Backdrop.d.ts';

export { default as Badge } from './core/Badge.d.ts';
export * from './core/Badge.d.ts';

export { default as BottomNavigation } from './core/BottomNavigation.d.ts';
export * from './core/BottomNavigation.d.ts';

export { default as BottomNavigationAction } from './core/BottomNavigationAction.d.ts';
export * from './core/BottomNavigationAction.d.ts';

export { default as Box } from './core/Box.d.ts';
export * from './core/Box.d.ts';

export { default as Breadcrumbs } from './core/Breadcrumbs.d.ts';
export * from './core/Breadcrumbs.d.ts';

export { default as Button } from './core/Button.d.ts';
export * from './core/Button.d.ts';

export { default as ButtonBase } from './core/ButtonBase.d.ts';
export * from './core/ButtonBase.d.ts';

export { default as ButtonGroup } from './core/ButtonGroup.d.ts';
export * from './core/ButtonGroup.d.ts';

export { default as Card } from './core/Card.d.ts';
export * from './core/Card.d.ts';

export { default as CardActionArea } from './core/CardActionArea.d.ts';
export * from './core/CardActionArea.d.ts';

export { default as CardActions } from './core/CardActions.d.ts';
export * from './core/CardActions.d.ts';

export { default as CardContent } from './core/CardContent.d.ts';
export * from './core/CardContent.d.ts';

export { default as CardHeader } from './core/CardHeader.d.ts';
export * from './core/CardHeader.d.ts';

export { default as CardMedia } from './core/CardMedia.d.ts';
export * from './core/CardMedia.d.ts';

export { default as Checkbox } from './core/Checkbox.d.ts';
export * from './core/Checkbox.d.ts';

export { default as Chip } from './core/Chip.d.ts';
export * from './core/Chip.d.ts';

export { default as CircularProgress } from './core/CircularProgress.d.ts';
export * from './core/CircularProgress.d.ts';

export { default as ClickAwayListener } from './core/ClickAwayListener.d.ts';
export * from './core/ClickAwayListener.d.ts';

export { default as Collapse } from './core/Collapse.d.ts';
export * from './core/Collapse.d.ts';

export { default as Container } from './core/Container.d.ts';
export * from './core/Container.d.ts';

export { default as CssBaseline } from './core/CssBaseline.d.ts';
export * from './core/CssBaseline.d.ts';

export { default as Dialog } from './core/Dialog.d.ts';
export * from './core/Dialog.d.ts';

export { default as DialogActions } from './core/DialogActions.d.ts';
export * from './core/DialogActions.d.ts';

export { default as DialogContent } from './core/DialogContent.d.ts';
export * from './core/DialogContent.d.ts';

export { default as DialogContentText } from './core/DialogContentText.d.ts';
export * from './core/DialogContentText.d.ts';

export { default as DialogTitle } from './core/DialogTitle.d.ts';
export * from './core/DialogTitle.d.ts';

export { default as Divider } from './core/Divider.d.ts';
export * from './core/Divider.d.ts';

export { default as Drawer } from './core/Drawer.d.ts';
export * from './core/Drawer.d.ts';

export { default as ExpansionPanel } from './core/ExpansionPanel.d.ts';
export * from './core/ExpansionPanel.d.ts';

export { default as ExpansionPanelActions } from './core/ExpansionPanelActions.d.ts';
export * from './core/ExpansionPanelActions.d.ts';

export { default as ExpansionPanelDetails } from './core/ExpansionPanelDetails.d.ts';
export * from './core/ExpansionPanelDetails.d.ts';

export { default as ExpansionPanelSummary } from './core/ExpansionPanelSummary.d.ts';
export * from './core/ExpansionPanelSummary.d.ts';

export { default as Fab } from './core/Fab.d.ts';
export * from './core/Fab.d.ts';

export { default as Fade } from './core/Fade.d.ts';
export * from './core/Fade.d.ts';

export { default as FilledInput } from './core/FilledInput.d.ts';
export * from './core/FilledInput.d.ts';

export { default as FormControl } from './core/FormControl.d.ts';
export * from './core/FormControl.d.ts';

export { default as FormControlLabel } from './core/FormControlLabel.d.ts';
export * from './core/FormControlLabel.d.ts';

export { default as FormGroup } from './core/FormGroup.d.ts';
export * from './core/FormGroup.d.ts';

export { default as FormHelperText } from './core/FormHelperText.d.ts';
export * from './core/FormHelperText.d.ts';

export { default as FormLabel } from './core/FormLabel.d.ts';
export * from './core/FormLabel.d.ts';

export { default as Grid } from './core/Grid.d.ts';
export * from './core/Grid.d.ts';

export { default as GridList } from './core/GridList.d.ts';
export * from './core/GridList.d.ts';

export { default as GridListTile } from './core/GridListTile.d.ts';
export * from './core/GridListTile.d.ts';

export { default as GridListTileBar } from './core/GridListTileBar.d.ts';
export * from './core/GridListTileBar.d.ts';

export { default as Grow } from './core/Grow.d.ts';
export * from './core/Grow.d.ts';

export { default as Hidden } from './core/Hidden.d.ts';
export * from './core/Hidden.d.ts';

export { default as Icon } from './core/Icon.d.ts';
export * from './core/Icon.d.ts';

export { default as IconButton } from './core/IconButton.d.ts';
export * from './core/IconButton.d.ts';

export { default as Input } from './core/Input.d.ts';
export * from './core/Input.d.ts';

export { default as InputAdornment } from './core/InputAdornment.d.ts';
export * from './core/InputAdornment.d.ts';

export { default as InputBase } from './core/InputBase.d.ts';
export * from './core/InputBase.d.ts';

export { default as InputLabel } from './core/InputLabel.d.ts';
export * from './core/InputLabel.d.ts';

export { default as LinearProgress } from './core/LinearProgress.d.ts';
export * from './core/LinearProgress.d.ts';

export { default as Link } from './core/Link.d.ts';
export * from './core/Link.d.ts';

export { default as List } from './core/List.d.ts';
export * from './core/List.d.ts';

export { default as ListItem } from './core/ListItem.d.ts';
export * from './core/ListItem.d.ts';

export { default as ListItemAvatar } from './core/ListItemAvatar.d.ts';
export * from './core/ListItemAvatar.d.ts';

export { default as ListItemIcon } from './core/ListItemIcon.d.ts';
export * from './core/ListItemIcon.d.ts';

export { default as ListItemSecondaryAction } from './core/ListItemSecondaryAction.d.ts';
export * from './core/ListItemSecondaryAction.d.ts';

export { default as ListItemText } from './core/ListItemText.d.ts';
export * from './core/ListItemText.d.ts';

export { default as ListSubheader } from './core/ListSubheader.d.ts';
export * from './core/ListSubheader.d.ts';

export { default as Menu } from './core/Menu.d.ts';
export * from './core/Menu.d.ts';

export { default as MenuItem } from './core/MenuItem.d.ts';
export * from './core/MenuItem.d.ts';

export { default as MenuList } from './core/MenuList.d.ts';
export * from './core/MenuList.d.ts';

export { default as MobileStepper } from './core/MobileStepper.d.ts';
export * from './core/MobileStepper.d.ts';

export { default as Modal } from './core/Modal.d.ts';
export * from './core/Modal.d.ts';

export { default as NativeSelect } from './core/NativeSelect.d.ts';
export * from './core/NativeSelect.d.ts';

export { default as NoSsr } from './core/NoSsr.d.ts';
export * from './core/NoSsr.d.ts';

export { default as OutlinedInput } from './core/OutlinedInput.d.ts';
export * from './core/OutlinedInput.d.ts';

export { default as Paper } from './core/Paper.d.ts';
export * from './core/Paper.d.ts';

export { default as Popover } from './core/Popover.d.ts';
export * from './core/Popover.d.ts';

export { default as Popper } from './core/Popper.d.ts';
export * from './core/Popper.d.ts';

export { default as Portal } from './core/Portal.d.ts';
export * from './core/Portal.d.ts';

export { default as Radio } from './core/Radio.d.ts';
export * from './core/Radio.d.ts';

export { default as RadioGroup } from './core/RadioGroup.d.ts';
export * from './core/RadioGroup.d.ts';

export { default as RootRef } from './core/RootRef.d.ts';
export * from './core/RootRef.d.ts';

export { default as Select } from './core/Select.d.ts';
export * from './core/Select.d.ts';

export { default as Slide } from './core/Slide.d.ts';
export * from './core/Slide.d.ts';

export { default as Slider } from './core/Slider.d.ts';
export * from './core/Slider.d.ts';

export { default as Snackbar } from './core/Snackbar.d.ts';
export * from './core/Snackbar.d.ts';

export { default as SnackbarContent } from './core/SnackbarContent.d.ts';
export * from './core/SnackbarContent.d.ts';

export { default as Step } from './core/Step.d.ts';
export * from './core/Step.d.ts';

export { default as StepButton } from './core/StepButton.d.ts';
export * from './core/StepButton.d.ts';

export { default as StepConnector } from './core/StepConnector.d.ts';
export * from './core/StepConnector.d.ts';

export { default as StepContent } from './core/StepContent.d.ts';
export * from './core/StepContent.d.ts';

export { default as StepIcon } from './core/StepIcon.d.ts';
export * from './core/StepIcon.d.ts';

export { default as StepLabel } from './core/StepLabel.d.ts';
export * from './core/StepLabel.d.ts';

export { default as Stepper } from './core/Stepper.d.ts';
export * from './core/Stepper.d.ts';

export { default as SvgIcon } from './core/SvgIcon.d.ts';
export * from './core/SvgIcon.d.ts';

export { default as SwipeableDrawer } from './core/SwipeableDrawer.d.ts';
export * from './core/SwipeableDrawer.d.ts';

export { default as Switch } from './core/Switch.d.ts';
export * from './core/Switch.d.ts';

export { default as Tab } from './core/Tab.d.ts';
export * from './core/Tab.d.ts';

export { default as Table } from './core/Table.d.ts';
export * from './core/Table.d.ts';

export { default as TableBody } from './core/TableBody.d.ts';
export * from './core/TableBody.d.ts';

export { default as TableCell } from './core/TableCell.d.ts';
export * from './core/TableCell.d.ts';

export { default as TableContainer } from './core/TableContainer.d.ts';
export * from './core/TableContainer.d.ts';

export { default as TableFooter } from './core/TableFooter.d.ts';
export * from './core/TableFooter.d.ts';

export { default as TableHead } from './core/TableHead.d.ts';
export * from './core/TableHead.d.ts';

export { default as TablePagination } from './core/TablePagination.d.ts';
export * from './core/TablePagination.d.ts';

export { default as TableRow } from './core/TableRow.d.ts';
export * from './core/TableRow.d.ts';

export { default as TableSortLabel } from './core/TableSortLabel.d.ts';
export * from './core/TableSortLabel.d.ts';

export { default as Tabs } from './core/Tabs.d.ts';
export * from './core/Tabs.d.ts';

export { default as TextField } from './core/TextField.d.ts';
export * from './core/TextField.d.ts';

export { default as TextareaAutosize } from './core/TextareaAutosize.d.ts';
export * from './core/TextareaAutosize.d.ts';

export { default as Toolbar } from './core/Toolbar.d.ts';
export * from './core/Toolbar.d.ts';

export { default as Tooltip } from './core/Tooltip.d.ts';
export * from './core/Tooltip.d.ts';

export { default as Typography } from './core/Typography.d.ts';
export * from './core/Typography.d.ts';

export { default as useMediaQuery } from './core/useMediaQuery.d.ts';
export * from './core/useMediaQuery.d.ts';

export { default as useScrollTrigger } from './core/useScrollTrigger.d.ts';
export * from './core/useScrollTrigger.d.ts';

export { default as withMobileDialog } from './core/withMobileDialog.d.ts';
export * from './core/withMobileDialog.d.ts';

export { default as withWidth } from './core/withWidth.d.ts';
export * from './core/withWidth.d.ts';

export { default as Zoom } from './core/Zoom.d.ts';
export * from './core/Zoom.d.ts';
