import React from 'react'
import { FormGroup, Input, Label, Error } from '../../styles/contactInfoStyles'

const Email = ({ values, errors, handleChange, touched }) => {
  return (
    <FormGroup width='59%'>
      <Input
        id='Email'
        name='email'
        placeholder='Email'
        value={values.email}
        autoComplete='email'
        onChange={handleChange}
      />
      <Label htmlFor='email'>Enter your email here</Label>
      {errors?.email && touched?.email && <Error>{errors?.email}</Error>}
    </FormGroup>
  )
}

export default Email
