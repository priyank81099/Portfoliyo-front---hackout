import React from "react";
import MaterialTable from "material-table";
import { connect } from "react-redux";
import axios from "axios";
import { Redirect } from "react-router-dom";

class Projects extends React.Component {
  state = {
    columns: [
      { title: "Project Name", field: "name" },
      { title: "Creater Name", field: "cname" },
      {
        title: "Profile",
        field: "cname",
        render: rowData => (
          <image
            style={{ height: 36, borderRadius: "50%" }}
            src={require("./default.jpg")}
            alt="image"
          />
        )
      }
    ],
    data: [],
    redirect: false
  };

  componentDidMount() {
    const token = this.props.state.auth.token;
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    if (token) {
      config.headers["Authorization"] = token;
    }
    axios
      .get(
        `http://localhost:5000/project/${this.props.state.auth.user.email}`,
        config
      )
      .then(res => {
        let variable = [];
        res.data.map(dt => {
          variable.push({
            name: dt.name,
            cname: dt.createdby.fname + " " + dt.createdby.lname
          });
        });
        console.log(variable);
        this.setState({
          data: variable
        });
      });
  }

  render() {
    const handleClicked = e => {
      console.log(e.target.name);
      this.setState({
        redirect: true
      });
    };

    const returnRedirect = () => {
      if (this.state.redirect === true) {
        return <Redirect to="/viewproject" />;
      }
    };

    return (
      <div>
        {returnRedirect()}
        <MaterialTable
          style={{ margin: "30px 50px", padding: "20px" }}
          title="Your Projects"
          columns={this.state.columns}
          data={this.state.data}
          onRowClick={handleClicked}
          options={{
            search: true,
            rowStyle: {
              height: "65px"
            }
          }}
          editable={{
            onRowDelete: oldData =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  {
                    let data = this.state.data;
                    const index = data.indexOf(oldData);
                    data.splice(index, 1);
                    this.setState({ data }, () => resolve());
                  }
                  resolve();
                }, 1000);
              })
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  state: state
});

export default connect(mapStateToProps)(Projects);
