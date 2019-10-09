import React, { useState } from "react";
import "../index.css";
import { Link, Redirect } from "react-router-dom";
import { Button, Container, Menu, Modal, Form } from "semantic-ui-react";
import Main from "./Main";
import { connect } from "react-redux";
import { register, login } from "../store/actions/authAction";

const fixed = undefined;
const HomePage = ({ dispatch }) => {
  const [loginUser, setLoginUser] = useState({
    email: "",
    password: ""
  });
  const [redirect, setRedirect] = useState(false);
  const [redirectt, setRedirectt] = useState(false);
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    batch: "",
    program: "",
    email: "",
    password: ""
  });

  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onChangeLogin = e => {
    setLoginUser({ ...loginUser, [e.target.name]: e.target.value });
  };

  const onClickLogin = e => {
    e.preventDefault();
    console.log(loginUser);
    dispatch(login(loginUser));
    setTimeout(() => {
      handleRedirect();
    }, 1500);
  };

  const handleRedirect = () => {
    setRedirect(true);
  };
  const onClickk = e => {
    e.preventDefault();
    dispatch(register(user));
    setTimeout(() => {
      handleRedirectt();
    }, 1500);
  };

  const handleRedirectt = () => {
    setRedirectt(true);
  };

  const returnRedirect = () => {
    return redirect ? <Redirect to="/profile" /> : null;
  };
  const returnRedirectt = () => {
    return redirectt ? <Redirect to="/" /> : null;
  };

  return (
    <div className="Background">
      <Menu
        fixed={fixed ? "top" : null}
        inverted={!fixed}
        pointing={!fixed}
        secondary={!fixed}
        size="large"
      >
        <Container style={{ marginTop: "1em" }}>
          <Menu.Item>
            <Link to="/projects">
              <Button
                inverted={!fixed}
                primary={fixed}
                style={{ marginLeft: "0.5em" }}
                size="large"
              >
                View Projects
              </Button>
            </Link>
          </Menu.Item>
          <Menu.Item position="right">
            <Modal
              trigger={
                <Button
                  inverted={!fixed}
                  primary={fixed}
                  style={{ marginLeft: "0.5em" }}
                  size="large"
                >
                  Sign Up
                </Button>
              }
              style={{ width: "500px" }}
            >
              <Modal.Header>Create Account</Modal.Header>
              <Modal.Content>
                <Modal.Description>
                  <Form>
                    <Form.Field>
                      <label>First Name</label>
                      <input
                        placeholder="First Name"
                        name="fname"
                        onChange={onChange}
                        value={user.fname}
                      />
                    </Form.Field>
                    <Form.Field>
                      <label>Last Name</label>
                      <input
                        placeholder="Last Name"
                        name="lname"
                        onChange={onChange}
                        value={user.lname}
                      />
                    </Form.Field>
                    <Form.Field>
                      <label>Email</label>
                      <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        onChange={onChange}
                        value={user.email}
                      />
                    </Form.Field>
                    <Form.Field>
                      <label>Password</label>
                      <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={onChange}
                        value={user.password}
                      />
                    </Form.Field>
                    <Form.Field>
                      <label>Program</label>
                      <input
                        placeholder="Program"
                        name="program"
                        onChange={onChange}
                        value={user.program}
                      />
                    </Form.Field>
                    <Form.Field>
                      <label>Batch</label>
                      <input
                        placeholder="Batch"
                        name="batch"
                        onChange={onChange}
                        value={user.batch}
                      />
                    </Form.Field>
                    {returnRedirectt()}
                    <Modal
                      trigger={
                        <Button type="submit" onClick={onClickk}>
                          Signup
                        </Button>
                      }
                      style={{ width: "500px" }}
                    >
                      <Modal.Header>Login</Modal.Header>
                      <Modal.Content>
                        <Modal.Description>
                          <Form>
                            <Form.Field>
                              <label>Email</label>
                              <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                onChange={onChangeLogin}
                                value={loginUser.email}
                              />
                            </Form.Field>
                            <Form.Field>
                              <label>Password</label>
                              <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                onChange={onChangeLogin}
                                value={loginUser.password}
                              />
                            </Form.Field>
                            {returnRedirect()}
                            <Button type="submit" onClick={onClickLogin}>
                              Login
                            </Button>
                          </Form>
                        </Modal.Description>
                      </Modal.Content>
                    </Modal>
                  </Form>
                </Modal.Description>
              </Modal.Content>
            </Modal>
            <Modal
              trigger={
                <Button
                  inverted={!fixed}
                  primary={fixed}
                  style={{ marginLeft: "0.5em" }}
                  size="large"
                >
                  Login
                </Button>
              }
              style={{ width: "500px" }}
            >
              <Modal.Header>Login</Modal.Header>
              <Modal.Content>
                <Modal.Description>
                  <Form>
                    <Form.Field>
                      <label>Email</label>
                      <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        onChange={onChangeLogin}
                        value={loginUser.email}
                      />
                    </Form.Field>
                    <Form.Field>
                      <label>Password</label>
                      <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={onChangeLogin}
                        value={loginUser.password}
                      />
                    </Form.Field>
                    {returnRedirect()}
                    <Button type="submit" onClick={onClickLogin}>
                      Login
                    </Button>
                  </Form>
                </Modal.Description>
              </Modal.Content>
            </Modal>
          </Menu.Item>
        </Container>
      </Menu>
      <Main />
    </div>
  );
};

export default connect()(HomePage);
