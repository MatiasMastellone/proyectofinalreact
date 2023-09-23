
import { useState, useEffect } from 'react';
import data from '../Data/product.json';
import Container from "react-bootstrap/Container";
import {ItemList} from './ItemList.jsx';
import { useParams } from 'react-router-dom';
import {getFirestore, getDocs, collection} from 'firebase/firestore';


export const ItemListContainer = (props) => {
	
	const [products, setProducts] = useState([]);

	const {id} = useParams();

	useEffect(() =>{

		const db = getFirestore();
		const refCollection = collection(db,"Items")

		getDocs(refCollection).then((result)=>{
			if(result.size !== 0){
				setProducts(result.docs.map((data)=>{return{id:data.id,...data.data()}}))
			}
		})

		// const promise = new Promise((resolve, reject)=>{
		// 	setTimeout(()=>resolve(data),2000)
		// });

		// promise.then((data) => {
		// 	if(!id){
		// 	setProducts(data)
		// 	}else {
		// 		const productFilter = data.filter((product)=> product.category === id);
				
		// 		setProducts(productFilter);
		// 	}

		
		// });

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