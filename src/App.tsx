import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import Verduidelijking from "./components/Verduidelijking";
import CompleteForm from "./components/CompleteForm";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const succes = () => {
    toast.success("Het formulier is correct ingevuld en succesvol verzonden!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div className="Container">
      <h1>MODEL A - AANGIFTE VAN ARBEIDSONGEVAL</h1>
      <CompleteForm onSuccess={succes} />
      <Verduidelijking />
      <ToastContainer />
    </div>
  );
}

export default App;
