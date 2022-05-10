import React from 'react';
import {CartSliderContainer} from "../styles/Cart.style";
import NextArrow from "../images/next-arrow.svg";
import PrevArrow from "../images/prev-arrow.svg";

class CartSlider extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        imageIndex:0
    };
}
handleNextImage = ()=>{
    let index = this.state.imageIndex;
    if(index >= this.props.images.length-1){
        index = -1;
    }
    index++;
    this.setState({imageIndex:index})
}
handlePrevImage = ()=>{
    let index = this.state.imageIndex;
    if(index <= 0){
        index = this.props.images.length;
    }
    index--;
    this.setState({imageIndex:index})
}
 
 
    render() {
        let{images}=this.props;
        return <CartSliderContainer className='flex flex-center items-center'>
             <img src={images[this.state.imageIndex]} alt="product" width="100%" height="100%"/> 
            {images.length>2?<div className='next'onClick={this.handleNextImage}><img src={NextArrow} alt="next-arrow"/> </div>:<></>}
            {images.length>2?<div className='prev' onClick={this.handlePrevImage}> <img src={PrevArrow}alt="prev-arrow" onClick={this.handlePrevImage}/></div>:<></>}

        </CartSliderContainer>;
    }
}

export default CartSlider;