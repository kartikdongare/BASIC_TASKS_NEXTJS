"use client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { ChangeEvent, useState } from "react";
import * as Yup from "yup";
import style from './page.module.css'
import Link from 'next/link'
interface formValue {
  userName: string;
  password: string;
}
const validateLogin = Yup.object().shape({
  userName: Yup.string().required("username is required"),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/
    )
    .required("password is required"),
});

function page() {
//   const [loginData, setLoginData] = useState<formValue>({
//     userName: "",
//     password: "",
//   });
const [userName,setUserName]=useState('')
const [password,setPassword]=useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    console.log("logindata");
    alert();
  };
  return (
    <div className={style.regi}> 
    <Formik
      validationSchema={validateLogin}
      initialValues={{userName,password}}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label>username</label>
          <Field
            type="text"
            name="userName"
            className={style.input}
            placeholder="Enter Name"
            // onChange={(e:any)=>setUserName(e.target.value)}
            // value={userName}
          />
          <div className={style.dgr}>
            <ErrorMessage name="userName" />
          </div>
        </div>
       
        <div>
          <label>Password:-</label>
          <Field
            type="password"
            name="password"
            className={style.input}
            placeholder="Enter password"
            // onChange={handleChange},
          />
          <div className={style.dgr}>
            <ErrorMessage name="password" />
          </div>
        </div>
        <Link href={`/Home/${12}`}> <button type="submit" style={{marginTop:'20px'}} className={style.btn}>Login</button></Link>
       
      </Form>
    </Formik>
    </div>
  );
}

export default page;
