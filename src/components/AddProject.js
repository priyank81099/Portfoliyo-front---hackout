import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { connect } from "react-redux";
import { addProject } from "../store/actions/projectAction";

const AddProject = ({ _id, dispatch }) => {
  const [project, setProject] = useState({
    name: "",
    link: "",
    description: "",
    createdby: _id
  });

  const onChange = e => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const onClick = e => {
    e.preventDefault();
    dispatch(addProject(project));
    setProject({ name: "", link: "", description: "", createdby: "" });
  };

  return (
    <div
      style={{
        borderRadius: "5px",
        background: "white",
        margin: "30px 100px",
        padding: "20px"
      }}
    >
      <Form>
        <Form.Field>
          <label>Project Title</label>
          <input
            type="text"
            placeholder="Project Title"
            name="name"
            value={project.name}
            onChange={onChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Description</label>
          <textarea
            placeholder="Description"
            name="description"
            value={project.description}
            onChange={onChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Project Link</label>
          <input
            type="text"
            placeholder="Project Link"
            value={project.link}
            name="link"
            onChange={onChange}
          />
        </Form.Field>
        <Button
          type="submit"
          onClick={onClick}
          style={{ marginBottom: "20px", marginTop: "15px" }}
        >
          Add Project
        </Button>
      </Form>
    </div>
  );
};

const mapStateToProps = state => ({
  _id: state.auth.user._id
});

export default connect(mapStateToProps)(AddProject);
