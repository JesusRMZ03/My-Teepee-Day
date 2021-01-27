import './Css/App.css';

function Menu() {
  return (
    <div className="Inicio">
      <nav id="menu">
			  <header className="major">
					<h2>Menu</h2>
				</header>
					<ul>
						<li><a href="index.html">Homepage</a></li>
						<li><a href="generic.html">Generic</a></li>
						<li><a href="elements.html">Elements</a></li>
						<li>
											<span className="opener">Submenu</span>
											<ul>
												<li><a href="#">Lorem Dolor</a></li>
												<li><a href="#">Ipsum Adipiscing</a></li>
												<li><a href="#">Tempus Magna</a></li>
												<li><a href="#">Feugiat Veroeros</a></li>
											</ul>
						</li>
						<li><a href="#">Amet Lacinia</a></li>
				  </ul>
			</nav>
    </div>
  );
}

export default Menu;
