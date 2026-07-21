import { Button, Form } from "react-bootstrap"
import ListaTarea from "./ListaTarea"

const FormularioTarea = () => {
  return (
    <section>
       <Form >
         <Form.Group className="mb-3 d-flex justify-content-between">
            <Form.Control type="text" placeholder="Ingrese una tarea"/>
            <Button variant="primary" type="submit">➕</Button>
         </Form.Group>
         <Form.Text className="text-danger"></Form.Text>
      </Form>
      <ListaTarea/>
    </section>
  )
}

export default FormularioTarea
