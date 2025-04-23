import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css/animate.min.css'
import useRouteCustom from './hooks/useRouteCustom'
function App() {
  const routes = useRouteCustom();
  return routes;
}

export default App
