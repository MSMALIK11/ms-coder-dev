import React, { useEffect, useState } from "react";

import Blogbanner from "./Blogbanner";
// import Category from "./features/Category";
import StayConnected from "./features/StayConnected";
import Category from "./Category/Category";
import Posts from "./Posts";

const BlogHome = () => {
  return (
    <div>
      <Blogbanner />
      <div className="mt-5 container">
        <div className="row">
          <div className="col-sm-12  col-md-12 col-lg-8">
            <Category />
            <div className="mt-5">
              <Posts />
            </div>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-4">
            <StayConnected />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHome;
