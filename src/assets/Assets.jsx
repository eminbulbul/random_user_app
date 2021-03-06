import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Email from "../assets/email.svg";
import Phone from "../assets/phone.svg";
import Location from "../assets/location.svg";
import "./Assets.css";

// import { ReactComponent as Email } from "../assets/email.svg";
const Assets = () => {
  const [card, setCard] = useState();
  useEffect(() => {
    getApi();
  }, []);

  const getApi = async () => {
    const { data } = await axios.get("https://randomuser.me/api/");
    // response.data yerine {data} yazdik
    setCard(data.results[0]);

    // console.log(response.data.results);
  };

  //   console.log(card);
  const handleClick = () => {
    getApi();
  };
  return (
    <div>
      <section>
        <nav>
          <img src={card?.picture.medium} alt="card images" />
          <h1>
            {card?.name.title +
              " " +
              " " +
              card?.name.first +
              " " +
              " " +
              card?.name.last}
          </h1>
        </nav>
        <nav>
          <p>
            {" "}
            <span>
              <img className="logo" src={Email} alt="" />
              {/* <Email /> */}
            </span>
            <span>{card?.email}</span>
          </p>
          <p>
            {" "}
            <span>
              <img className="logo" src={Phone} alt="" />
              {/* <Phone /> */}
            </span>
            <span>{card?.phone}</span>
          </p>
          <p>
            {" "}
            <span>
              <img className="logo" src={Location} alt="" />
              {/* <Email /> */}
            </span>
            <span>{card?.location.city + "-" + card?.location.country}</span>
          </p>
        </nav>
        <nav>
          <p>Age : {card?.dob.age}</p>
          <p>Register Date : {card?.registered.date.slice(0, 10)}</p>
        </nav>
        <button onClick={handleClick}>Random User</button>
      </section>
    </div>
  );
};

export default Assets;
