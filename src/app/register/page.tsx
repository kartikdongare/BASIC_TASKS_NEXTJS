"use client"
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import style from "../login/page.module.css";
import Link from "next/link";
const page = () => {
  const [regiData, setRegiData] = useState({
    fullName: "",
    mobileNo: "",
    email: "",
    password: "",
  });
  const registerVal = Yup.object().shape({
    fullName: Yup.string().required("full name is required"),
    mobileNo: Yup.number().min(10).max(11).required("mobile no is required"),
    email: Yup.string().email().required("email is required"),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/
      )
      .required("password is required"),
  });
  return (
    <div className={style.regi}> 
    <Formik
      initialValues={regiData}
      validationSchema={registerVal}
      onSubmit={() => {}}
    >
      <Form>
        <div>
          <label>Enter fullName</label>
          <Field
            type="text"
            name="fullName"
            className={style.input}
            placeholder="Enter Name"
          />
          <div className={style.dgr}>
            <ErrorMessage name="fullName" />
          </div>
        </div>
        <div>
          <label>Enter email</label>
          <Field
            type="text"
            name="email"
            className={style.input}
            placeholder="Enter Name"
          />
          <div className={style.dgr}>
            <ErrorMessage name="email" />
          </div>
        </div>
        <div>
          <label>Enter Mobile No</label>
          <Field
            type="text"
            name="mobileNo"
            className={style.input}
            placeholder="Enter Name"
          />
          <div className={style.dgr}>
            <ErrorMessage name="mobileNo" />
          </div>
        </div>
        <div>
          <label>Enter Password</label>
          <Field
            type="text"
            name="password"
            className={style.input}
            placeholder="Enter Name"
          />
          <div className={style.dgr}>
            <ErrorMessage name="password" />
          </div>
        </div>
        <div style={{marginTop:'10px', textAlign:'center'}}><Link href={`/Home/${12}`}> <button type="submit" className={style.btn}>Register</button></Link>
</div>
      </Form>
    </Formik>
    </div>
  );
};

export default page;
