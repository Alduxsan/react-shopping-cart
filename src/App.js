import { Component } from 'react'
import ProductList from './components/ProductList'
import Layout from './components/Layout'
import Title from './components/Title'
import Navbar from './components/Navbar'

import './css/App.css'

class App extends Component {
  state = {
    products: [
      { name: 'Tomate', price: 1500, img: '/productos/tomate.jpg' },
      { name: 'Arvejas', price: 2600, img: '/productos/arbejas.jpg' },
      { name: 'Lechuga', price: 600, img: '/productos/lechuga.jpg' },
      { name: 'Tomate2', price: 1500, img: '/productos/tomate.jpg' },
      { name: 'Arvejas2', price: 2600, img: '/productos/arbejas.jpg' },
      { name: 'Lechuga2', price: 600, img: '/productos/lechuga.jpg' },
      { name: 'Tomate3', price: 1500, img: '/productos/tomate.jpg' },
      { name: 'Arvejas3', price: 2600, img: '/productos/arbejas.jpg' },
      { name: 'Lechuga3', price: 600, img: '/productos/lechuga.jpg' },
    ],
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Layout>
          <Title />
          <ProductList
            addToCart={() => console.log('Nothing happens')}
            products={this.state.products}
          />
        </Layout>
      </div>
    )
  }
}

export default App
