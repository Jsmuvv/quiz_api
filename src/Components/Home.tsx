import { Card } from 'react-bootstrap'


type HomeProps = {}

export default function Home({}: HomeProps) {
    return (
        <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src="/Users/javansmalls/Desktop/Kekambas_137/Week9/Quiz_Api/quiz_Api/src/views/Sponge And Pat Studying.jpeg" />
            <Card.Body>
        <Card.Title>QUIZ TIME </Card.Title>
        <Card.Text>
        TIME TO TAKE A QUIZ!!!!!!!!!!!!!!
        </Card.Text>
            </Card.Body>
        </Card>
    );
}
