import './App.css';


function Name(props) {
  return (
    <div>
        <h1>Hello, {props.name}!</h1>
    </div>
  );
}

function App() {
    return (
        <div>
            <Name name="Razi"/>
            <Name name="Zeno"/>
            <Name name="Pluto"/>
        </div>
    )
}

export default App;
