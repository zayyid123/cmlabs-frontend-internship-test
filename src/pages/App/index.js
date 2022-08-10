import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import list from "../../config/route/listRoute";
import { Provider } from 'react-redux';
import { store } from "../../config/redux";
import './style.scss';
import Navbar from "../../component/navbar";
import Footer from "../../component/footer";

function App() {
  return (
    <Provider store={store}>
      <Router>

        <Navbar/>
        <Routes >
          {
            list.map((item) =>
              <Route key={item.name} path={item.path} element={<item.component />} />
            )
          }
        </Routes>
        <Footer/>

      </Router>

    </Provider>
  );
}

export default App;
