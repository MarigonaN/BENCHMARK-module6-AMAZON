import React, {Component} from "react"
import {Container, Row, Col} from "react-bootstrap"
import ReviewListItem from "./ReviewListItem"

class ReviewList extends Component {
    state = {
        reviews: []
      }
    render (){
        return(
            <Container >
                <Row>
                     <Col md={4}>
                         {this.state.reviews.map(x => <ReviewListItem key={x._id} item={x} />)}
                    </Col>
                </Row>
            </Container>
        )
    }
    componentDidMount = async ()=>{
        const res = await fetch("http://localhost:3003/reviews")
       
        const reviews = await res.json()
        this.setState({
          reviews: reviews      })
      }
}

export default ReviewList