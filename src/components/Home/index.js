import {Link} from 'react-router-dom'

import Meetup from '../../context/Meetup'

import Header from '../Header'

import {
  HomePage,
  HomeMenu,
  HomeHeading,
  HomeDescription,
  Button,
  MeetupImage,
  Name,
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

const Home = props => {
  const registerClicked = () => {
    const {history} = props
    history.replace('/register')
  }

  return (
    <Meetup.Consumer>
      {value => {
        const {registered, name, topic} = value

        const [display] = topicsList.filter(each => each.id === topic)

        const displayValue = [display.displayText]

        return (
          <>
            <HomePage>
              <Header />
              <HomeMenu>
                {registered ? (
                  <>
                    <Name>{`Hello ${name}`}</Name>
                    <HomeDescription>{`Welcome to ${displayValue}`}</HomeDescription>
                    <MeetupImage
                      src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                      alt="meetup"
                    />
                  </>
                ) : (
                  <>
                    <HomeHeading>Welcome to Meetup</HomeHeading>
                    <HomeDescription>
                      Please register for the topic
                    </HomeDescription>
                    <Link to="/register">
                      <Button type="button" onClick={registerClicked}>
                        Register
                      </Button>
                    </Link>
                    <MeetupImage
                      src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                      alt="meetup"
                    />
                  </>
                )}
              </HomeMenu>
            </HomePage>
          </>
        )
      }}
    </Meetup.Consumer>
  )
}

export default Home
