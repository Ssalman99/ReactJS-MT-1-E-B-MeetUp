import {
  NotFoundCointainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDescription,
} from './StyledComponents'

const NotFound = () => (
  <NotFoundCointainer>
    <NotFoundImage
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <NotFoundHeading>Page Not Found</NotFoundHeading>
    <NotFoundDescription>
      We are sorry, the page you requested could not be found
    </NotFoundDescription>
  </NotFoundCointainer>
)

export default NotFound
