import * as React from 'react';
import './App.css'
import Header from './Header';
import Footer from './Footer';
import Employees from './Employees';

export default function App() {
  return (
    <main>
      <Header />
      <Employees />
      <Footer />
    </main>
  )
}
