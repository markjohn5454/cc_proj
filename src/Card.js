import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export function CardLayout(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.imageUrl} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button href={props.buttonLink} variant="primary">{props.buttonText}</Button>
      </Card.Body>
    </Card>
  );
}


export default CardLayout;
