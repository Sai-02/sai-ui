import React, { useState } from "react";
import Alert from "../components/Alert";
export default {
  title: "Alert",
  component: Alert,
};
export const Primary = () => {
  const [open, setOpen] = useState(false);
  const closeAlert = () => {
    setOpen(false);
  };
  return (
    <div className="">
      <div
        className=""
        style={{
          height: "100vh",
        }}
      ></div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita,
        magnam suscipit dignissimos exercitationem eius a beatae, nobis velit
        ipsum atque cum quo officiis est consequatur! Voluptatem, nemo. Velit
        veritatis et, nulla voluptatem, minima, distinctio ipsam atque tenetur
        quod architecto enim numquam. Quo assumenda blanditiis expedita illo ad
        reprehenderit, quas magni libero. Inventore totam error atque architecto
        quos tempore nesciunt eum quia illo, commodi, veniam ducimus!
        Consequatur rem facere culpa repellendus, quia labore dolorem sequi
        nesciunt incidunt, distinctio nulla sed nobis odit, minus placeat
        voluptates fuga cupiditate unde! Consequuntur, cumque veritatis dicta
        reprehenderit at commodi quae quidem amet tenetur, explicabo fugit.
      </p>
      <button
        onClick={() => {
          setOpen(true);
        }}
      >
        click
      </button>
<<<<<<< HEAD
      <Alert
        open={open}
        closeAlert={closeAlert}
        type="info"
        duration={2000}
        iconStyles={{
          fontSize: "1rem",
        }}
      >
        It is a good alert
      </Alert>
=======
      <Alert open={open} text={"Hihdewkdfewkfekf"} closeAlert={closeAlert} />
>>>>>>> 3903af8b78099d2092d300341043d6064dcb53a2
    </div>
  );
};
Primary.storyName = "Alert";
