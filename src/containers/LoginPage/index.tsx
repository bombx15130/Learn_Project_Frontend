import React from 'react'
import { useNavigate } from "react-router-dom";
import { render } from 'react-dom'
import { Form, Field } from 'react-final-form'
import Styles from './Styles'
import apis from '@apis'
import { UserLogin } from '@types'

const LoginPage = () => {
  const navigate = useNavigate();

  const onSubmit = async (values: UserLogin) => {
    const { username, password } = values
    // await sleep(300)
    // window.alert(JSON.stringify(values))
    apis.login({
      username,
      password
    }).then((res: any) => {
      const data = JSON.stringify({ username: res.data.data.username, token: res.data.data.token })
      sessionStorage.setItem("userInfo", data)
      navigate("/index")
    }).catch((error: any) => {
      console.log(error)
      if (error.response.status === 400) {
        alert(error.response.data.message)
      }
    })
  }

  return (
    <Styles>
      <main>
        <h1>Sign in XXX</h1>
        <Form
          onSubmit={onSubmit}
          validate={values => {
            console.log(values)
            const errors: any = {}
            if (!values.username) {
              errors.username = 'Required'
            }
            if (!values.password) {
              errors.password = 'Required'
            }
            return errors
          }}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
              <Field name="username">
                {({ input, meta }) => (
                  <>
                    <div>
                      <label>Username</label>
                      <input {...input} type="text" placeholder="Username" />
                    </div>
                    <div className="error-msg">{meta.error && meta.touched && <span>{meta.error}</span>}</div>
                  </>
                )}
              </Field>
              <Field name="password">
                {({ input, meta }) => (
                  <>
                    <div>
                      <label>Password</label>
                      <input {...input} type="password" placeholder="Password" />
                    </div>
                    <div className="error-msg">{meta.error && meta.touched && <span>{meta.error}</span>}</div>
                  </>
                )}
              </Field>
              <div className="buttons">
                <button type="submit" disabled={submitting}>
                  Submit
                </button>
              </div>
              <pre>{JSON.stringify(values)}</pre>
            </form>
          )}
        />
      </main>
    </Styles>
  )
}

export default LoginPage