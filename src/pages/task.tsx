import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { CheckboxGroup, Checkbox } from "@nextui-org/checkbox";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Tooltip } from "@nextui-org/tooltip";
import "./task.css";

const menuItems = ["Dashboard", "Tasks", "Logout"];

interface Task {
  id: string;
  label: string;
  completed: boolean;
}

const TaskPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([
    { id: "1", label: "Complete project proposal", completed: false },
    { id: "2", label: "Review code changes", completed: false },
    { id: "3", label: "Update documentation", completed: false },
    { id: "4", label: "Schedule team meeting", completed: false },
    { id: "5", label: "Prepare presentation", completed: false },
  ]);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const handleCheckboxChange = (taskId: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const [newTaskLabel, setNewTaskLabel] = useState("");

  const handleAddTask = () => {
    if (newTaskLabel.trim()) {
      const newTask: Task = {
        id: (tasks.length + 1).toString(),
        label: newTaskLabel.trim(),
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setNewTaskLabel("");
    }
  };

  const handleDeleteTask = (taskId: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleEditTask = (task: Task) => {
    setEditingTask(task);
  };

  const handleSaveEdit = () => {
    if (editingTask) {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === editingTask.id ? { ...editingTask } : task
        )
      );
      setEditingTask(null);
    }
  };

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
        <div className="task-container-item-1">
          <h1>Daily Tasks</h1>
          <div className="flex gap-2 mb-4">
            <Input
              placeholder="New task"
              value={newTaskLabel}
              onChange={(e) => setNewTaskLabel(e.target.value)}
            />
            <Button onClick={handleAddTask}>Add Task</Button>
          </div>
          <CheckboxGroup>
            {tasks.map((task) => (
              <div key={task.id} className="flex items-center gap-2">
                <Checkbox
                  value={task.id}
                  isSelected={task.completed}
                  onValueChange={() => handleCheckboxChange(task.id)}
                >
                  {editingTask?.id === task.id ? (
                    <Input
                      value={editingTask.label}
                      onChange={(e) =>
                        setEditingTask({
                          ...editingTask,
                          label: e.target.value,
                        })
                      }
                      className="ml-2"
                    />
                  ) : (
                    task.label
                  )}
                </Checkbox>
                <Tooltip
                  content={editingTask?.id === task.id ? "Save" : "Edit"}
                >
                  <Button
                    size="sm"
                    onClick={() =>
                      editingTask?.id === task.id
                        ? handleSaveEdit()
                        : handleEditTask(task)
                    }
                  >
                    {editingTask?.id === task.id ? "Save" : "Edit"}
                  </Button>
                </Tooltip>
                <Tooltip content="Delete">
                  <Button
                    size="sm"
                    color="danger"
                    onClick={() => handleDeleteTask(task.id)}
                  >
                    Delete
                  </Button>
                </Tooltip>
              </div>
            ))}
          </CheckboxGroup>
        </div>
        <div className="task-container-item-2">
          <h1>***Bonus***</h1>
        </div>
      </div>
    </div>
  );
};

export default TaskPage;
