
import { useState, useEffect } from 'react';
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
				if(!id){
					setProducts(result.docs.map((data)=>{return{id:data.id,...data.data()}}))
				}else{
					const productList=result.docs.map((data)=>{return{id:data.id,...data.data()}})

					setProducts(productList.filter((dt)=>dt.category===id));



				}
				
			}
		})
		
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