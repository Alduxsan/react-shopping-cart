import { Component } from 'react'
import ProductList from './components/ProductList'
import Layout from './components/Layout'
import Title from './components/Title'
import Navbar from './components/Navbar'

import './css/App.css'

import { vegetableList } from './dummyDB/vegetablesList'

class App extends Component {
  state = {
    products: vegetableList,
    cart: [],
    showCart: false,
  }

  addToCart = (item) => {
    const { cart } = this.state
    if (cart.find((x) => x.name === item.name)) {
      const newCart = cart.map((x) =>
        x.name === item.name
          ? {
              ...x,
              amount: x.amount + 1,
            }
          : x,
      )
      return this.setState({ cart: newCart })
    }

    return this.setState({
      cart: this.state.cart.concat({
        ...item,
        amount: 1,
      }),
    })
  }

  showCartList = () => {
    if (!this.state.cart.length) {
      return
    }
    this.setState({ showCart: !this.state.showCart })
  }

  render() {
    const { showCart } = this.state
    return (
      <div className="App">
        <Navbar
          cart={this.state.cart}
          showCart={this.state.showCart}
          showCartList={this.showCartList}
        />
        <Layout>
          <Title />
          <ProductList
            addToCart={this.addToCart}
            products={this.state.products}
          />
        </Layout>
      </div>
    )
  }
}

export default App
