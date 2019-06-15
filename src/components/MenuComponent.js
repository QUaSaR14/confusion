import React , { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

class Menu extends Component{

    //demo of componentDidMount() --> lifecycle method
    componentDidMount() {
        console.log("Menu Component componentDidMount is invoked");
    }

    render(){

        console.log("Menu Component render is invoked");

        const menu = this.props.dishes.map( (dish) => {
            return(
                //When we use list of items in React , every item requires a key attribute
                //key helps React to recognize each one of these elements 
                //while updating the screen keys will help React in identifying each elements uniquely
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.props.onClick(dish.id) } >
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay body className="ml-5">
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
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
}

export default Menu;