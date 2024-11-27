import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Products from './Products';

const UseEffectExample = () => {
    const[products, setProducts] = useState([]);
    const[loading , setLoading] = useState(true);
    const [error, setError] = useState(null)


    useEffect(()=>{
        fetchData();
    },[])


    const fetchData =async()=>{
        try {
            const response = await axios.get("https://fakestoreapi.com/products")
            setProducts(response.data)
            setLoading(false)
           
        } catch (error) {
            console.log(error);
            setError(error)       
        }
    }


    if(loading){
        return <div>Loading......</div>
    }


    if(error){
        return <div>Error:{error}</div>
    }

    return (
        <div>
            {products.length>0 ?(
                products.map((product)=>(
                    <>
                    <div key={product.id}>
                     <Products product={product}/>
                    </div>
                    </>
                ))
            ):(<div> no users  </div>)}
        </div>
    );
};

export default UseEffectExample;
