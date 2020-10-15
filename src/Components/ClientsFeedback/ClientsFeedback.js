import React from "react";
import monica from "../../images/monica.png";
import pedro from "../../images/pedro.png";
import william from "../../images/william.png";
import ClientFeedbackDetails from "../ClientFeedbackDetails/ClientFeedbackDetails";

const feedbacks = [
  {
    img: monica,
    name: "Nash Patrick",
    title: "CEO, Manpol",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio nihil ab esse accusamus sint ipsam!",
  },
  {
    img: pedro,
    name: "Miram Barron",
    title: "CEO, Manpol",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio nihil ab esse accusamus sint ipsam!",
  },
  {
    img: william,
    name: "Bria Malone",
    title: "CEO, Manpol",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio nihil ab esse accusamus sint ipsam!",
  },
];

const ClientsFeedback = () => {
  return (
    <section>
      <div className="mb-5 pb-5">
        <h3 className="text-center">
          Clients <span style={{ color: "#7AB259" }}>Feedback</span>
        </h3>
      </div>
      <div className="row">
        {feedbacks.map((feedback) => (
          <ClientFeedbackDetails feedback={feedback} />
        ))}
      </div>
    </section>
  );
};

export default ClientsFeedback;
