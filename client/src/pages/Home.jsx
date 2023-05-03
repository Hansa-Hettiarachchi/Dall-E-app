import React, {useState, useEffect } from 'react'
import { Loader, Card, FormFiled } from '../components'


const Home = () => {

  const [loading , setLoading] = useState(false);
  const [allPosts , setAllPosts] = useState(null);
  const [searchText, setSearchText] = useState("sssS")

  return (
    <section className='max-w-7xl mx auto'>
      <div>
        <h1 className='font-extrabold text-[#222328] text-[32px]'>
          The Comunity Showcase
        </h1>
        <p className='mt-2 text-[#666e75] text-[18px] max-w[500px]'> Browse Thorugh Dall-E Images</p>
      </div>

      <div className='mt-16 '>
        <FormFiled />
      </div>

      <div className='mt-10'>
        {loading ? (
          <div className='flex justify-center items-center'>
            <Loader />
          </div>
        ) : (
          <>
          {searchText && (
            <h2 className='font-meduim text-[#666e75] text-xl mb-3'>Showing results for <span className='text-[#222328]'>{searchText}</span>
            </h2>
          )}

          </>
        )}
      </div>

    </section>
  )
}

export default Home