import React, { Component } from "react"
import { Col, Card, Container, Row, Button } from "react-bootstrap"

class ProductListItem extends Component {
    render() {
        const { imageurl, productname, description, brand, price, category, createdat, updatedat } = this.props.item
      
        return (
            <Container>
                <Row>
                    <Col md={12}>
                        <Card className="mb-3" style={{ width: "400px", backgroundColor: "whitesmoke" }}>
                            <Card.Img variant="top" src={imageurl} />
                            <Card.Body>
                                <Card.Title><h3>{productname}</h3></Card.Title>
                                <Card.Text>
                                    <h5>Description: {description}</h5>
                                    <h5>Brand:   {brand}</h5>
                                    <h5>Category:   {category}</h5>
                                    <h5>Price:   {price}$</h5>
   
                                </Card.Text>
                                <Button variant="outline-dark">Add to Cart</Button>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">CreatedAt {createdat}</small><br></br>
                                <small className="text-muted">Last updated {updatedat}</small>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default ProductListItem