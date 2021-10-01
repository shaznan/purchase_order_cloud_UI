import React, { Fragment } from "react";
import "devextreme/dist/css/dx.light.css";
import { Grid } from "@mui/material";
import { Form, SimpleItem, GroupItem } from "devextreme-react/form";
import { useStyles } from "./taxAndDiscounts_styles";
import { Button } from "devextreme-react/button";

//
const TaxAndDiscounts = () => {
  const classes = useStyles();

  const onClickHandler = () => {
    alert("it worked");
  };
  return (
    <Fragment>
      <Grid container>
        <Grid item sm={3}>
          <Grid container spacing={0} className={classes.button_container}>
            <Grid item sm={5}>
              <Button
                className={classes.services_btn}
                icon="add"
                text="Add Services"
                onClick={onClickHandler}
              />
            </Grid>
            <Grid item sm={5}>
              <Button
                className={classes.services_btn}
                icon="remove"
                text="Delete Lines"
                onClick={onClickHandler}
              />
            </Grid>
            {/* <Grid item sm={4}></Grid> */}
          </Grid>
        </Grid>
        <Grid item sm={9}>
          <Form colCount={3}>
            <GroupItem caption="local values" cssClass={classes.groupItem}>
              <SimpleItem
                dataField="Total Exclusive (AUD)"
                label="name"
                cssClass={classes.item}
                editorType="dxNumberBox"
                editorOptions={{
                  height: "1.7rem",
                  value: 394.0,
                  format: "#,##0.00", //format input feild to decimal places
                }}
              />
              <SimpleItem
                dataField="Total Tax (AUD)"
                cssClass={classes.item}
                editorOptions={{
                  height: "1.7rem",
                  value: 26.6,
                  format: "#,##0.00",
                }}
              />
              <SimpleItem
                dataField="Total Inclusive (AUD)"
                cssClass={classes.item}
                editorOptions={{
                  height: "1.7rem",
                  value: 420.6,
                  format: "#,##0.00",
                }}
              />
            </GroupItem>
            <GroupItem caption="Discounts" cssClass={classes.groupItem}>
              <SimpleItem
                dataField="Total Before Discount"
                cssClass={classes.item}
                editorOptions={{
                  height: "1.7rem",
                  value: 280,
                  format: "#,##0.00",
                }}
              />
              <SimpleItem
                dataField="Commercial Discount (%)"
                cssClass={classes.item}
                editorOptions={{
                  height: "1.7rem",
                  value: 0.0,
                  format: "#,##0.00",
                }}
              />
              <SimpleItem
                dataField="Financial Discount (%)"
                cssClass={classes.item}
                editorOptions={{
                  height: "1.7rem",
                  value: 0.0,
                  format: "#,##0.00",
                }}
              />
            </GroupItem>
            <GroupItem caption="Foreign Values" cssClass={classes.groupItem}>
              <SimpleItem
                dataField="Excl. Total (USD)"
                cssClass={classes.item}
                editorOptions={{
                  height: "1.7rem",
                  value: 280,
                  format: "#,##0.00",
                }}
              />
              <SimpleItem
                dataField="Tax (USD)"
                cssClass={classes.item}
                editorOptions={{
                  height: "1.7rem",
                  value: 19,
                  format: "#,##0.00",
                }}
              />
              <SimpleItem
                dataField="Incl. Total (USD)"
                cssClass={classes.item}
                editorOptions={{
                  height: "1.7rem",
                  value: 299.0,
                  format: "#,##0.00",
                }}
              />
            </GroupItem>
          </Form>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default TaxAndDiscounts;
