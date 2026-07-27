import { ListGroup } from "react-bootstrap"
import ItemTarea from "./ItemTarea"

const ListaTarea = ({tareas, borrarTarea}) => {
  return (
    <ListGroup className="mt-5">
      {/* quiero dibujar un item tarea por cada tarea que suba el usuario tarea elemento del array indice posicion  map nos pide la key para ese valor unico de cada elemento*/}
      {
        tareas.map((tarea, indice) => <ItemTarea key={indice} tarea={tarea} borrarTarea={borrarTarea}></ItemTarea>)
      }
    </ListGroup>
  )
}

export default ListaTarea
