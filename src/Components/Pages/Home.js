import React, { useState, useEffect } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";

import AllPosts from "../Layout/AllPost";

function Home() {
  return (
    <div>
      <AllPosts />
    </div>
  );
}

export default Home;
