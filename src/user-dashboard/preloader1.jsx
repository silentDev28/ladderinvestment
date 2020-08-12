import React, { Component } from "react";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
class Skelenton extends Component {
  state = {};
  render() {
    return (
      <SkeletonTheme color="white" highlightColor="#444">
        <p style={{ lineHeight: 3 }} height={100}>
          <Skeleton count={7} />
        </p>
      </SkeletonTheme>
    );
  }
}

export default Skelenton;
