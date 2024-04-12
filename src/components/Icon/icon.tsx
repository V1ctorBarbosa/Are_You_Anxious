//Styles
import { Container } from "./icon.styles"

//Types
import { IIcon } from './icon.types'

function Icon({socialIcon, link}: IIcon) {
  return (
    <Container href={link}>{socialIcon}</Container>
  )
}

export default Icon