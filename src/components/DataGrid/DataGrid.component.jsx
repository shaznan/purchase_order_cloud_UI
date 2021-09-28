import React, { Fragment } from "react";

import TabPanel, { Item } from "devextreme-react/tab-panel";
import { SimpleItem } from "devextreme-react/form";
import GlassServices from "./GlassServices";

function DataGrid() {
  return (
    <Fragment>
      <TabPanel>
        <Item title="Items" icon="floppy"></Item>
        <Item title="Glass Services" icon="comment">
          <GlassServices />
        </Item>
      </TabPanel>
    </Fragment>
  );
}

export default DataGrid;
