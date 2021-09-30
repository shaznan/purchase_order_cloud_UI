import React, { Fragment } from "react";
import "devextreme/dist/css/dx.light.css";
import { Grid } from "@mui/material";
import { Form, SimpleItem, GroupItem } from "devextreme-react/form";
import { useStyles } from "./taxAndDiscounts_styles";

const employee = {
  name: "John Heart",
  position: "CEO",
  hireDate: new Date(2012, 4, 13),
  officeNumber: 901,
  phone: "+1(213) 555-9392",
  skype: "jheart_DX_skype",
  email: "jheart@dx-email.com",
};

const TaxAndDiscounts = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid container>
        <Grid item sm={3}>
          <div>hello</div>
        </Grid>
        <Grid item sm={9}>
          <Form formData={employee} colCount={3}>
            <GroupItem caption="local values" cssClass={classes.groupItem}>
              <SimpleItem
                dataField="Total Exclusive (AUD)"
                cssClass={classes.item}
                editorOptions={{ height: "1.7rem" }}
              />
              <SimpleItem
                dataField="Total Tax (AUD)"
                cssClass={classes.item}
                editorOptions={{ height: "1.7rem" }}
              />
              <SimpleItem
                dataField="Total Inclusive (AUD)"
                cssClass={classes.item}
                editorOptions={{ height: "1.7rem" }}
              />
            </GroupItem>
            <GroupItem caption="Discounts">
              <SimpleItem
                dataField="Total Before Discount"
                cssClass={classes.item}
                editorOptions={{ height: "1.7rem" }}
              />
              <SimpleItem
                dataField="Commercial Discount (%)"
                cssClass={classes.item}
                editorOptions={{ height: "1.7rem" }}
              />
              <SimpleItem
                dataField="Financial Discount (%)"
                cssClass={classes.item}
                editorOptions={{ height: "1.7rem" }}
              />
            </GroupItem>
            <GroupItem caption="Foreign Values">
              <SimpleItem
                dataField="Excl. Total (USD)"
                cssClass={classes.item}
                editorOptions={{ height: "1.7rem" }}
              />
              <SimpleItem
                dataField="Tax (USD)"
                cssClass={classes.item}
                editorOptions={{ height: "1.7rem" }}
              />
              <SimpleItem
                dataField="Incl. Total (USD)"
                cssClass={classes.item}
                editorOptions={{ height: "1.7rem" }}
              />
            </GroupItem>
          </Form>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default TaxAndDiscounts;
