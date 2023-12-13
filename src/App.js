import './App.css';

function App() {
  return (
    <BrowserRouter>
    <NavBar dogs={App.defaultProps.dogs} />
      <Routes>
        <Route path="/colors/:color" element={<Color />} />
        <Route path="/colors" element={<ColorList />} />
        <Route path="/colors/new" element={<ColorPicker />} />
        <Route path="*" element={<Navigate to="/colors" />} />
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <h1> Welcome to the Color Factory </h1>
    //   <Link to={`/colors/new`}>Add new color</Link>
    //   <ColorList />
    // </div>
  );
}

export default App;
