import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Feedbacks = () => {
  // const feedbacks = useSelector((state) => state.feedback.feedback);
  // console.log(feedbacks, "feedbacks");

  const [feedbacks, setFeedbacks] = useState([]);
  const [deletef, setDeletef] = useState(false);

  const navigate = useNavigate();

  const handleDelete = (id) => {
    (async () => {
      const result = await axios.delete(
        "http://localhost:6001/api/feedback/" + id
      );
      setDeletef(true);
    })();
  };

  const handleUpdate = (id) => {
    navigate("/editfeedback/" + id);
  };

  useEffect(() => {
    setDeletef(false);
    (async () => {
      const result = await axios.get("http://localhost:6001/api/feedback/");
      console.log(result.data);
      setFeedbacks(result.data);
    })();
  }, [deletef]);

  return (
    <div className="feedbacks">
      <div className="top-feed">
        <h2>Feedbacks</h2>
        <div>
          <Link to="/addfeedback">Add Feedback</Link>
        </div>
      </div>
      {feedbacks
        .map((feedback, i) => (
          <div className="feedback-Box" key={feedback._id}>
            <div>
              <div className="feeback-top">
                <h3>{feedback?.title}</h3>
                <span>like/dislike : {feedback.like}</span>
              </div>
              <p>{feedback?.description}</p>
              <img
                src="https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                alt={feedback.image}
                width={200}
              />
              <h4>
                {feedback?.submitterName}, {feedback?.submitterEmail}
              </h4>
            </div>

            <span className="deleteicon">
              <span>
                <img
                  src="data:image/png;base64,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"
                  width={25}
                  alt={"delete feedback"}
                  onClick={() => handleUpdate(feedback._id)}
                />
              </span>
              <img
                src="https://media.istockphoto.com/id/928418914/vector/trash-can-garbage-can-rubbish-bin-icon.jpg?s=170667a&w=0&k=20&c=O4mQKANXGAIwSnPQX-waHjoppfH-YAFXeBt1KFn2j50="
                width={25}
                alt={"delete feedback"}
                onClick={() => handleDelete(feedback._id)}
              />
            </span>
          </div>
        ))
        .reverse()}
    </div>
  );
};

export default Feedbacks;
