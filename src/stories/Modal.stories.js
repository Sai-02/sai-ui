import React from "react";
import { useState } from "react";
import Modal from "../components/Modal";
export default {
  title: "Modal",
  component: Modal,
};
export const Primary = () => {
  const [shouldOpenModal, setShouldOpenModal] = useState(false);
  return (
    <div className="">
      <p className="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
        dolore repellat voluptatem minus reiciendis tenetur harum, autem
        corporis sunt ad delectus eaque rem nostrum saepe aliquid nihil eveniet
        neque. Incidunt dolores quibusdam ea voluptate provident nam esse harum?
        Odio molestiae minus eius, amet asperiores reiciendis, doloremque
        deserunt quas aspernatur ut vitae consequatur magnam quis facere!
      </p>
      <Modal
        open={shouldOpenModal}
        customStyles={{
        }}
      >
        <div
          className=""
          style={{
            padding: "1rem",
          }}
        >
          <div
            className=""
            style={{
              padding: "0 4rem",
            }}
          >
            This is my modal that is very simple
          </div>
          <button
            onClick={() => {
              setShouldOpenModal(false);
            }}
          >
            Close Modal
          </button>
        </div>
      </Modal>
      <button
        onClick={() => {
          setShouldOpenModal(true);
        }}
      >
        Open Modal
      </button>
    </div>
  );
};
Primary.storyName = "Modal";
