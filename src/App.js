import React from 'react';
import './App.css'; // Assuming you have a CSS file for styling
import Header from './components/Header';
import Footer from './components/Footer';
import ProductGrid from './components/ProductGrid';

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
