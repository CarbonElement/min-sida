
<!--Delar upp sidan i två delar-->
<main>
	<div>
		<h1 class="name">Khaled Ahmed</h1>
	  	<h2>Här har jag samlat min uppgifter jag gjort i samband med webbutveckling i årskurs 2 på Maja Beskowgymnasiet!</h2>
	  	<h3>Inspirerade citat för min webbutvecklingsresa:</h3>
	  	<!--Under denna kommer vi lägga till fler element-->
	  	<p id="inspo">
			"The only way to learn a new programming language is by writing programs in it." - <strong>Dennis Ritchie</strong>, creator of the C programming language.
		</p>
		<p style="background-color:pink">
			"Every great developer you know got there by solving problems they were unqualified to solve until they actually did it." - <span>Patrick McKenzie, software engineer and entrepreneur</span>.
		</p>
	</div>
	  <!--Här kommer vi lägga till en bild senare i uppgiften 1.2.4 Extra styling-->  
	  
	<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
		<path fill="#FF0066" d="M29.5,-44C37.1,-41,41.4,-30.9,43.5,-21.3C45.7,-11.7,45.8,-2.5,46.6,8.2C47.5,19,49.1,31.5,43.9,38.7C38.7,45.9,26.6,47.8,14.3,53.8C1.9,59.9,-10.8,70,-18.4,66.2C-26,62.4,-28.6,44.7,-40.2,33.5C-51.8,22.4,-72.5,17.9,-75.7,9.6C-78.8,1.3,-64.3,-10.7,-56.1,-24.3C-47.8,-37.9,-45.8,-53,-37.5,-55.7C-29.2,-58.3,-14.6,-48.4,-1.8,-45.6C10.9,-42.7,21.9,-46.9,29.5,-44Z" transform=" translate(100,70)"  />
	</svg>
  
  </main>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,320L7.1,298.7C14.1,277,28,235,42,229.3C56.5,224,71,256,85,277.3C98.8,299,113,309,127,282.7C141.2,256,155,192,169,138.7C183.5,85,198,43,212,74.7C225.9,107,240,213,254,234.7C268.2,256,282,192,296,170.7C310.6,149,325,171,339,170.7C352.9,171,367,149,381,133.3C395.3,117,409,107,424,85.3C437.6,64,452,32,466,26.7C480,21,494,43,508,80C522.4,117,536,171,551,186.7C564.7,203,579,181,593,192C607.1,203,621,245,635,240C649.4,235,664,181,678,181.3C691.8,181,706,235,720,224C734.1,213,748,139,762,122.7C776.5,107,791,149,805,192C818.8,235,833,277,847,288C861.2,299,875,277,889,256C903.5,235,918,213,932,176C945.9,139,960,85,974,96C988.2,107,1002,181,1016,213.3C1030.6,245,1045,235,1059,240C1072.9,245,1087,267,1101,282.7C1115.3,299,1129,309,1144,266.7C1157.6,224,1172,128,1186,85.3C1200,43,1214,53,1228,96C1242.4,139,1256,213,1271,240C1284.7,267,1299,245,1313,245.3C1327.1,245,1341,267,1355,245.3C1369.4,224,1384,160,1398,149.3C1411.8,139,1426,181,1433,202.7L1440,224L1440,320L1432.9,320C1425.9,320,1412,320,1398,320C1383.5,320,1369,320,1355,320C1341.2,320,1327,320,1313,320C1298.8,320,1285,320,1271,320C1256.5,320,1242,320,1228,320C1214.1,320,1200,320,1186,320C1171.8,320,1158,320,1144,320C1129.4,320,1115,320,1101,320C1087.1,320,1073,320,1059,320C1044.7,320,1031,320,1016,320C1002.4,320,988,320,974,320C960,320,946,320,932,320C917.6,320,904,320,889,320C875.3,320,861,320,847,320C832.9,320,819,320,805,320C790.6,320,776,320,762,320C748.2,320,734,320,720,320C705.9,320,692,320,678,320C663.5,320,649,320,635,320C621.2,320,607,320,593,320C578.8,320,565,320,551,320C536.5,320,522,320,508,320C494.1,320,480,320,466,320C451.8,320,438,320,424,320C409.4,320,395,320,381,320C367.1,320,353,320,339,320C324.7,320,311,320,296,320C282.4,320,268,320,254,320C240,320,226,320,212,320C197.6,320,184,320,169,320C155.3,320,141,320,127,320C112.9,320,99,320,85,320C70.6,320,56,320,42,320C28.2,320,14,320,7,320L0,320Z"></path></svg>
  <style>
	main{
	  /*Styling för att dela upp sidan i två delar. */
	  /*Vi kommer gå igenom detta i detalj senare*/
	  margin: auto;
	  width: 80vw;
	  height: 70vh;
	  display: grid;
	  grid-template-columns: repeat(2,50%);
	  overflow: hidden;
	}
	div{
	  /*Styling för att centrera texten i behållaren*/
	  margin: auto;
	}
	
	h1{
		color:grey;
	}
	h2{
		color: rgb(255, 165, 0);
	}
	h3{
		color: #3cb371;
		font-family: sans-serif;
		font-weight: bold;
	}
	.name{
		font-family:'Gill Sans';
		font-size:50px;
	}
	#inspo{
    font-family: courier;
    font-size: 160%;
	}
	h1, h2, h3, p {
		display: inline-block;
		/*Ger utrymme mellan element*/
		margin: 10px;
	}

	span{
		color: green;
	}
	</style>
  