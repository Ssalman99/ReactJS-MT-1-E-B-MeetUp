import React from 'react'

const Meetup = React.createContext({
  registered: false,
  name: '',
  activeId: 'ARTS_AND_CULTURE',
  error: false,
  updateTopic: () => {},
  updateName: () => {},
  updateError: () => {},
  changeRegistrationStatus: () => {},
})

export default Meetup
