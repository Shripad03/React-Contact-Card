import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img className="circle-img" src={props.img} alt="avatar_img" />
      </div>
      <div className="bottom">
        <p className="info">{props.phone}</p>
        <p className="info">{props.mail}</p>
      </div>
    </div>
  );
}

function ContactCards() {
  return (
    <div>
      <h1>My Contact</h1>
      <Card
        name="MS Dhoni"
        img="https://wallpapercave.com/wp/wp1859026.jpg"
        phone="9922298725"
        mail="dhoni07@gmail.com"
      />

      <Card
        name="Tom Hanks"
        phone="9922298724"
        mail="tomhanks@gmail.com"
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGzjfK9YL2ZhL_8hzNj4r96PIkRk9-bowtFg&usqp=CAU"
      />

      <Card
        name="Virat Kohli"
        phone="9922298723"
        mail="chiku18@gmail.com"
        img="https://m.cricbuzz.com/a/img/v1/192x192/i1/c170661/virat-kohli.jpg"
      />
    </div>
  );
}

export default ContactCards;
