import React from "react";
import Container from "../components/Container";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../until/config";
import { useEffect, useState } from "react";
import { getDocs } from "firebase/firestore";
import { ResRef } from "../until/config";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row"; // import { Card, Avatar } from "antd";
// import { EllipsisOutlined, SettingOutlined } from "@ant-design/icons";
// const { Meta } = Card;

const Dashboard = () => {
  const navigate = useNavigate();
  const [eve, setEve] = useState([]);
  useEffect(async () => {
    getAllEvent();
    onAuthStateChanged(auth, (user) => {
      if (user) {
      } else {
        navigate("/login");
      }
    });
  }, []);

  const getAllEvent = async () => {
    const querySnapshot = await getDocs(ResRef);
    let events = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      events.push({ id: doc.id, ...doc.data() });
    });
    setEve(events);
  };

  const goToEventPage = (event) => {
    console.log("event=>", event);
    navigate('/AddDishes');
  };

  return (
    <div>
      <Container>
        <div className="mb-2">
          <Button variant="primary" size="lg" onClick={() => goToEventPage()}>
            Add Dishes
          </Button>{" "}
        </div>
        <div className="container_event">
          {eve.map((data, index) => {
            return (
              <Row xs={1} md={1} className="g-4">
                {Array.from({ length: 1 }).map((_, idx) => (
                  <Col>
                    <Card>
                      <Card.Img variant="top" src="holder.js/100px160" />
                      <Card.Body>
                        <h1>{data.ResName}</h1>
                        <Card.Title>{data.city}</Card.Title>
                        <Card.Text>{data.country}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
              // <div>
              //   <p>{data.ResName}</p>
              //   <p>{data.city}</p>
              //   <p>{data.country}</p>

              //   <br></br>
              // </div>

              // <Card
              //   onClick={() => goToEventPage(data)}
              //   style={{ cursor: "pointer", width: 300, margin: 12 }}
              //   cover={
              //     <img
              //       alt="example"
              //       src={data.eventImg}
              //       className={"event_img"}
              //     />
              //   }
              //   actions={[
              //     <SettingOutlined key="setting" />,

              //     <EllipsisOutlined key="ellipsis" />,
              //   ]}
              // >
              //   <Meta
              //     avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              //     title={data.ResName}
              //     description={data.city}
              //   />
              // </Card>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Dashboard;
