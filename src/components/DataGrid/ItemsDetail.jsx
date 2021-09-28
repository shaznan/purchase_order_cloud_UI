import React from "react";

import DataGrid, { Column } from "devextreme-react/data-grid";

import ArrayStore from "devextreme/data/array_store";
import DataSource from "devextreme/data/data_source";

function ItemDetail(props) {

    //call data from API
  const items = [
    {
      ID: 3,
      Itemtype: "Service",
      ItemTitle: "Central/GPO Cutouts",
      Description2: "Central/GPO",
      Height: "",
      Measure: "Flat",
      Method: "A/R",
      UnitQty: "1.00",
      TotalQty: "10.00",
      Sqm: "10.00",
      Price: "0.00",
      Tax: "10",
      LineTotal: "0.00",
      MarkGlass: "Central GPO Cut",
      PriceType: "",
      ItemID: 1,
    },
    {
      ID: 4,
      Itemtype: "Service",
      ItemTitle: "ARGON FILLED",
      Description2: "ARGON FILL",
      Height: "",
      Measure: "Flat",
      Method: "A/R",
      UnitQty: "1.00",
      TotalQty: "10.00",
      Sqm: "10.00",
      Price: "0.00",
      Tax: "10",
      LineTotal: "0.00",
      MarkGlass: "ARGON FILLED",
      PriceType: "",
      ItemID: 2,
    },
  ];

  function getItems(key) {
    return new DataSource({
      store: new ArrayStore({
        data: items,
        key: "ID",
      }),
      filter: ["ItemID", "=", key],
    });
  }

  const dataSource = getItems(props.data.key);

  return (
    <div>
      <DataGrid
        id="grid-container"
        dataSource={dataSource}
        keyExpr="ID"
        showBorders={true}>
        <Column dataField="Itemtype" width={70} caption="ItemType" />
        <Column dataField="ItemTitle" />
        <Column dataField="Description2" />
        <Column dataField="Height" width={170} />
        <Column dataField="Method" width={125} />
        <Column dataField="UnitQty" dataType="date" />
        <Column dataField="TotalQty" dataType="date" />
        <Column dataField="Sqm" dataType="Price" />
        <Column dataField="Price" dataType="Price" />
        <Column dataField="Tax" dataType="Price" />
        <Column dataField="LineTotal" dataType="Price" />
        <Column dataField="MarkGlass" dataType="Price" />
        <Column dataField="PriceType" dataType="Price" />
        {/* <MasterDetail enabled={false} component={NestedTemplate} /> */}
      </DataGrid>
    </div>
  );
}

export default ItemDetail;
