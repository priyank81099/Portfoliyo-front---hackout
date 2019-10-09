import React from "react";
import { Grid, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";

const Profile = ({ user, auth }) => {
  const fixed = undefined;

  const onUploading = e => {
    e.preventDefault();
    const formData = new FormData();
    console.log(formData);
    formData.append("imageLink", e.target.file);
    console.log(formData);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    config.headers["Authorization"] = auth.token;
    axios
      .post("http://localhost:5000/user/image", formData, config)
      .then(response => {
        alert("The file is successfully uploaded");
      })
      .catch(error => {});
  };

  return (
    <Grid>
      <Grid.Column width={9}>
        <div className="view">
          <h1>
            Name : {""}
            {user.fname + " " + user.lname}
          </h1>
          <br />
          <h1>
            {" "}
            Email : {""}
            {user.email}
          </h1>
          <br />
          <h1>
            {" "}
            Program : {""}
            {user.program}
          </h1>
          <br />
          <h1>
            {" "}
            Batch : {""}
            {user.batch}
          </h1>
        </div>
        <Grid.Column width={6} className="box3">
          <Link to="/profile/profilerelation"></Link>
        </Grid.Column>
      </Grid.Column>
      <Grid.Column width={7}>
        <img
          src={require("./default.jpg")}
          alt="defaultImage"
          height="297"
          width="270"
          className="ProfileImg"
        />
        <br />
        <br />
        <div className="ui button">
          <input
            inverted={!fixed}
            primary={fixed}
            name="imageLink"
            type="file"
            accept="image/*"
            style={{
              width: "230px"
            }}
          />
        </div>
        <Button
          inverted={!fixed}
          primary={fixed}
          name="updateimg"
          value="updateimg"
          onClick={onUploading}
          style={{
            marginTop: "15px",
            marginLeft: "140px"
          }}
        >
          Update Image
        </Button>
      </Grid.Column>
    </Grid>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user,
  auth: state.auth
});

export default connect(mapStateToProps)(Profile);
