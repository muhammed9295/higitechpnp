import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Protected(props) {
  let history = useNavigate();
  // redirecting
  useEffect(() => {
    if (!sessionStorage.getItem("accessToken")) {
      history("/");
    }
  }, []);
  let Comp = props.Comp;
  return (
    <div>
      <Comp />
    </div>
  );
}

export default Protected;
