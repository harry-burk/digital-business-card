import img from '../assets/harry.jpg';

function CardInfo() {
  	return (
  	  	<div className="card-info">  	  		
  	  		<div className="card-img" style={{backgroundImage: "url(" + img + ")"}}></div>

  	  		<div className="card-section-inner card-info-inner">
  	  			<h1>Harry Burk</h1>
  	  			<h3>Frontend Developer</h3>
  	  			<p><a href="harryburk.com" target="_blank">harryburk.com</a></p>
  	  			<button>Email</button>
  	  		</div>  	  			
  	  	</div>
  	);
}

export default CardInfo;