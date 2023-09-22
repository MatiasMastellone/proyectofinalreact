
import { useState, useEffect } from 'react';
import data from '../Data/product.json';
import Container from "react-bootstrap/Container";
import {ItemDetail} from './ItemDetail.jsx';
import { useParams } from 'react-router-dom';


export const ItemDetailContainer = (props) => {
	
	const [product, setProduct] = useState(null);

	const {id} = useParams();

	useEffect(() =>{

		const getItem = new Promise((resolve, reject)=>{
			setTimeout(()=>{
				const productById = data.find((product)=>product.id === parseInt(id));
				resolve(productById)
			},2000)
		});

		getItem.then((data) => setProduct(data));

	},[])

	


	if (!product)return( <div>Loading...</div> )


	return (
		<Container>	
            <h1>item list container</h1>
			<div style={{display:"flex"}}>
			<ItemDetail product={product}/>
			</div>
		</Container>
		
	);
};  