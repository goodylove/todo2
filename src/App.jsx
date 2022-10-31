import "./App.css";
import Input from "./Components/Inputs/input";
import Items from "./Components/Items/Items";

function App() {
  const data = ["read", "cook", "play", "sleep"];

  return (
    <>
      <div>
        <form action="">
          <Input />
          <button>Add</button>
        </form>
        <ul>
          {data.map((list, idl) => {
            return <Items list={list} idl={idl} />;
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
