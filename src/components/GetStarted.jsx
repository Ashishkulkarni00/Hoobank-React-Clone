import React from 'react';
import { styles , layout } from "../style";
import {arrowUp} from '../assets';

const GetStarted = () => {
	return (
		// <div className = {`${styles.flexCenter} h-[90px] w-[90px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
			

		// 	<div className={`${styles.flexCenter} flex-col bg-primary md:w-[99%] md:h-[99%] roundex-full`}>
				
		// 		<div className={` ${styles.flexStart} flex-row `}>
		// 			<p className="font-poppins font-medium text-[15px] leading-[20px] mr-2">
		// 				<span className="text-gradient">Get </span>
		// 			</p>
		// 			<img src={arrowUp} className="w-[23px] h-[23px] object-contain" alt = "arrowUp"/>
		// 		</div>


		// 			<p className="font-poppins font-medium text-[18px] leading-[23px]">
		// 					<span className="text-gradient">Started </span>
		// 			</p>

		// 	</div>
			

		// </div>
		 <div className={`${styles.flexCenter} w-[110px] h-[110px] md:w-[100px] md:h-[100px]  lg:w-[120px] lg:h-[120px]  rounded-full bg-blue-gradient p-[2px] cursor-pointer ml-[2%]`}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">Get</span>
        </p>
        <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
      </div>
      
      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <span className="text-gradient">Started</span>
      </p>
    </div>
  </div>
	)
}

export default GetStarted