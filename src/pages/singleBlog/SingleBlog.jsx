import React, { useEffect, useState } from 'react'
import AboutHero from '../about/aboutSections/AboutHero'
import CommentForm from './CommentForm';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { RiDeleteBinLine } from 'react-icons/ri'

import './singleBlog.css';

const SingleBlog = ({ blogs, setCategory }) => {

  const [comments, setComments] = useState([]);

  const DUMMY_COMMENTS=[
    {
      id: 1,
      name: 'Wade Warren',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.'
    },
    {
      id: 2,
      name: 'Jane Cooper',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.'
    },
    {
      id: 3,
      name: 'Robert Fox',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.'
    },
  ];

  useEffect(() => {
    setComments(DUMMY_COMMENTS)
  }, [])

  const blogID = useParams().ID;
  const navigate = useNavigate()

  const currentBlog = blogs.find(b => b.id === +blogID);

  if(!currentBlog) {
    return  (
      <h1>Error Page</h1>
    );
  };

  return (

    <>
      <AboutHero title={currentBlog.title} pages={[
        {
          id: 1,
          text: 'Home',
          path: '/'
        },
        {
          id: 2,
          text: 'blogs',
          path: '/blogs' 
        }
      ]} />
      <section className='single__blog__page-section section-space'>
        <div className="container">
          <div className="single_blog_page_content flex">
            <div className="left__single_blog flex column-start">
              <div className="blog_single_img">
                <img src={currentBlog.img} alt="" />
                <div className='flex'>
                  Posted by : Admin
                  <span className='col' />
                  <div>{currentBlog.formatDate}</div>
                  <span className='col' />
                  <button onClick={() => {
                    setCategory(currentBlog.category)
                    navigate('/blogs')
                  }}>
                    {currentBlog.category}
                  </button>
                </div>
              </div>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi harum vero suscipit sapiente doloribus earum nostrum sunt reprehenderit magnam eligendi, enim amet illo minus consequatur aut nemo veritatis corporis voluptatem.</p>
              <h3 className='text-gold'>How To Prepare Your Grill</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora aspernatur vel atque quidem quod sit, alias corporis doloremque et blanditiis, rem eos a, nisi temporibus nulla? Eos vel veniam sapiente.</p>
              <div className="list flex column-start">
                <p>Lorem, ipsum dolor.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem, ipsum dolor.</p>
              </div>
            </div>
            <div className="right__single_blog">
              <div className="card">
                <h3 className='text-gold'>All categories</h3>
                <div className="category__list flex column-start">
                  <button onClick={() => {
                  setCategory('all')
                  navigate('/blogs')
                }}
                >All</button>
                  <button onClick={() => {
                    setCategory('chef')
                  navigate('/blogs')
                }}
                >Chef</button>
                  <button onClick={() => {
                    setCategory('food')
                  navigate('/blogs')
                }}
                >Food</button>
                  <button onClick={() => {
                    setCategory('politician')
                  navigate('/blogs')
                }}
                >Politician</button>
                  <button onClick={() => {
                    setCategory('restaurant')
                  navigate('/blogs')
                }}
                >Restaurant</button>
                  <button onClick={() => {
                    setCategory('trending')
                  navigate('/blogs')
                }}
                >Trending</button>
                  <button onClick={() => {
                    setCategory('world')
                  navigate('/blogs')
                }}
                >World</button>
                </div>
              </div>
              <div className="card">
                <h3 className='text-gold'>Our Latest Posts</h3>
                <div className="posts__list flex column-start">
                  <div className="post">Post 1</div>
                  <div className="post">Post 2</div>
                </div>
              </div>
              <div className="card">
                <div className="tags_list">
                  <h3 className='text-gold'>Try</h3>
                  <div className="tags_list flex column-start">
                    <Link to='/'>Home</Link>
                    <Link to='/about-us'>About Us</Link>
                    <Link to='/team'>Our Team</Link>
                    <Link to='/contact-us'>Contact Us</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="comments flex column-start">
                <h3 className='text-gold'>{comments.length}  Comments</h3>
                {comments.map(c => (
                  <div className="comment relative" key={c.id}>
                    <div className="peron_name text-gold">{c.name} :</div>
                    <p>{c.comment}</p>
                    <button 
                      onClick={() => setComments(comments.filter(comment => comment.id !== c.id))} 
                      className='delete_comment'>
                        <RiDeleteBinLine />
                    </button>
                  </div>
                ))}
                <CommentForm setComments={setComments} />
              </div>
        </div>
      </section>
    </>

  )
}

export default SingleBlog