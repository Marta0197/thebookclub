import { useFormik } from "formik";
import { Formik } from "formik";
import React, { useContext, useState } from "react";
import FormControl from "../../components/FormControl/FormControl";
import Input from "../../components/Input/Input";
import { createBook } from "../../services/BookService";
import { bookSchema } from "../../schemas/books.schema";
import "./BookCreator.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialValues = {
  title:"",
  author: "",
  bookText: "",
  photo: "",
};
const BookCreator = () => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    isSubmitting,
    handleSubmit,
    setSubmitting,
    setFieldValue,
    resetForm,
  } = useFormik({
    initialValues: initialValues,
    validateOnBlur: true,
    validateOnChange: false,
    validationSchema: bookSchema,
    onSubmit: (values) => {
      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("author", values.author);
      formData.append("bookText", values.bookText);
      formData.append("photo", values.photo);
      createBook(formData)
        .then((response) => {
          resetForm();
          toast.success("Creating text...", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        })
        .catch((err) => {
          console.log(err);
        });

      setSubmitting(false);
    },
  });

  return (
    <div className="container">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <FormControl
          text="Title"
          error={touched.title && errors.title}
          htmlFor="title"
        >
          <Input
            id="title"
            name="title"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
            error={touched.title && errors.title}
            placeholder="Enter title..."
          />
        </FormControl>
        <FormControl
          text="Author"
          error={touched.author && errors.author}
          htmlFor="author"
        >
          <Input
            id="author"
            name="author"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.author}
            error={touched.author && errors.author}
            placeholder="Enter author..."
          />
        </FormControl>
        <FormControl
          text="Text"
          error={touched.bookText && errors.bookText}
          htmlFor="bookText"
        >
          <Input
            id="bookText"
            name="bookText"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.bookText}
            error={touched.bookText && errors.bookText}
            placeholder="Enter text ..."
          />
        </FormControl>
        <FormControl
          text="Photo"
          error={touched.photo && errors.photo}
          htmlFor="photo"
        >
          <input
            id="photo"
            name="photo"
            type="file"
            multiple
            onChange={(event) => {
              setFieldValue("photo", event.currentTarget.files[0]);
            }}
          />
        </FormControl>

        <button
          className="btn btn-primary purple-btn"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Loading..." : "Create"}
        </button>

        <ToastContainer />
      </form>
    </div>
  );
};

export default BookCreator;