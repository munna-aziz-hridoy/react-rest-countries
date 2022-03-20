import "./App.css";
import Countries from "./components/Countries/Countries";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Countries />
      <Footer />
    </div>
  );
}

// const Header = () => {
//   return (
//     <header className="bg-primary py-3">
//       <nav className="container">
//         <h3 className="text-white fw-bold ">Visit All Countries</h3>
//       </nav>
//     </header>
//   );
// };

// const Countries = () => {
//   const [countries, setCountries] = useState([]);
//   useEffect(async () => {
//     const res = await fetch("https://restcountries.com/v3.1/all/");
//     const data = await res.json();
//     setCountries(data);
//   }, []);
//   return (
//     <div className="container">
//       <div>
//         <h5 className="text-secondary py-4">Countries</h5>
//         <h6 className="text-primary py-1">
//           Available Countries: {countries.length}
//         </h6>
//       </div>
//       <div className="row row-cols-1 row-cols-md-3 g-4 my-4">
//         {countries.map((country) => {
//           return <Country data={country} />;
//         })}
//       </div>
//     </div>
//   );
// };

// const Country = (props) => {
//   const { data } = props;
//   const { flags, population, region, name } = data;
//   return (
//     <div className="col">
//       <div className="card h-100  border-0 shadow rounded-3">
//         <div className="card-body">
//           <img
//             src={flags.png}
//             className="card-img-top img-fluid py-3"
//             alt="..."
//           ></img>
//           <h5 className="card-title">{name.common}</h5>
//           <p className="card-text">
//             {name.common} has {population} of population. This country is under{" "}
//             {region}.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

export default App;
