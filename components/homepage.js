import React, { useEffect, useState } from "react";
import Filteration from "./filteration";
import Login from "./login";
export default function Homepage() {
  const [userdata, setuserdata] = useState({username:"",password:""});
const [logincre, setlogincre] = useState({})
  // useEffect(() => {
  //   fetch("http://192.168.0.103:8081/api/loginapi")
  //     .then((response) => response.json())
  //     .then((data) => setlogincre(data));
  // }, []);
  console.log(logincre)
  const logindata = { username: "imran", password: "1234" };
 
  const data = (d) => {
    console.log(d);
    if (
    //   d.username === logincre.UserName &&
    //   d.password === logincre.Password
    d.username === logindata.username &&
    d.password === logindata.password
    ) {
      console.log("working")
      setuserdata(d);
    } else {
      console.log("not working");
    }
  };

  return (
    <div>
      {userdata.username !== "" ? <Filteration /> : <Login data={data} />}
    </div>
  );
}
