import React from "react";
import "devextreme-react/text-area";
import { useStyles } from "./purchaseForms_styles";
import Form, {
  SimpleItem,
  GroupItem,
  TabbedItem,
  TabPanelOptions,
  EmptyItem,
  Tab,
  ColCountByScreen,
} from "devextreme-react/form";

function Forms() {
  const classes = useStyles();

  function tabRenderStyles(data) {
    //customize form tabs
    return (
      <p
        style={{
          fontSize: "0.8rem",
          margin: 0,
          padding: 0,
        }}>
        {data.title}
      </p>
    );
  }

  //store data in redux
  const dropDownOptions = {
    supplier: ["IGMA", "RootLabs"],
    JobNumber: ["DZ01", "DZ02", "DZ03"],
    orderFor: ["client, supplier"],
    deliveryMethod: ["Pick up", "delivery"],
    salesOrder: ["A001", "A002", "A003", "A004"],
    customer: ["Shaznan", "Nuwan", "Siraj"],
    Branch: ["Borella", "Maradhana", "Bamba", "Dehiwala"],
    Type: ["Stock purchase"],
    RequestedBy: ["Admin 1", "Admin 2", "Admin 3"],
  };

  return (
    <div
      className="form-container"
      style={{ display: "flex", justifyContent: "center", width: "100vw" }}>
      <Form colCount={2} id="form" width="100vw">
        {/* form one */}
        <TabbedItem>
          <TabPanelOptions height="auto" width="auto" />
          <Tab title="Contacts" tabRender={tabRenderStyles}>
            <GroupItem>
              <SimpleItem
                dataField="supplier"
                editorType="dxSelectBox"
                editorOptions={{
                  items: dropDownOptions.supplier,
                  searchEnabled: true,
                  value: "",
                  height: "1.7rem",
                }}
              />

              <GroupItem caption="Address" cssClass={classes.groupItem}>
                <SimpleItem
                  dataField="Address 1"
                  cssClass={classes.item}
                  editorOptions={{ height: "1.7rem" }}
                />
                <SimpleItem
                  dataField="Address 2"
                  cssClass={classes.item}
                  editorOptions={{ height: "1.7rem" }}
                />
                <SimpleItem
                  dataField="Suburb"
                  cssClass={classes.item}
                  editorOptions={{ height: "1.7rem" }}
                />
                <SimpleItem
                  dataField="State"
                  cssClass={classes.item}
                  editorOptions={{ height: "1.7rem" }}
                />
                <SimpleItem
                  dataField="Postal Code"
                  cssClass={classes.item}
                  editorOptions={{ height: "1.7rem" }}
                />
              </GroupItem>
            </GroupItem>
          </Tab>
          <Tab title="Supplier Address" tabRender={tabRenderStyles}></Tab>
          <Tab title="Delivery Adress" tabRender={tabRenderStyles}></Tab>
          <Tab title="Memo" tabRender={tabRenderStyles}></Tab>
          <Tab title="Contact" tabRender={tabRenderStyles}></Tab>
        </TabbedItem>
        {/* form two */}
        <TabbedItem>
          <TabPanelOptions height="auto" width="auto" />
          <Tab title="Document" colCount={2} tabRender={tabRenderStyles}>
            {/* Make form Responsive */}
            <ColCountByScreen xs={1} sm={1} md={1} lg={2} />
            <SimpleItem
              dataField="Purchase Order No"
              cssClass={classes.item}
              editorOptions={{ height: "1.7rem" }}
            />
            <SimpleItem
              dataField="PO Date"
              cssClass={classes.item}
              editorOptions={{ height: "1.7rem" }}
            />
            <SimpleItem
              dataField="Goods Received Note No"
              cssClass={classes.item}
              editorOptions={{ height: "1.7rem" }}
            />
            <SimpleItem
              dataField="Required Branch"
              cssClass={classes.item}
              editorOptions={{ height: "1.7rem" }}
            />
            <SimpleItem
              dataField="External Order No"
              cssClass={classes.item}
              editorOptions={{ height: "1.7rem" }}
            />
            <SimpleItem
              dataField="Branch"
              cssClass={classes.item}
              editorType="dxSelectBox"
              editorOptions={{
                items: dropDownOptions.Branch,
                searchEnabled: true,
                value: "",
                height: "1.7rem",
              }}
            />
            <SimpleItem
              dataField="Supplier Invoice No"
              cssClass={classes.item}
              editorOptions={{ height: "1.7rem" }}
            />
            <SimpleItem
              dataField="Type"
              cssClass={classes.item}
              editorType="dxSelectBox"
              editorOptions={{
                items: dropDownOptions.Type,
                searchEnabled: true,
                value: "",
                height: "1.7rem",
              }}
            />
            <SimpleItem
              dataField="Job Number"
              cssClass={classes.item}
              editorType="dxSelectBox"
              editorOptions={{
                items: dropDownOptions.JobNumber,
                searchEnabled: true,
                value: "",
                height: "1.7rem",
              }}
            />
            <EmptyItem colSpan={1} cssClass={classes.item} />
            <SimpleItem
              dataField="Order For"
              editorType="dxSelectBox"
              editorOptions={{
                items: dropDownOptions.orderFor,
                searchEnabled: true,
                value: "",
                height: "1.7rem",
              }}
              cssClass={classes.item}
            />
            <SimpleItem
              dataField="Drop off Date"
              cssClass={classes.item}
              editorOptions={{ height: "1.7rem" }}
            />
            <SimpleItem
              dataField="Delivery Method"
              editorType="dxSelectBox"
              editorOptions={{
                items: dropDownOptions.deliveryMethod,
                searchEnabled: true,
                value: "",
                height: "1.7rem",
              }}
              cssClass={classes.item}
            />
            <SimpleItem
              dataField="Pickup Date"
              cssClass={classes.item}
              editorOptions={{ height: "1.7rem" }}
            />
            <SimpleItem
              dataField="Sales Order"
              editorType="dxSelectBox"
              editorOptions={{
                items: dropDownOptions.salesOrder,
                searchEnabled: true,
                value: "",
                height: "1.7rem",
              }}
              cssClass={classes.item}
            />
            <SimpleItem
              dataField="Requested by"
              cssClass={classes.item}
              editorType="dxSelectBox"
              editorOptions={{
                items: dropDownOptions.RequestedBy,
                searchEnabled: true,
                value: "",
                height: "1.7rem",
              }}
            />
            <SimpleItem
              dataField="Customer"
              colSpan={2}
              cssClass={classes.item}
              editorType="dxSelectBox"
              editorOptions={{
                items: dropDownOptions.customer,
                searchEnabled: true,
                value: "",
                height: "1.7rem",
              }}
            />
          </Tab>
          <Tab title="Notification" tabRender={tabRenderStyles}></Tab>
        </TabbedItem>
      </Form>
    </div>
  );
}

export default Forms;
