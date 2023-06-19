import { Container } from 'react-bootstrap'
import homeImage from '../../../src/assets/images/homeImage.jpeg'

export const MainImage = () => {
    return (
        <Container>
            <img src={homeImage} style={{width: "100%"}} />
        </Container>
    )
}