import React, { Component } from "react"
import { Col, Card, Container, Row } from "react-bootstrap"

class ReviewListItem extends Component {
    render() {
        const { comment, rate, createdat} = this.props.item
        return (
            <Container>
                <Row>
                    <Col md={6}>
                        <Card style={{ width: "400px", backgroundColor: "whitesmoke" }}>
                            <Card.Body>
                                <Card.Title><h3>{comment}</h3></Card.Title>
                                <Card.Text>
                                    <h5>Rate: {rate}</h5>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">CreatedAt {createdat}</small>
                                
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default ReviewListItem