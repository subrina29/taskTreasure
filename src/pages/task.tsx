import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";
("");
const menuItems = ["Dashboard", "Tasks", "Logout"];
const TaskPage = () => {
	const [tasks, setTasks] = useState(10);
	const [completedTasks, setCompletedTasks] = useState(9);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	console.log(tasks, setTasks, completedTasks, setCompletedTasks);
	return (
		<div className="task">
			<div>
				<Navbar onMenuOpenChange={setIsMenuOpen}>
					<NavbarContent>
						<NavbarMenuToggle
							aria-label={isMenuOpen ? "Close menu" : "Open menu"}
						/>
						<NavbarBrand>
							<p className="font-bold text-inherit">Task Treasure</p>
						</NavbarBrand>
					</NavbarContent>

					<NavbarContent
						justify="end"
						className="hidden max-[330px]:hidden min-[331px]:flex"
					>
						<NavbarItem>
							<h1>Welcome, User</h1>
						</NavbarItem>
					</NavbarContent>

					<NavbarMenu>
						{menuItems.map((item, index) => (
							<NavbarMenuItem key={`${item}-${index}`}>
								<Link
									color={
										index === 2
											? "primary"
											: index === menuItems.length - 1
												? "danger"
												: "foreground"
									}
									className="w-full"
									to={
										item === "Dashboard"
											? "/home"
											: item === "Tasks"
												? "/task"
												: "#"
									}
								>
									{item}
								</Link>
							</NavbarMenuItem>
						))}
					</NavbarMenu>
				</Navbar>
			</div>
			<div className="task-container">
				<h1>Daily Tasks</h1>

				<div>
					<h1>Bonus Tasks</h1>
				</div>
			</div>
		</div>
	);
};

export default TaskPage;
