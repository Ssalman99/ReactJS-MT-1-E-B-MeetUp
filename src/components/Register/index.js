import Meetup from '../../context/Meetup'
import Header from '../Header'

import {
  RegisterContainer,
  RegisterPage,
  LoginImage,
  LoginForm,
  LoginHeading,
  Label,
  Input,
  Select,
  Options,
  LoginButton,
  Errormsg,
} from './StyledComponents'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Register = props => (
  <Meetup.Consumer>
    {value => {
      const {
        name,
        topic,
        error,
        updateName,
        updateTopic,
        changeRegistrationStatus,
        updateError,
      } = value

      const formSubmit = event => {
        event.preventDefault()

        changeRegistrationStatus()

        if (name !== '' && topic !== '') {
          const {history} = props
          history.replace('/')
        } else {
          updateError(true)
        }
      }
      const onInputVal = event => {
        updateName(event.target.value)
      }
      const selectChange = event => {
        updateTopic(event.target.value)
      }

      return (
        <>
          <RegisterContainer>
            <Header />
            <RegisterPage>
              <LoginImage
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                alt="website register"
              />
              <LoginForm onSubmit={formSubmit}>
                <LoginHeading>Let us join</LoginHeading>
                <Label htmlFor="name">NAME</Label>
                <Input
                  type="text"
                  id="name"
                  value={name}
                  placeholder="Your name"
                  onChange={onInputVal}
                />
                <Label htmlFor="topic">TOPICS</Label>
                <Select value={topic} id="topic" onChange={selectChange}>
                  {topicsList.map(each => (
                    <Options key={each.id} value={each.id}>
                      {each.displayText}
                    </Options>
                  ))}
                </Select>
                <LoginButton type="submit">Register Now</LoginButton>
                {error && <Errormsg>Please enter your name</Errormsg>}
              </LoginForm>
            </RegisterPage>
          </RegisterContainer>
        </>
      )
    }}
  </Meetup.Consumer>
)

export default Register
