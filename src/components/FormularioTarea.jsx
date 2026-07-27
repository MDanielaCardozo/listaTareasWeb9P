import { Button, Form } from "react-bootstrap"
import ListaTarea from "./ListaTarea"
/* Este HOOK nos da habilidad extra a nuestro componente, en este caso validaciones */
import { useForm } from "react-hook-form"
import { useEffect, useState } from "react"

/* Un componente es una funcion, tiene una sola mision. No va a ser un form una table y una galeria de img seguramente sea un form o una table o una galeria de imagenes */

const FormularioTarea = () => {

  const {
       /* register controla todos los elementos del componente que queremos validar */
    /* register("nombre") → “Registra” el input para que React Hook Form lo escuche.
(Es como ponerle un micrófono al campo para que el formulario sepa qué escribe el usuario.) */
    register,
    /* handleSubmit funcion que se encarga del prevent default */
    /* handleSubmit(onSubmit) →
Valida todos los campos que fueron registrados.
Si todo está correcto, llama a la función onSubmit.
Si algo está mal, no envía el formulario. */
    handleSubmit,
    reset,
    /* si los datos son validos me va a dejar la ejecucion de mi propia funcion pero si no son validos jamas me va a dejar continuar con una funcion extra, los errores se van a guardar en este objeto que llamamos errors */
    formState: { errors },
  } = useForm()

  /* para obtener los datos metodo getItem */
  /* metodo parse nos convierte del formato JSON a un objeto */
  const tareasLocalstorage = JSON.parse(localStorage.getItem('tareasKey')) || []
 /* quiero guardar la tarea un array en un state, lo hacemos donde generamos el dato en este caso el formulario */
  /* const [tareas, setTareas] = useState([]); */
  const [ tareas, setTareas ] = useState(tareasLocalstorage)

    /* CICLO DE COMPONENTE */
  /* montaje NACE, actualiza CRECE, desmontaje  */
  /* si queremos que el useEffect ejecute ese codigo solo en montaje ,[] array vacio */

  useEffect(() => {
      /* para guardar en localStorage setItem */
    /* queremos que a medida que vamos creando las tareas se guarden en el localStorage y cuando borre queremos tambien que se actualice */
    /* metodo stringify que nos convierte a formato JSON en este caso el array */
    localStorage.setItem('tareasKey', JSON.stringify(tareas), [tareas])
  })

  //data es un objeto para acceder a la propiedad tarea data.tarea
  const posteriorValidacion = (data) => {

    //guardar la tarea en el array (no podemos usar metodos de array por ej push en un state porque no podemos manipular direactamente  al state solo podemos acceder a traves de la funcion disenada para actualizarlo setState)
    // la funcion setTareas nos permite actualizar el valor del state
    //le decimos copiame con el spread operator lo que sea que tenga y adicioname la tarea nueva
    /* entonces estamos creando una copia del array original y adicionado al final laultima tarea  */
    setTareas([...tareas, data.tarea])
    //limpiar el formulario
    reset()

  }

  /* cuando un state es un array no vamos a utilizar ningun metodo mutable(push, pop, splice) pero si podemos utilizar metodos inmutables ya no nos modifican el state como por ej(map, filter, find) ya que son metodos que nunca modifican el array original*/

  const borrarTarea = (nombreTarea) => {
     /* definimos en el parametro la tarea que queremos eliminar entonces la logica seria que toda tarea que sea distinta a nombreTarea se queda en el array tareasFiltradas, de esa forma eliminamos la tarea que coincida con nombreTarea */
    const tareasFiltradas = tareas.filter((ItemTarea) => ItemTarea !== nombreTarea);
    /* luego debemos actualizar el state con la funcion que me permite actualizar el state, en este caso setTareas*/
    setTareas(tareasFiltradas)
    /* por ultimo enviar por props la funcion borrarTarea al componente hijo hasta llegar al componente ItemTarea */
  }

  return (
    <section>
       <Form onSubmit={handleSubmit(posteriorValidacion)}>
         <Form.Group className="mb-3 d-flex justify-content-between">
          {/* operador spread de js itera los elementos de un array y los copia en otro  lugar */}
          {/* con que nombre queremos registrar este input nosotros indicamos tarea */}
            <Form.Control type="text" placeholder="Ingrese una tarea" {...register('tarea',{
              required: "La tarea es un dato obligatorio",
              minLength: {
                value: 2,
                message: "La tarea debe tener al menos 2 caracteres"
              },
              maxLength: {
                value: 50,
                message: "La tarea debe tener como maximo 50 caracteres"
              }
            })}/>
            <Button variant="primary" type="submit">➕</Button>
         </Form.Group>
          {/* si el usuario no cometio ningun error en la carga de ese input tarea ese objeto no se muestra, pero si cometio errores
        es decir si es que la tarea existe mostrame el msj lo hacemos llamando a la propiedad .message */}
         <Form.Text className="text-danger">{errors.tarea?.message}</Form.Text>
      </Form>
      <ListaTarea tareas={tareas} borrarTarea={borrarTarea}/>
    </section>
  )
}

export default FormularioTarea
