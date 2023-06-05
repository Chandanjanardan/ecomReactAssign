import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PrimarySearchAppBar from './Header';
import "./css/landingpage.css"

// use effect
// hook responsible for side effect like api calling

function LandingPage() {
    const [counter, setCounter] = useState(0)
    const [product, setProduct] = useState([])
    function handleCounter(){
        setCounter(counter+1)
    }
    console.log(counter)
    // console.log("i am redering in landing page componennt")
    // https://dummyjson.com/products 
    useEffect(() => {
        
        const apicaling = async () => {
            try {
                let response = await axios.get("https://dummyjson.com/products")
                setProduct(response.data.products)
                console.log(response.data)

            } catch (error) {
                console.log(error)
            }
        }
        apicaling()
        // let body= document.querySelector(".header");
        // console.log(body)
    }, [])
   
    return (
        <div className='header'>
            <PrimarySearchAppBar counter={counter}/>
           
            


            {
                product.length!==0 ? product.map((element)=>{
                    return(
                       <div className='card-container'> 
                            <div>
                {
                    // product.map(ele=>(<div> {ele.title}</div>))
                    product.length !== 0 ? product.map((element) => (
                        <div className='card'>
                            <img src={element.thumbnail} />
                            <div>
                            <div>{element.title}</div>
                            <div>{element.brand}</div>
                            <div className='price'> Price:{element.price}</div>
                            <div className='card-footer'>
                                <button className='addtocart' onClick={handleCounter}>Add to cart</button>
                                <button className='viewinfo'>View Info</button>
                            </div>
                            </div>
                        </div>
                    )):<div>No products found</div>
                
                }

            </div>
                        </div>
                    
                    )

                }):<div>No data</div>
                
            }
            
        </div >
    
    )
}


export default LandingPage