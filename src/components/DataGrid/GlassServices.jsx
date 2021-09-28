import React from "react";

import DataGrid, { Column, MasterDetail } from "devextreme-react/data-grid";

import ItemDetail from "./ItemsDetail";

//Call data from API
const stocks = [
  {
    ID: 1,
    StockLink: "10.38CC",
    Description1: "Clear comfortplus Laminated 10.38mm",
    Width: "1000",
    Height: "2000",
    LineQtyInPanel: "10",
    LineQtyInVolume: "20",
    LineNote: "",
    LN: "1",
  },
  {
    ID: 2,
    StockLink: "10.38B",
    Description1: "Bronze Tinted Laminated",
    Width: "1000",
    Height: "1000",
    LineQtyInPanel: "10",
    LineQtyInVolume: "10",
    LineNote: "",
    LN: "2",
  },
];

function GlassServices() {
  return (
    <div>
      <DataGrid
        id="grid-container"
        dataSource={stocks}
        keyExpr="ID"
        showBorders={true}>
        <Column dataField="StockLink" width={70} caption="StockLink" />
        <Column dataField="Description1" />
        <Column dataField="Width" />
        <Column dataField="Height" width={170} />
        <Column dataField="LineQtyInPanel" width={125} />
        <Column dataField="LineQtyInVolume" dataType="date" />
        <Column dataField="LineNote" dataType="date" />
        <Column dataField="LN" dataType="date" />
        <MasterDetail
          enabled={true}
          component={ItemDetail}
          //   autoExpandAll={true}
        />
      </DataGrid>
    </div>
  );
}

export default GlassServices;
