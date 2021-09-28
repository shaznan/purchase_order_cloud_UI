import React from "react";
import "devextreme/dist/css/dx.light.css";

import DataGrid, {
  Column,
  FilterRow,
  HeaderFilter,
  Scrolling,
  Grouping,
  GroupPanel,
  Pager,
  Paging,
  ColumnChooser,
} from "devextreme-react/data-grid";

const formData = {
  orderID: "001",
  customer: "shaznan",
  purchaseOrder: "A002",
  goodsOrderReceived: "goofd",
  delivery: "delivery",
  order: "order",
  salesOrder: "salesorder",
  externalOrderNo: "externalorder",
};

function GlassServ() {
  return (
    <div>
      <h1>Data Grid</h1>
      <DataGrid
        id="gridContainer"
        columnsAutoWidth="true"
        columnHidingEnabled={true}
        height="25rem"
        width="auto"
        dataSource={formData}
        keyExpr="orderID"
        showBorders={true}>
        <Grouping contextMenuEnabled={true} expandMode="rowClick" />
        <GroupPanel visible={true} emptyPanelText="Invoice overview" />
        <FilterRow visible={true} />
        <HeaderFilter visible={false} />
        <Scrolling mode="infinite" />
        <Pager
          allowedPageSizes={[1]}
          showInfo={true}
          showNavigationButtons={true}
          showPageSizeSelector={true}
          visible={true}
        />
        <Paging defaultPageSize={8} />
        <ColumnChooser enabled={true} mode="select" />
        <Column
          allowGrouping={false}
          dataField="orderID"
          width={130}
          caption="orderID"
        />
        <Column dataField="customer" caption="customer" />
        <Column dataField="purchaseOrder" />
        <Column dataField="goodsOrderReceived" dataType="date" />
        <Column dataField="delivery" format="currency" />
        <Column dataField="order" format="currency" />
        <Column dataField="salesOrder" format="currency" />
        <Column dataField="externalOrderNo" format="currency" />
      </DataGrid>
    </div>
  );
}

export default GlassServ;
