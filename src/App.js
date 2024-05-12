import React from 'react';
import './App.css'; 
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ProductGrid from './components/ProductGrid/ProductGrid';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
