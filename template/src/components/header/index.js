import { Link } from 'preact-router/match';
import style from './style.module.css';

export function Header() {
	return (
		<header class={style.header}>
			<a href="/" class={style.logo}>
				<img src="../../assets/preact-logo-inverse.svg" alt="Preact Logo" height="32" width="32" />
				<h1>Preact CLI</h1>
			</a>
			<nav>
				<Link activeClassName={style.active} href="/">
					Home
				</Link>
				<Link activeClassName={style.active} href="/profile">
					Me
				</Link>
				<Link activeClassName={style.active} href="/profile/john">
					John
				</Link>
			</nav>
		</header>
	);
}
