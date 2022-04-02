import React from "react";
import { connect } from "react-redux";
import { Outlet } from "react-router-dom";

const App = (props) => {
  return (
    <>
      <div>{props.num}</div>
      <button onClick={() => props.leijia()}>+</button>

      <ul>
        <li>
          <a href="/detail">detail</a>
        </li>
        <li>
          <a href="/list">list</a>
        </li>
        <li>
          <a href="/">Homepage</a>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

const mapStateToProps = (state) => {
  return { num: state.num, moduleId: state.moduleId };
};

const mapDispatchToProps = (dispatch) => {
  return {
    leijia() {
      const action = { type: "addNum", value: 123 };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
