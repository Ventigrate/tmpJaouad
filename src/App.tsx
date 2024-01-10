import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Verduidelijking from "./components/Verduidelijking";
import CompleteForm from "./components/CompleteForm";

function App() {
  return (
    <div className="Container">
      <h1>MODEL A - AANGIFTE VAN ARBEIDSONGEVAL</h1>
      <CompleteForm />
      <Verduidelijking />
    </div>
  );
}

export default App;
