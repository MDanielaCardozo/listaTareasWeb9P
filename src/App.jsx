import Footer from "./components/Footer"
import FormularioTarea from "./components/FormularioTarea"

const App = () => {
  return (
    /* Fragment */
    <>
    {/* navbar */}
    <main className="container my-4">
      <h1 className="text-center">Lista de tareas</h1>
      <FormularioTarea/>
    </main>
    <Footer/>
    </>
  )
}

export default App
