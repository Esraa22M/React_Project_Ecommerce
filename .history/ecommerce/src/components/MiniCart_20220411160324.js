import React from 'react';
import {MiniCartContainer}from "../styles/Category.style"
class MiniCart extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
}

    render() {
        return <MiniCartContainer clicked={this.props.isCartClicked ? "flex" : "none"}>
        <h2 className='miniCart-heading'>my bag, <span> {}items</span></h2>

        </MiniCartContainer>;
    }
}
export default MiniCart;