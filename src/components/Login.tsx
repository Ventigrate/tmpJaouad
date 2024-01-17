import { useState } from "react";
import { Badge, Button, Form } from "react-bootstrap";

const Login: React.FC<LoginProps> = ({ rol, setRol }) => {
  const [inputValue, setInputValue] = useState<string>("");
  
  return (
    <div className="login">
      <div className="rollen">
        <p>
          User1@hotmail.com <Badge bg="secondary">HR</Badge>{" "}
          {rol === "User1@hotmail.com" && (
            <Badge pill bg="success">
              {" "}
            </Badge>
          )}
        </p>

        <p>
          User2@hotmail.com <Badge bg="primary">SLACHTOFFER</Badge>{" "}
          {rol === "User2@hotmail.com" && (
            <Badge pill bg="success">
              {" "}
            </Badge>
          )}
        </p>

        <p>
          User3@hotmail.com <Badge bg="info">IDPB</Badge>{" "}
          {rol === "User3@hotmail.com" && (
            <Badge pill bg="success">
              {" "}
            </Badge>
          )}
        </p>

        <p>
          User4@hotmail.com <Badge bg="danger">MANAGER</Badge>{" "}
          {rol === "User4@hotmail.com" && (
            <Badge pill bg="success">
              {" "}
            </Badge>
          )}
        </p>
        
      </div>
      <div className="setUser">
        <p>Meld je aan met de gewenste rol:</p>
        <Form.Control
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button onClick={() => setRol(inputValue)}>Login</Button>
      </div>
    </div>
  );
};

export default Login;
