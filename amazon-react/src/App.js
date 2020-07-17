
    import React, { Component } from 'react'
    import ProductList from './components/ProductList';
    import ReviewList from './components/ReviewList';
    import {Container, Row, Col} from "react-bootstrap";
    import 'bootstrap/dist/css/bootstrap.min.css';

    export default class App extends Component {
      state = {
        products: [],
        reviews: []
      }
      render() {
        const mystyle = {
          
          backgroundColor: "#fce1f6",
          padding: "10px",
          fontFamily: "Arial",
          fontSize: "15px"
        };
        return (
          <Container style={mystyle}>
             <h1 className="mt-3 mb-5 display-3 text-center">Products</h1>
            <Row>
           
          <Col md={6}>
           
            <ProductList products={this.state.products} />
            </Col>
            <Col md={6} >
            <ReviewList reviews={this.state.reviews} />
            </Col>
            </Row>
          </Container>
        )
      }
      
      componentDidMount = async ()=>{
        const res = await fetch("http://localhost:3002/products")
        const resp = await fetch("http://localhost:3002/reviews")
     
        const products = await res.json()
        const reviews = await resp.json()
        this.setState({
          products: products,
          reviews: reviews
        })
      }
    }
    
    
    
    