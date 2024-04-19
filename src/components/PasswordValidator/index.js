// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  PasswordValidatorContainer,
  Heading,
  Text,
  PasswordInput,
  Textpara,
} from './styledComponents'

const PasswordValidator = () => {
  const [passwordInput, setPassword] = useState('')

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  return (
    <MainContainer>
      <PasswordValidatorContainer>
        <Heading>Password Validator</Heading>
        <Text>Check how strong and secure is your password</Text>
        <PasswordInput
          type="password"
          value={passwordInput}
          onChange={onChangePassword}
        />
        {passwordInput.length > 7 ? (
          ''
        ) : (
          <Textpara>Your password must be at least 8 characters</Textpara>
        )}
      </PasswordValidatorContainer>
    </MainContainer>
  )
}
export default PasswordValidator
