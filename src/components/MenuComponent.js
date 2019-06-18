import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

//Functional Component --> used when there is no need of storing state 
//to use links as params we do {`/some/{id}`} 
function RenderMenuItem({ dish }) {
    return (
        <Card>
            <Link to={`/menu/${dish.id}`} >
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay body className="ml-5">
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Link>
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
                <RenderMenuItem dish={dish} />
            </div>
        );
    });

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/home" >Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>Menu</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Menu</h3>
                </div>
            </div>
            <div className="row">
                {menu} 
            </div>
        </div>

    );
}

export default Menu;