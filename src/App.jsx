import React, { Component } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Support from "./components/support";
import Productlist from "./components/product/productlist";
import Wishlist from "./components/wishlist";

import Banner from "./components/banner";

export class App extends Component {
  render() {
    return (
      <div className="h-screen w-screen">
        <Navbar />
        <Banner/>
        <Productlist/>
        <Wishlist/>
        <Support />
        <Footer />
      </div>
    );
  }
}

export default App;
