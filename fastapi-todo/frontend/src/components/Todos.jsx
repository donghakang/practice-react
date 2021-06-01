import React, { useState, useEffect, useContext } from "react";
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

const TodosContext = React.createContext({
  todos: [],
  fetchTodos: () => {},
});






const AddTodo = () => {
  const [item, setItem] = useState("");
  const { todos, fetchTodos } = useContext(TodosContext);

  const handleInput = (event) => {
    setItem(event.target.value);
  };

  const handleSubmit = (event) => {
    const newTodo = {
      id: `${todos.length + 1}`,
      item: item,
    };

    fetch("http://localhost:8000/todo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo),
    })
      .then((res) => console.log(res))
      .then(fetchTodos);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup size="md">
        <Input
          pr="4.5rem"
          type="text"
          placeholder="Add a todo item"
          aria-label="Add a todo item"
          onChange={handleInput}
        />
      </InputGroup>
    </form>
  );
};



const UpdateTodo = (props) => {
  const [todo, setTodo] = useState(props.item);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { fetchTodos } = useContext(TodosContext);
  const handleUpdate = async () => {
    await fetch(`http://localhost:8000/todo/${props.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ item: todo }),
    }).then(console.log(todo, props.id, props.item));
    onClose();
    await fetchTodos();
  };

  return (
    <>
      <Button w="4rem" h="1.5rem" size="sm" onClick={onOpen}>
        Update
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Todo</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type="text"
                placeholder="Edit todo item"
                aria-label="Edit todo item"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
              />
            </InputGroup>
          </ModalBody>
          <ModalFooter>
            <Button h="1.5rem" size="sm" onClick={handleUpdate}>
              Update
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};



const DeleteTodo = (props) => {
  const [todo, setTodo] = useState(props.item);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { fetchTodos } = useContext(TodosContext);
  const handleDelete = async () => {
    await fetch(`http://localhost:8000/todo/${props.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: props.id }),
    }).then(console.log(todo, props.id, props.item));
    onClose();
    await fetchTodos();
  };

  return (
    <>
      <Button w="4rem" h="1.5rem" size="sm" onClick={onOpen}>
        Delete
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete Todo</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Do you really wish to delete?</Text>
          </ModalBody>
          <ModalFooter>
            <Button h="1.5rem" size="sm" onClick={handleDelete}>
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};





// TODO VISUALIZATION
const TodoComponent = (props) => {
  return (
    <Flex justify="space-between">
      {props.item}
      <Flex>
        <UpdateTodo id={props.id} item={props.item} />
        <DeleteTodo id={props.id} item={props.item} />
      </Flex>
    </Flex>
  );
};

const TodoList = () => {
  const { todos, fetchTodos } = useContext(TodosContext);

  return (
    <>
      {todos.map((todo) => (
        <TodoComponent  id={todo.id} item={todo.item} />
      ))}
    </>
  );
};

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const fetchTodos = async () => {
    const response = await fetch("http://localhost:8000/todo");
    const todos = await response.json();
    setTodos(todos.data);
  };
  useEffect(() => {
    fetchTodos();
    // fetch("http://localhost:8000/todo")
    //   .then((res) => res.json())
    //   .then((res) => setTodos(res.data));
  }, []);

  return (
    <TodosContext.Provider value={{ todos, fetchTodos }}>
      <AddTodo />
      <Stack spacing={5}>
        <TodoList />
      </Stack>
    </TodosContext.Provider>
  );
};

export default Todos;
