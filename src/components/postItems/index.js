import React, { Component } from "react";
import "./index.css";
import { connect } from "react-redux";
import { requestApiData } from "../../redux/ac";
import { bindActionCreators } from "redux";

class Data extends Component {
  componentDidMount() {
    this.props.requestApiData();
  }

  posts = (post, id) => (
    <div key={post.id}>
      <h1>{post.id}</h1>
      <h3>{post.title}</h3>
      <h5>{post.body}</h5>
    </div>
  );

  render() {
    return (
      <div className="container">
        <div>{this.props.data.map(this.posts)}</div>
        <div className="container__count2">
          <button size="large" color="success" className="green">
            plus
          </button>
          <button size="large" color="danger" className="red">
            minus
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ data }) => ({
  data
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Data);
