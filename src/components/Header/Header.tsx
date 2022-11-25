import React, { useState } from "react"
import s from "./Header.module.scss"
import styleContainer from "./../../common/styles/Container.module.css"

function Header() {
	return (
		<div className={s.headerBlock}>
			<div className={`${styleContainer.container} ${s.header}`}>
				<div className={s.navbar}>
					<img src='#' alt='logo ' className={s.logo} />
					<img src='#' alt='menu' className={s.menu} />
				</div>

				<p>
					text text text text text{" "}
					<img src='#' alt='icon' className={s.imgUser} />{" "}
				</p>
				<p>
					text text text text text{" "}
					<img src='#' alt='icon' className={s.imgUser} />{" "}
				</p>
				<div className={s.buttonQuestion}>
					<div>
						<img src='#' alt='logo ' className={s.logo} />
						question
						<img src='#' alt='logo ' className={s.logo} />
					</div>
					<div>
						<button>блогер</button>
						<button>работадатель</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
