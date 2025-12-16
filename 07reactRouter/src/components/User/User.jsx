import React from "react";
import { useParams } from "react-router";

function User() {
  // router se params mai userid aa rhi hai aur useParams ka use krke hum usey idhr display kra rhe.
  const { userid } = useParams();
  return <div>User: {userid}</div>;
}

export default User;
