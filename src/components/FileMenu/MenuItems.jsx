import React, { Fragment } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import SaveIcon from "@mui/icons-material/Save";
import ReplayIcon from "@mui/icons-material/Replay";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import PrintIcon from "@mui/icons-material/Print";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import { useStyles } from "./filemenu_styles";

function MenuItems() {
  const classes = useStyles();
  return (
    <Fragment>
      <ul className={classes.filemenu}>
        <li className={classes.filemenu_item}>
          <span className={`${classes.filemenue_icons} ${classes.closebtn}`}>
            <CancelIcon fontSize="small" />
          </span>
          Close
        </li>
        <li className={classes.filemenu_item}>
          <span className={`${classes.filemenue_icons} ${classes.saveBtn}`}>
            <SaveIcon fontSize="small" />
          </span>
          Save
        </li>
        <li className={classes.filemenu_item}>
          <span className={`${classes.filemenue_icons} ${classes.discardBtn}`}>
            <ReplayIcon fontSize="small" />
          </span>
          Discard
        </li>
        <li className={classes.filemenu_item}>
          <span className={`${classes.filemenue_icons} ${classes.openBtn}`}>
            <FolderIcon fontSize="small" />
          </span>
          Open
        </li>
        <li className={classes.filemenu_item}>
          <span className={`${classes.filemenue_icons} ${classes.deleteBtn}`}>
            <DeleteForeverIcon fontSize="small" />
          </span>
          Delete Lines
        </li>
        <li className={classes.filemenu_item}>
          <span className={`${classes.filemenue_icons} ${classes.printBtn}`}>
            <PrintIcon fontSize="small" />
          </span>
          Print
        </li>
        <li className={classes.filemenu_item}>
          <span className={`${classes.filemenue_icons} ${classes.defaultBtn}`}>
            <SettingsSuggestIcon fontSize="small" />
          </span>
          User Default
        </li>
      </ul>
    </Fragment>
  );
}

export default MenuItems;
