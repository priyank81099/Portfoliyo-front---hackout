import React, { Component } from "react";
import { Menu, Grid, Button, Container } from "semantic-ui-react";
import { Route, Link, Switch } from "react-router-dom";
import YourProject from "./YourProject";
import ViewProfile from "./ViewProfile.js";
import AddProject from "./AddProject.js";
import { connect } from "react-redux";
import { logout } from "../store/actions/authAction";

class Profile extends Component {
  state = { activeItem: "Your Profile" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  onClick = e => {
    this.props.logout();
  };

  render() {
    const { activeItem } = this.state;

    const fixed = undefined;

    return (
      <Grid style={{ background: "#101010" }}>
        <Grid.Column width={3}>
          <Menu
            pointing
            secondary
            vertical
            style={{
              height: "110vh",
              background: "#090909",
              width: "110%",
              paddingTop: "15px"
            }}
          >
            <Link to="/profile">
              <Menu.Item
                name="Your Profile"
                active={activeItem === "Your Profile"}
                onClick={this.handleItemClick}
                style={{
                  color: "white",
                  height: "40px",
                  fontSize: "1.5rem",
                  textAlign: "center",
                  paddingTop: "25px",
                  paddingBotton: "25px",
                  marginTop: "30px",
                  marginBottom: "30px"
                }}
              />
            </Link>

            <Link to="/profile/yourproject">
              <Menu.Item
                name="Your Project"
                active={activeItem === "Your Project"}
                onClick={this.handleItemClick}
                style={{
                  color: "white",
                  height: "40px",
                  fontSize: "1.5rem",
                  textAlign: "center",
                  paddingTop: "25px",
                  paddingBotton: "25px",
                  marginTop: "30px",
                  marginBottom: "30px"
                }}
              >
                Your Projects
              </Menu.Item>
            </Link>

            <Link to="/profile/addproject">
              <Menu.Item
                name="Add Project"
                active={activeItem === "Add Project"}
                onClick={this.handleItemClick}
                style={{
                  color: "white",
                  height: "40px",
                  fontSize: "1.5rem",
                  textAlign: "center",
                  paddingTop: "25px",
                  paddingBotton: "25px",
                  marginTop: "30px",
                  marginBottom: "30px"
                }}
              >
                Add Project
              </Menu.Item>
            </Link>
          </Menu>
        </Grid.Column>
        <Grid.Column stretched width={13} style={{ background: "#101010" }}>
          <Grid.Row>
            <Menu
              fixed={fixed ? "top" : null}
              secondary={!fixed}
              style={{ marginTop: "10px", marginBottom: "10px" }}
              size="large"
            >
              <Container>
                <Menu.Item position="right">
                  <Link to="/projects">
                    <Button inverted={!fixed} style={{ marginLeft: "0.5em" }}>
                      View Projects
                    </Button>
                  </Link>
                  <Button
                    onClick={this.onClick}
                    inverted={!fixed}
                    style={{ marginLeft: "0.5em" }}
                  >
                    Logout
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
          </Grid.Row>
          <Grid.Row style={{ height: "200%", width: "99%" }}>
            <Switch>
              <Route path="/profile" exact component={ViewProfile} />
              <Route path="/profile/yourproject" component={YourProject} />
              <Route path="/profile/addproject" component={AddProject} />
            </Switch>
          </Grid.Row>
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(
  null,
  { logout }
)(Profile);
