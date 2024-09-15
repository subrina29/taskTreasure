import { Button } from "@nextui-org/button";
import "./index.css";
import { Link } from "@nextui-org/link";
import { useNavigate } from "react-router-dom";

export default function IndexPage() {
  const navigate = useNavigate();
  return (
    <div className="index">
      <div className="left">
        <h1>Task Treasure</h1>
        <Button onClick={() => navigate("/home")} color="primary">
          Log In
        </Button>
        <p>Don't have an account?</p> <Link href="#">Sign Up</Link>
      </div>
      <div className="left">
        <h1>About the app</h1>
        <p>
          Task Treasure is a task management app that helps you stay organized
          and productive.
        </p>
      </div>
    </div>
  );
}
