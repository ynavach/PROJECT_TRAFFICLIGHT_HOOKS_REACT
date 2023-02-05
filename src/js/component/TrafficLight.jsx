import React, { useState } from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const TrafficLight = () => {

	const [prender, setPrender] = useState(null);
		
	return (
		<div className="container">
			<div className="stick"></div>
			<div className="mytrafficlight">
		
				<span className={prender=="red" ? `circlelight redshadow` : `circlelight red` } onClick={()=>setPrender("red")}></span>
				<span className={prender=="yellow" ? `circlelight yellowshadow` : `circlelight yellow` } onClick={()=>setPrender("yellow")}></span>
				<span className={prender=="green" ? `circlelight greenshadow` : `circlelight green` }  onClick={()=>setPrender("green")}></span>
			</div>
		</div>
	);
};

export default TrafficLight;
