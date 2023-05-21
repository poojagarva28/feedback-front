import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addFeedback } from "../slices/FeebackSlice";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const FeedbackForm = () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  console.log(id, "params");

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      like: "",
      submitterName: "",
      submitterEmail: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Please Enter Feedback Title"),
      description: Yup.string().required("Please Enter Feedback Description"),
      like: Yup.string().required("Please Enter Like/Dislike"),
      submitterName: Yup.string().required("Please Enter Your Name"),
      submitterEmail: Yup.string().required("Please Enter Your Email"),
    }),
    onSubmit: (values) => {
      //   alert(JSON.stringify(values, null, 2));

      if (id) {
        (async () => {
          const result = axios.put(
            "http://localhost:6001/api/feedback/" + id,
            values
          );
          console.log(result);
        })();
      } else {
        (async () => {
          const result = axios.post(
            "http://localhost:6001/api/feedback/",
            values
          );
          console.log(result);
        })();
      }
      //   dispatch(addFeedback(values));
    },
  });

  const { setFieldValue } = formik;
  return (
    <div className="content">
      <div className="form-container">
        <h2>Add Feedback</h2>

        <form onSubmit={formik.handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            name="title"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
          {formik.touched.title && formik.errors.title && (
            <h5 className="text-red">{formik.errors.title}</h5>
          )}
          {/* <input
            type="text"
            placeholder="Like/Dislike"
            name="like"
            onChange={formik.handleChange}
            value={formik.values.like}
          /> */}
          <div className="radioclass">
            <label>
              <input
                type="radio"
                name="test"
                value="a"
                checked={formik.values.like === "like"}
                onChange={() => setFieldValue("like", "like")}
              />
              like
            </label>
            <label>
              <input
                type="radio"
                name="test"
                value="b"
                checked={formik.values.like === "dislike"}
                onChange={() => setFieldValue("like", "dislike")}
              />
              dislike
            </label>
          </div>
          {formik.touched.like && formik.errors.like && (
            <h5 className="text-red">{formik.errors.like}</h5>
          )}
          <textarea
            placeholder="Description"
            rows="4"
            name="description"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
          {formik.touched.description && formik.errors.description && (
            <h5 className="text-red">{formik.errors.description}</h5>
          )}
          <input
            type="text"
            placeholder="Your Name"
            name="submitterName"
            onChange={formik.handleChange}
            value={formik.values.submitterName}
          />
          {formik.touched.submitterName && formik.errors.submitterName && (
            <h5 className="text-red">{formik.errors.submitterName}</h5>
          )}
          <input
            type="text"
            placeholder="Your Email"
            name="submitterEmail"
            onChange={formik.handleChange}
            value={formik.values.submitterEmail}
          />
          {formik.touched.submitterEmail && formik.errors.submitterEmail && (
            <h5 className="text-red">{formik.errors.submitterEmail}</h5>
          )}
          <br />
          <button type="submit" value="Add Feedback">
            {id ? "Edit" : "Add"} Feedback
          </button>
        </form>
      </div>
      <br />
      <br />
      <div>
        <Link to="/feedbacks">Show Feedbacks</Link>
      </div>
    </div>
  );
};

export default FeedbackForm;
