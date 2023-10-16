import React from 'react';
import { quotes } from '../assets'; 
import { clients } from '../constants';
import  {styles, layout } from "../style";

const Clients = () => {
	return (
		<section  className = {`${styles.flexCenter} my-4 pl-[2%] pr-[5%]`}>
			<div style={{padding :"5% 0 5% 0"}} className = {`${styles.flexCenter} flex-wrap w-full`}>
				{
					clients.map((client) => (
						<div className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]` } key={client.id}>
							<img src = {client.logo} className="sm:w-[192px] w-[100px] object-contain" alt = "clients_logo"/>
						</div>
					))
				}
			</div>
		</section>
	)
}

export default Clients