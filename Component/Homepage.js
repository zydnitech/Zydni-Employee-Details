import React, { useEffect, useState } from "react";
import Filteration from "./Filteration";
import Login from "./Login";
export default function Homepage() {
  const [userdata, setuserdata] = useState({ username: "", password: "" });
  const logindata = { username: "imran", password: "1234" };

  const data = (d) => {

    const newuser = d.username.toLowerCase()
    if (
      newuser === logindata.username &&
      d.password === logindata.password
    ) {
      console.log("working")
      setuserdata(d);
    } else {
      alert('wrong credential')
    }
  };

  return (
    <div>
      {userdata.username !== "" ? <Filteration /> : <Login data={data} />}
    </div>
  );
}
