import React, { useState } from "react"
import s from "./Footer.module.scss"
import styleContainer from "./../../common/styles/Container.module.css"

function Footer() {
 
	return (
		<div className={s.footerBlock}>
			<div className={s.footerForm}>
				<h2 className={`${styleContainer.container} ${s.footerTitle}`}>
					{" "}
					Подключить как рекломадотеля
				</h2>
				<div className={`${styleContainer.container} ${s.formFooter}`}>
					<form onSubmit={() => {}}>
						<input
							type='text'
							placeholder='Ваше имя'
							id='nameForm'
							className={s.inputFooter}
						/>
						<label htmlFor='nameForm' className={s.labelFooter}>
							Ваше имя
						</label>

						<input
							type='text'
							placeholder='Название бренда'
							id='brendForm'
							className={s.inputFooter}
						/>
						<label htmlFor='brendForm' className={s.labelFooter}>
							Название бренда
						</label>

						<input
							type='email'
							placeholder='Ваш e-mail'
							id='emailForm'
							className={s.inputFooter}
						/>
						<label htmlFor='emailForm' className={s.labelFooter}>
							Ваш e-mail
						</label>

						<input
							type='text'
							placeholder='Контактный телефон'
							id='phoneForm'
							className={s.inputFooter}
						/>
						<label htmlFor='phoneForm' className={s.labelFooter}>
							Контактный телефон
						</label>
						<br />
						<input
							type='checkbox'
							id='checkboxId'
							className={s.inputCheckboxFooter}
						/>
						<label htmlFor='checkboxId'>
							text text text <a href='#'>ссылка</a>
						</label>
						<button className={s.buttonFooter}>Начать сейчас</button>
					</form>
				</div>
			</div>
			<div className={`${styleContainer.container} ${s.footerInfo}`}>
				<p> 2015 </p>
				<a href='#'>Политика обработки данных</a>
				<a href='#'>Пользовательское соглашение</a>
				<a href='#'>Правила оказания услуг</a>
			</div>
		</div>
	)
}

export default Footer
