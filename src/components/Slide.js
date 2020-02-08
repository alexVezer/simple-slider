import React from 'react';
import tachyons from 'tachyons';
import '../App.css';


const Slide = ({slide}) => {
	const { id, index, title, desc, photo} = slide;
		return ( 
		<div className="flex"  >
			<div className="fl w-60 mv5 black shadow-3 "> 
				<h1 className="f2 pv5 tc">{title} </h1>
				<p className=" mh5 fw5 tj"> {desc}	</p>
				<div className=" pv5 mh5 ">
					<a className="fr f2 dim" href=""> <i class="fab fa-github-square"></i> </a>
					<button className="fr pa2 mr3 dim br3 shadow-3" onClick=""> See live </button>
				</div>
			</div>
		</div>
	);
	
}

export default Slide;