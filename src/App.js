import { useState, useCallback, useMemo } from "react";
import Todos from "./Todo";

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 10000; i++) {
      num += 1;
    }
    return num;
  };

  const Calculation = useMemo(() => expensiveCalculation(count), [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
      <h2>Expensive Calculation</h2>
      {Calculation}
    </>
  );
};
export default App;

/*******
 * The use case of
 * USECALLBACK -> If a child component has a dependency function
 *                from the parent component, this function should
 *                be memoized by useCallback to prevent rerender
 *                the child component
 * USEMEMOM - > If a  component has a heavy calculation function
 *              we can wrapp it into useMemo to prevent rerender
 *              the heavy function
 *
 * REACT.MEMO  -> same as USECALLBACK but not for function just for simple props
 *
 *
 */
