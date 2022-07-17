import React, { useState, lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './layout/navbar/Navbar'
import LazyLoad from './components/lazyLoad/LazyLoad'
import Footer from './layout/footer/Footer'

const Home = lazy(() => import('./pages/home/Home'));
const About = lazy(() => import('./pages/about/About'));
const Services = lazy(() => import('./pages/services/Services'));
const Blogs = lazy(() => import('./pages/blogs/Blogs'));
const SingleBlog = lazy(() => import('./pages/singleBlog/SingleBlog'));
const Team = lazy(() => import('./pages/team/Team'));
const ContactUs = lazy(() => import('./pages/contactUs/ContactUs'));
const Error = lazy(() => import('./layout/footer/Footer'));

const App = () => {

  const [category, setCategory] = useState('all');

  const DUMMY_BLOGS = [
    {
      id: 1,
      img: 'https://wordpress.iqonic.design/product/wp-free/geritcht/wp-content/uploads/2021/09/14.png',
      date: '1 Sep',
      formatDate: 'SEPTEMBER 1, 2021',
      subtitle: 'Food / admin',
      title: 'Tips For Prepping And Caring For Your Grill',
      category: 'food'
    },
    {
      id: 2,
      img: 'https://wordpress.iqonic.design/product/wp-free/geritcht/wp-content/uploads/2021/09/13.png',
      date: '1 Sep',
      subtitle: 'Resturant / admin',
      formatDate: 'SEPTEMBER 1, 2021',
      title: 'Summer Cocktails And Mocktails',
      category: 'restaurant'
    },
    {
      id: 3,
      img: 'https://wordpress.iqonic.design/product/wp-free/geritcht/wp-content/uploads/2021/09/12.png',
      date: '1 Sep',
      subtitle: 'Trending / admin',
      formatDate: 'SEPTEMBER 1, 2021',
      title: 'How To Make Your Food Photographs Look Aesthetic',
      category: 'trending'
    },
    {
      id: 4,
      img: 'https://wordpress.iqonic.design/product/wp-free/geritcht/wp-content/uploads/2021/09/11.png',
      date: '7 Aug',
      formatDate: 'AUGUSTUS 7, 2021',
      subtitle: 'Chef / admin',
      title: 'Co-Ordination & Teamwork Tips From A Sous Chef',
      category: 'chef'
    },
    {
      id: 5,
      img: 'https://wordpress.iqonic.design/product/wp-free/geritcht/wp-content/uploads/2021/09/10.png',
      date: '20 Dec',
      subtitle: 'World / admin',
      formatDate: 'DECEMBER 20, 2021',
      title: 'Will Food Restaurant Ever Rule The World?',
      category: 'world'
    },
    {
      id: 6,
      img: 'https://wordpress.iqonic.design/product/wp-free/geritcht/wp-content/uploads/2021/09/9.png',
      date: '23 Dec',
      formatDate: 'DECEMBER 23, 2021',
      subtitle: 'Food / admin',
      title: 'Tips For Prepping And Caring For Your Grill',
      category: 'food'
    },
    {
      id: 7,
      img: 'https://wordpress.iqonic.design/product/wp-free/geritcht/wp-content/uploads/2021/08/5-1.png',
      date: '18 Apr',
      formatDate: 'APRIL 23, 2021',
      subtitle: 'Resturant / admin',
      title: '15 Things You Need To Know About Food Restaurant',
      category: 'restaurant'
    },
    {
      id: 8,
      img: 'https://wordpress.iqonic.design/product/wp-free/geritcht/wp-content/uploads/2021/08/6-1.png',
      date: '1 Sep',
      formatDate: 'SEPTEMBER 1, 2021',
      subtitle: 'Food / admin',
      title: 'Five Easy Ways To Facilitate Food Related Restaurant',
      category: 'food'
    },
    {
      id: 9,
      img: 'https://wordpress.iqonic.design/product/wp-free/geritcht/wp-content/uploads/2021/08/4-2.png',
      date: '3 Aug',
      formatDate: 'AUGUSTUS 3, 2021',
      subtitle: 'Restaurant / admin',
      title: 'The Guide On Food Restaurant To Help You Get Rich',
      category: 'restaurant'
    },
    {
      id: 10,
      img: 'https://wordpress.iqonic.design/product/wp-free/geritcht/wp-content/uploads/2021/08/3-2.png',
      date: '18 Aug',
      formatDate: 'AUGUSTUS 18, 2021',
      subtitle: 'Restaurant / admin',
      title: '10 Things You Can Learn From Food Related Restaurant',
      category: 'restaurant'
    },
    {
      id: 11,
      img: 'https://wordpress.iqonic.design/product/wp-free/geritcht/wp-content/uploads/2021/08/2-2.png',
      date: '3 Aug',
      formatDate: 'AUGUSTUS 3, 2021',
      subtitle: 'Trending / admin',
      title: 'The Trending Stuff About Food Related Restarant',
      category: 'trending'
    },
    {
      id: 12,
      img: 'https://wordpress.iqonic.design/product/wp-free/geritcht/wp-content/uploads/2021/08/1-4.png',
      date: '3 Aug',
      formatDate: 'AUGUSTUS 3, 2021',
      subtitle: 'Politician / admin',
      title: 'Learn All About Food Related Restarant From This Politician',
      category: 'politician'
    },
  ];

  const HomePage = 
  <Suspense fallback={<LazyLoad />}>
    <Home blogs={DUMMY_BLOGS} />
  </Suspense>

  const AboutPage = 
  <Suspense fallback={<LazyLoad />}>
    <About />
  </Suspense>

  const ServicesPage = 
  <Suspense fallback={<LazyLoad />}>
    <Services />
  </Suspense>

  const BlogsPage = 
  <Suspense fallback={<LazyLoad />}>
    <Blogs 
      setCategory={setCategory} 
      category={category} 
      blogs={DUMMY_BLOGS}
    />
  </Suspense>

  const SingleBlogPage = 
  <Suspense fallback={<LazyLoad />}>
    <SingleBlog 
      setCategory={setCategory} 
      blogs={DUMMY_BLOGS}
    />
  </Suspense>

  const TeamPage = 
  <Suspense fallback={<LazyLoad />}>
    <Team />
  </Suspense>

  const ContactUsPage = 
  <Suspense fallback={<LazyLoad />}>
    <ContactUs />
  </Suspense>

  const ErrorPage = 
  <Suspense fallback={<LazyLoad />}>
    <Error />
  </Suspense>



  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={HomePage}/>
        <Route path='/about-us' element={AboutPage}/>
        <Route path='/services' element={ServicesPage}/>
        <Route path='/blogs' element={BlogsPage}/>
        <Route path='/blogs/:ID' element={SingleBlogPage} />
        <Route path='/team' element={TeamPage} />
        <Route path='/contact-us' element={ContactUsPage} />
        <Route path='/*' element={ErrorPage} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
