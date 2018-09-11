import React from "react";

const Infoblock = props =>(
	<div className="info-block">
		<ul>
			<li className="info-block__title">{props.info.title}</li>
			<li className="info-block__coardinates">{props.info.description}</li>
		</ul>
		{props.removerCurrent && <button onClick={props.removerCurrent} className="info-block__remove-btn">
			Remove
		</button>}
	</div>
);
export default Infoblock;