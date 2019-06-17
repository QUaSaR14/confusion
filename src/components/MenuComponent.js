import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

//Functional Component --> used when there is no need of storing state 

function RenderMenuItem({ dish, onClick }) {
    return (
        <Card onClick={() => onClick(dish.id) } >
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay body className="ml-5">
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

//we dont use this.props in functional component coz it is coming as a parameter for function
const Menu = (props) => {

    const menu = props.dishes.map( (dish) => {
        return(
            //When we use list of items in React , every item requires a key attribute
            //key helps React to recognize each one of these elements 
            //while updating the screen keys will help React in identifying each elements uniquely
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <RenderMenuItem dish={dish} onClick={props.onClick} />
            </div>
        );
    });

    return(
        <div className="container">
            <div className="row">
                {menu} 
            </div>
        </div>

    );
}

export default Menu;