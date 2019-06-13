import React , { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Menu extends Component{

    constructor(props)
    {
        super(props);

        //state -> stores the properties related to this component that we can make use of
        this.state = {
            selectedDish : null,
        };

    }

    onDishSelect(dish){
        this.setState({ selectedDish : dish });
    }

    renderDish(dish){
        if(dish){
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        return(
            <div></div>
        );
    }

    render(){
        const menu = this.props.dishes.map( (dish) => {
            return(
                //When we use list of items in React , every item requires a key attribute
                //key helps React to recognize each one of these elements 
                //while updating the screen keys will help React in identifying each elements uniquely
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelect(dish) } >
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
                <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>

        );
    }
}

export default Menu;