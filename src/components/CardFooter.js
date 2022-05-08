import linkedin from '../assets/icon-li.svg';
import github from '../assets/icon-gh.svg';

function CardFooter() {
  	return (
  	  	<div className="card-section-inner card-footer">	  		
  	  		<a href="#"><img src={linkedin} alt=""/></a>
  	  		<a href="#"><img src={github} alt=""/></a>
  	  	</div>
  	);
}

export default CardFooter;