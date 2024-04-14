import {Form,Button} from 'react-bootstrap';

const OverviewFrom = ({handleSubmit,revText,labelText,defaultValue}) => {
  const handleButtonClick = () => {
    console.log("Button clicked!");
    handleSubmit(); // Проверьте, вызывается ли функция handleSubmit
  };
 
 
 
  return (

    <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>{labelText}</Form.Label>
            <Form.Control ref={revText} as="textarea" rows={3} defaultValue={defaultValue} />
        </Form.Group>
        <Button variant="outline-info" onClick={handleSubmit}>Submit</Button>
    </Form>   

  )
}

export default OverviewFrom