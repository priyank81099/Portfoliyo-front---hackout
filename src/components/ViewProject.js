import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Menu, Grid, Button, Container } from "semantic-ui-react";
import axios from "axios";

const AddProject = () => {
  const fixed = undefined;
  return (
    <div
      style={{
        background: "#090909",
        paddingTop: "10%",
        height: "100vh",
        padding: "5%"
      }}
    >
      <div style={{ background: "white", borderRadius: "10px" }}>
        <Grid>
          <Grid.Row style={{ justifyContent: "center" }}>
            <h1 style={{ fontSize: "50px", marginTop: "20px" }}>
              {" "}
              Project title{" "}
            </h1>
          </Grid.Row>
          <Grid.Row>
            <div
              style={{
                marginLeft: "50px"
              }}
            >
              <h1>Created By : Hege Refsnes</h1>
            </div>
          </Grid.Row>
          <Grid.Row>
            <div style={{ margin: "0px 50px" }}>
              <h1> Description : </h1>
              <h2 style={{ wordBreak: "break-all" }}>
                vvasvasvasvasvsvavavavsvavasvasvvvasvasvasvasvsvavavavsvavasvasvvvasvasvasvasvsvavavavsvavasvasvvvasvasvasvasvsvavavavsvavasvasvvvasvasvasvasvsvavavavsvavasvasvvvasvasvasvasvsvavavavsvavasvasvvvasvasvasvasvsvavavavsvavasvasv
              </h2>
            </div>
          </Grid.Row>
          <Grid.Row>
            <div style={{ margin: "0px 50px", marginBottom: "50px" }}>
              <h3> Link : {"qcvxjsach"} </h3>
            </div>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  );
};

export default AddProject;
