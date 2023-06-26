import React from 'react'
import { render } from 'react-dom'
import { Form, Field } from 'react-final-form'
import Styles from './Styles'
import apis from '@apis'

const sleep = (ms: any) => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async (values: any) => {
  // await sleep(300)
  // window.alert(JSON.stringify(values))
  apis.login({
    username: "paul666",
    password: "abc123"
  }).then((res: any) => {
    console.log(res)
  })
}

const LoginPage = () => (
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

export default LoginPage