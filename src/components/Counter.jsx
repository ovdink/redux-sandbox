import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../actions";

const Counter = ({ counter, inc, dec, rnd }) => {
  return (
    <div class="jumbotron">
      <h1>{counter}</h1>
      <button class="btn btn-primary btn-lg" onClick={dec}>
        DEC
      </button>
      <button class="btn btn-primary btn-lg" onClick={inc}>
        INC
      </button>
      <button class="btn btn-primary btn-lg" onClick={rnd}>
        RND
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    counter: state
  };
};

export default connect(mapStateToProps, actions)(Counter);
