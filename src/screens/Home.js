import React from "react";
import Container from "../components/Container";
import { useState } from "react";
import { getDoc, doc, getDocs, ResRef } from "../until/config";
import res from "../Images/res.jpg";

const Home = () => {
  // const [allevent, setallevent] = useState();
  // const getAllEvent = async () => {
  //   const querySnapshot = await getDocs(ResRef);
  //   let events = [];
  //   querySnapshot.forEach((doc) => {
  //     // doc.data() is never undefined for query doc snapshots
  //     console.log(doc.id, " => ", doc.data());
  //     events.push({ id: doc.id, ...doc.data() });
  //   });
  //   setallevent(events);
  // };
  return (
    <div>
      <Container>
        {/* {allevent.map((data, index) => {
          return (
            <>
              <div key={index}>{data.ResName}</div>
            </>
          );
        })} */}
        <img src={res} alt="Logo" style={{ width: "100%" }} />
      </Container>
    </div>
  );
};

export default Home;
