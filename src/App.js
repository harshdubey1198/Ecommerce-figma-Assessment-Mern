import Filter from "./components/filter";
import Header from "./components/header";
import HeadingBreadcrumb from "./components/headingBreadcrumb";

function App() {
  return (
    <div className="App">
      <Header />
      <HeadingBreadcrumb/>
      <Filter/>
    </div>
  );
}

export default App;
