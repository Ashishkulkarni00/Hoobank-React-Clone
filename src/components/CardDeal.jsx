import React from 'react';
import  {styles, layout } from "../style";
import Button from './Button' ;
import {card} from '../assets';



const CardDeal = () => {
	return (
		<section className = {layout.section} style={{padding:"0 7% 0 7%", marginTop:"80px"}}>
			<div className = {layout.sectionInfo}>
				<h2 className={styles.heading2}>
					Find a better card deal <br className="sm:block hidden"/> in few easy steps.
				</h2>
				<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
					Arcu tortor, purus in mattis at sed integer faucibius. Aliquet quis aliquet eget
					mauris tortor. c aliquet ultrices ac, ametau.
				</p>
			<Button styles="mt-10"/>

			</div>
			<div className = {layout.sectionImg}> 
				<img src={card} className="w-[100%] h-[100%]" alt="card"/>
			</div>
		</section>
	)
}

export default CardDeal