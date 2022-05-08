import CardInfo from './CardInfo.js';
import CardAbout from './CardAbout.js';
import CardInterests from './CardInterests.js';
import CardFooter from './CardFooter.js';

function CardMain() {
  	return (
  	  	<div className="card-main">
  	  		<div className="card-inner"	>
  	  			<CardInfo/>
  	  			<CardAbout/>
  	  			<CardInterests/>
  	  			<CardFooter/>
  	  		</div>  	  		
  	  	</div>
  	);
}

export default CardMain;