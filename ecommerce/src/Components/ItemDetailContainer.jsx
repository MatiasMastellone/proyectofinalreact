
import { useState, useEffect } from 'react';
import Container from "react-bootstrap/Container";
import {ItemDetail} from './ItemDetail.jsx';
import { useParams } from 'react-router-dom';
import {getFirestore, getDoc, doc} from 'firebase/firestore';


export const ItemDetailContainer = (props) => {
	
	const [product, setProduct] = useState(null);

	const {id} = useParams();

	useEffect(() =>{

		const db = getFirestore();
		const idRef = doc(db,"Items",id)

		getDoc(idRef).then((result)=>{
			if(result.exists()){
				setProduct({id:id,...result.data()})
			}
		})
		
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