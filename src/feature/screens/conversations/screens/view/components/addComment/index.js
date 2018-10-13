import React from "react";
import FormNewComment from "./components/formCreate";

class AddNewComment extends React.Component {
  render() {
    return <FormNewComment {...this.props} />;
  }
}

export default AddNewComment;
