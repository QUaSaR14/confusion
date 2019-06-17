import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderComments({ comments }){
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

function RenderDish({ dish }){
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

const DishDetail = (props) => {


    const dishObj = props.dish;
    if(dishObj){
        return (
            <div className="container">
                <div className="row">
                    <RenderDish dish={dishObj} />
                    <RenderComments comments={dishObj.comments} />
                </div>
            </div>
        )
    }
    return ( <div></div> )
}

export default DishDetail;