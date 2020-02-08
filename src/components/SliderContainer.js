import React , {Component } from 'react';
import data from '../data/data';
import Slide from './Slide';
import Tachyons from 'tachyons';
import '../App.css';


class SliderContainer extends Component {

  constructor(props){
    super(props);
    this.state= { 
      slides: data.slides,
      slide: data.slides[0] 
    }
  }
	
nextSlide = () =>{
	const newIndex = this.state.slide.index+1;
	this.setState({
		slide:this.state.slides[newIndex-1]
	})
}

prevSlide = () => { 
	const newIndex = this.state.slide.index-1;
	this.setState({
		slide:this.state.slides[newIndex-1]
	})
}



render() {
const {slides, slide} = this.state;
	return (
		<div className="flex ">
			<img className="coverimg" src={slide.photo} alt="inslide" /> 	
			<div className="aa w-10 tc">
					<button className="arrows dim" onClick={ () =>this.prevSlide()}
					disabled={slide.index === 1} > 
					<i className="fas fa-chevron-left"></i>
					</button>
			</div> 

				<Slide slide={slide}/>
			
			<div className="w-10 tc aa">
					<button className="arrows dim" onClick={() =>this.nextSlide()} 
					disabled= {slide.index===data.slides.length} > 
					<i className="fas fa-chevron-right"></i> 
					</button>
			</div> 
		</div>
		
		);
	}
}

export default SliderContainer;