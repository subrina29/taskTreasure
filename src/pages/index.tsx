import { Button } from "@nextui-org/button";
import "./index.css";
import { Link } from "@nextui-org/link";
import { useNavigate } from "react-router-dom";

export default function IndexPage() {
	const navigate = useNavigate();
	return (
		<div className="index">
			<div className="left">
				<h1 className="text-4xl font-bold mb-8">Task Treasure</h1>
				<Button
					onClick={() => navigate("/home")}
					color="primary"
					size="lg"
					className="mb-4"
				>
					Log In
				</Button>
				<p className="text-sm">
					Don't have an account?{" "}
					<Link href="#" className="ml-1 text-primary">
						Sign Up
					</Link>
				</p>
			</div>
			<div className="right">
				<h2 className="text-3xl font-semibold mb-4">About the app</h2>
				<p className="text-lg max-w-md">
					Task Treasure is a task management app that helps you stay organized
					and productive.
				</p>
			</div>
		</div>
	);
}
