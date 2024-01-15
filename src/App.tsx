import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import Verduidelijking from "./components/Verduidelijking";
import CompleteForm from "./components/CompleteForm";
import { ToastContainer } from "react-toastify";
import { MyContext } from "./components/MyContext";
import useArbeidsOngevalState from "./components/useArbeidsOngevalState";
import { showSuccessToast } from "./components/showSuccessToast";

function App() {
  const { arbeidsOngevalData, setArbeidsOngevalData } =
    useArbeidsOngevalState();

  const succes = () => {
    showSuccessToast(
      "Het formulier is correct ingevuld en succesvol verzonden!"
    );
  };

  return (
    <div className="Container">
      <MyContext.Provider value={{ arbeidsOngevalData, setArbeidsOngevalData }}>
        <h1>MODEL A - AANGIFTE VAN ARBEIDSONGEVAL</h1>
        <CompleteForm onSuccess={succes} />
        <Verduidelijking />
        <ToastContainer />
      </MyContext.Provider>
    </div>
  );
}

export default App;
