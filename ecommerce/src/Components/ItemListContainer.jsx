
import { useState, useEffect } from 'react';
import data from '../Data/product.json';
import Container from "react-bootstrap/Container";
import {ItemList} from './ItemList.jsx';
import { useParams } from 'react-router-dom';


export const ItemListContainer = (props) => {
	
	const [products, setProducts] = useState([]);

	const {id} = useParams();

	useEffect(() =>{

		const promise = new Promise((resolve, reject)=>{
			setTimeout(()=>resolve(data),2000)
		});

		promise.then((data) => {
			if(!id){
			setProducts(data)
			}else {
				const productFilter = data.filter((product)=> product.category === id);
				
				setProducts(productFilter);
			}

		
		});

	},[id])

	return (
		<Container>	
            <h1>item list container {props.greetings}</h1>
			<div style={{display:"flex"}}>
				<ItemList products={products}/>
			</div>
		</Container>
		
	);
};  