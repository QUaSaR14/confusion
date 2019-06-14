import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    renderComments(comments){
        if(comments){
            const commentList = comments.map( comment => {
                return(
                    <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author},
                            &nbsp;
                            {new Intl.DateTimeFormat('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: '2-digit'
                                }).format(new Date(comment.date))}
                        </p>
                    </li>
                );
            });

            return (
                <div className='col-12 col-md-5 m-1'>
                    <h4> Comments </h4>
                    <ul className='list-unstyled'>
                        {commentList}
                    </ul>
    
                </div>
            )
        }
        return( <div></div> )
    }

    renderItem(dish){
        if(dish){
            return(
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardImgOverlay body className="ml-5">
                                <CardTitle>{dish.name}</CardTitle>
                            </CardImgOverlay>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        }
        return(
            <div></div>
        );
    }

    render() {
        const dishObj = this.props.dish;
        if(dishObj){
            const dish = this.renderItem(dishObj);
            const comments = this.renderComments(dishObj.comments);
            return (
                <div className="row">
                    {dish}
                    {comments}
                </div>
            )
        }
        return ( <div></div> )
    }
}

export default DishDetail;