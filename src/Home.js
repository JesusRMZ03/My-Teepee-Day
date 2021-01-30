import './Css/main.css';
import img from './img';

export const Home = ()=> {
  return (
      <div className="main">
						<div className="inner">


								<header id="header">
									<a href="index.html" className="logo"><strong>My Teepee Day</strong> by DojoDevs</a>
									<ul className="icons">
										<li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
										<li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
										<li><a href="#" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
									</ul>
								</header>


								<section id="banner">
									<div className="content">
										<header>
											<h1>Menu principal de My Teepee Day</h1>
											<p>A free and fully responsive site template</p>
										</header>
										<p>Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.</p>
										<ul className="actions">
											<li><a href="#" className="button big">Learn More</a></li>
										</ul>
									</div>
									<span className="image object">
										<img src="images/pic10.jpg" alt="" />
									</span>
								</section>

								<section>
									<header className="major">
										<h2>Erat lacinia</h2>
									</header>
									<div className="features">
										<article>
											<span className="icon fa-gem"></span>
											<div className="content">
												<h3>Portitor ullamcorper</h3>
												<p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
											</div>
										</article>
										<article>
											<span className="icon solid fa-paper-plane"></span>
											<div className="content">
												<h3>Sapien veroeros</h3>
												<p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
											</div>
										</article>
										<article>
											<span className="icon solid fa-rocket"></span>
											<div className="content">
												<h3>Quam lorem ipsum</h3>
												<p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
											</div>
										</article>
										<article>
											<span className="icon solid fa-signal"></span>
											<div className="content">
												<h3>Sed magna finibus</h3>
												<p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
											</div>
										</article>
									</div>
								</section>

								<section>
									<header className="major">
										<h2>Ipsum sed dolor</h2>
									</header>
									<div className="posts">
										<article>
											<a href="#" className="image"><img src={img/pic01} alt="" /></a>
											<h3>Interdum aenean</h3>
											<p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
											<ul className="actions">
												<li><a href="#" className="button">More</a></li>
											</ul>
										</article>
										<article>
											<a href="#" className="image"><img src={img/pic02} alt="" /></a>
											<h3>Nulla amet dolore</h3>
											<p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
											<ul className="actions">
												<li><a href="#" className="button">More</a></li>
											</ul>
										</article>
										<article>
											<a href="#" className="image"><img src={img/pic03} alt="" /></a>
											<h3>Tempus ullamcorper</h3>
											<p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
											<ul className="actions">
												<li><a href="#" className="button">More</a></li>
											</ul>
										</article>
										<article>
											<a href="#" className="image"><img src={img/pic04} alt="" /></a>
											<h3>Sed etiam facilis</h3>
											<p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
											<ul className="actions">
												<li><a href="#" className="button">More</a></li>
											</ul>
										</article>
										<article>
											<a href="#" className="image"><img src={img/pic05} alt="" /></a>
											<h3>Feugiat lorem aenean</h3>
											<p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
											<ul className="actions">
												<li><a href="#" className="button">More</a></li>
											</ul>
										</article>
										<article>
											<a href="#" className="image"><img src={img/pic06.jpg} alt="" /></a>
											<h3>Amet varius aliquam</h3>
											<p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
											<ul className="actions">
												<li><a href="#" className="button">More</a></li>
											</ul>
										</article>
									</div>
								</section>

						</div>
					</div>
  );
}

export default Home;
