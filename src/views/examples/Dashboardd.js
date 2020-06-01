import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import { Link } from "react-router-dom";


// reactstrap components
import {
  Button
} from "reactstrap";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Table from "../../components/Table/Table.js";
import Tasks from "../../components/Tasks/Tasks.js";
import CustomTabs from "../../components/CustomTabs/CustomTabs.js";
import Danger from "../../components/Typography/Danger.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardIcon from "../../components/Card/CardIcon.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";

import { bugs, website, server } from "../../assets/css/variables/general.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "../../assets/css/variables/charts.js";

import styles from "../../assets/css/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div className="page-header clear-filter pr-5 pl-5" filter-color="orange">
    <ExamplesNavbar />
      <p className="text-center" style={ { paddingTop: 60,fontWeight: 'bold',fontSize: 60 } }>Welcome to your space</p>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="primary">
              <ChartistGraph
                className="ct-chart"
                data={dailySalesChart.data}
                type="Line"
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Daily Applications reviewed</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} />26%
                </span>{" "}
                increase in today applications reviewed.
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 4 minutes ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="warning">
              <ChartistGraph
                className="ct-chart"
                data={emailsSubscriptionChart.data}
                type="Line"
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Monthly applications reviewed</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 5%
                </span>{" "}
                increase in this month applications reviewed.
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 15 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="primary">
              <ChartistGraph
                className="ct-chart"
                data={completedTasksChart.data}
                type="Line"
                options={completedTasksChart.options}
                listener={completedTasksChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Applications remaining</h4>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 6 minutes ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <CustomTabs
            title="Notifications:"
            headerColor="primary"
            tabs={[
              {
                tabName: "Applications(4)",
                tabContent: (
                  <Tasks
                    checkedIndexes={[]}
                    tasksIndexes={[0, 1, 2, 3]}
                    tasks={bugs}
                  />
                )
              },
              {
                tabName: "Emails(1)",
                tabContent: (
                  <Tasks
                    checkedIndexes={[0]}
                    tasksIndexes={[0, 1]}
                    tasks={website}
                  />
                )
              },
              {
                tabName: "Warnings(1)",
                tabContent: (
                  <Tasks
                    checkedIndexes={[1]}
                    tasksIndexes={[0]}
                    tasks={server}
                  />
                )
              }
            ]}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Applications to review</h4>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="warning"
                tableHead={["ID", "Name", "number of houses", "Country"]}
                tableData={[
                  ["5576", "Karimi Adil", "4", "Niger"],
                  ["5573", "Minerva Hooper", "2", "Curaçao"],
                  ["5374", "Salama Monia", "1", "Netherlands"],
                  ["5250", "Philip Chaney", "1", "Korea, South"]
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      <Button
        style={ { backgroundColor: '#ff6c31' } }
        className="btn-round pull-right pb-5"
        color="success"
        size="lg"
        to="/"
        tag={Link}
      >
      Logout
    </Button>
    </div>
  );
}
