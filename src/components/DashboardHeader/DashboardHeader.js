import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const DashboardHeader = ({ currentPage: { url, page }, dashboardLinks }) => {
  return (
    <>
      <Grid container direction="row" alignItems="flex-end">
        <Grid item xs={12} sm={2}>
          <Link to={url}>
            <Typography
              variant="h6"
              style={{ fontWeight: "bold", color: "black" }}
            >
              {page}
            </Typography>
          </Link>
        </Grid>
        <Grid item xs={12} sm={10}>
          <Grid
            container
            direction="row"
            alignItems="flex-end"
            style={{ justifyContent: "flex-end" }}
          >
            {dashboardLinks.map(({ page, url }) => (
              <Grid item xs={12} sm={2} key={page}>
                <Link to={url}>
                  <Typography
                    variant="body1"
                    style={{
                      float: "right",
                      color: page === "Logout" ? "red" : "gray",
                    }}
                  >
                    {page}
                  </Typography>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      <hr style={{ width: "100%" }} />
    </>
  );
};

export default DashboardHeader;
