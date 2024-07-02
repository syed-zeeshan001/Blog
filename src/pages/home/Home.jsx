import React, { useEffect } from 'react'

import HeroSection from '../../components/heroSection/HeroSection'
import BlogPostCard from '../../components/blogPostCard/BlogPostCard'
import Loader from '../../components/loader/Loader'
import Layout from '../../components/layout/Layout'

function Home() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Layout>
        <HeroSection />
        <BlogPostCard />
      </Layout>
    </div>
  )
}

export default Home
