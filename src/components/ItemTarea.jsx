import { Button } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';

const ItemTarea = () => {
  return (
      <ListGroup.Item className='d-flex justify-content-between'>
        <Button variant='secondary'>❌</Button>
      </ListGroup.Item>
  );
}

export default ItemTarea
