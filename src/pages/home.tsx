import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";

const menuItems = ["Dashboard", "Tasks", "Logout"];

const HomePage = () => {
  const [tasks, setTasks] = useState(10);
  const [completedTasks, setCompletedTasks] = useState(9);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="home">
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
                  size="lg"
                >
                  {item}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </Navbar>
      </div>
      <div className="task-completed">
        <h1>Task Completed</h1>
        <div>
          {completedTasks} / {tasks}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
