
import { useState, useEffect } from 'react';
import data from '../Data/product.json';
import Container from "react-bootstrap/Container";
import {ItemDetail} from './ItemDetail.jsx';
import { useParams } from 'react-router-dom';
import {getFirestore, getDocs, collection} from 'firebase/firestore';


export const ItemDetailContainer = (props) => {
	
	const [product, setProduct] = useState(null);

	const {id} = useParams();

	useEffect(() =>{

		const db = getFirestore();
		const refCollection = collection(db,"Items")

		getDocs(refCollection).then((result)=>{
			if(result.size !== 0){
				setProduct(result.docs.map((data)=>{return{id:data.id,...data.data()}}))
			}
		})


		// const getItem = new Promise((resolve, reject)=>{
		// 	setTimeout(()=>{
		// 		const productById = data.find((product)=>product.id === parseInt(id));
		// 		resolve(productById)
		// 	},2000)
		// });

		// getItem.then((data) => setProduct(data));

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