import React from "react";
import MaterialTable from "material-table";
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
          <img
            style={{ height: 36, borderRadius: "50%" }}
            src={require("./default.jpg")}
            alt="img"
          />
        )
      }
    ],
    data: [],
    redirect: false,
    id: ""
  };

  componentDidMount() {
    axios.get("http://localhost:5000/project").then(res => {
      let variable = [];
      res.data.filter(dt => {
        if (dt) {
          return variable.push({
            name: dt.name,
            cname: dt.createdby.fname + " " + dt.createdby.lname,
            _id: dt._id
          });
        }
      });
      let variable2 = variable.filter(function(element) {
        return element !== undefined;
      });
      console.log(variable2);
      this.setState({
        data: variable2
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
      <div style={{ height: "100vh", background: "#090909" }}>
        <h1> </h1>
        {returnRedirect()}
        <MaterialTable
          style={{
            margin: "65px 120px",
            padding: "30px"
          }}
          title="View Projects"
          columns={this.state.columns}
          data={this.state.data}
          onRowClick={handleClicked}
          options={{
            search: true
          }}
        />
      </div>
    );
  }
}

export default Projects;
