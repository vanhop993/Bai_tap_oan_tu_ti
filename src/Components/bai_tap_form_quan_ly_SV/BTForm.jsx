import React, { Component } from "react";
import FormSV from "./FormSV";
import TableSV from "./TableSV";

export default class BTForm extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="text-center">Bài tập Form sinh viên</h3>
        <div className="row">
          <div className="col-12">
            <FormSV />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <TableSV />
          </div>
        </div>
      </div>
    );
  }
}
