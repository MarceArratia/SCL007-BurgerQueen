import React, { Component } from 'react';
import '../components/global/css/OrderKitchen.css'

class OrderKitchen extends Component {
  constructor() {
    super();

   
  }

  render() {
    return(
      <div className="contentOrder">
   <main id="accordion">
   <section id="pedido1">
   <a href="#pedido1"><h1>Pedido1</h1></a>
   <p>
     Café helado 1
     Sandwich 2
     Jugo 3
   </p>
   </section>

   <section id="pedido2">
   <a href="#pedido2"><h1>Pedido2</h1></a>
   <p>
     Café helado 2
     Sandwich 1
     Jugo 7
   </p>
   </section>

   <section id="pedido3">
   <a href="#pedido3"><h1>Pedido3</h1></a>
   <p>
     Café Americano 4
     Sandwich 1
     Jugo 0
   </p>
   </section>
   </main>
   </div>
  )}
}

export default OrderKitchen;