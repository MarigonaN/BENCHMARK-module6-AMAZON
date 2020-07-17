import React, {Component} from "react"
import {Container, Row, Col} from "react-bootstrap"
import ProductListItem from "./ProductListItem"

class ProductList extends Component {
    state = {
        products: []
      
      }
    render (){
        return(
            <Container >
                <Row>
                     <Col md={4}>
                         {this.state.products.map(x => <ProductListItem key={x._id} item={x} />)}
                      
                    </Col>
                </Row>
            </Container>
        )
    }
    componentDidMount = async ()=>{
        const res = await fetch("http://localhost:3002/products")
     
       
        const products = await res.json()
       
        this.setState({
          products: products 
        
     })
      }
}

export default ProductList