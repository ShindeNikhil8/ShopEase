import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner';
import Product from '../components/Product'

function Home() {
    const API_URL = "https://fakestoreapi.com/products";

    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);

    useEffect( () => {
        fetchProductData();
    }, [] )

    async function fetchProductData() {
        setLoading(true);

        try{
            const result = await fetch(API_URL);
            const data = await result.json();

            setPosts(data);

        }
        catch(error)
        {
            console.log("SomeThing Went wrong !!!!!");
            alert("Check Your Internet Connection OR Something went wrong !!!!");
            setPosts([]);
        }
        setLoading(false);
    }

  return (
    <div className='mt-12'>
      {
        loading ? <Spinner/> :
        posts.length > 0 ? 
        (<div className='grid lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh] sm:grid-cols-2 grid-cols-1'>
        {
            posts.map( (post) => (
                <Product key={post.id} post={post} />
            ) )
        }
        </div>) :
        (<div className='flex justify-center items-center'>
            <p>No Data Found</p>
        </div>)
      }
    </div>
  )
}

export default Home
