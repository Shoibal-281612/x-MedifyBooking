import React from 'react';
import blogImage from '../../Assets/news.png'; // Assuming blog_image.png is in the same directory

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      image: blogImage,
      category: 'Medical',
      date: 'March 31, 2022',
      title: '6 Tips To Protect Your Mental Health When You\'re Sick',
      author: 'Rebecca Lee',
    },
    {
      id: 2,
      image: blogImage,
      category: 'Medical',
      date: 'March 31, 2022',
      title: '6 Tips To Protect Your Mental Health When You\'re Sick',
      author: 'Rebecca Lee',
    },
    {
      id: 3,
      image: blogImage,
      category: 'Medical',
      date: 'March 31, 2022',
      title: '6 Tips To Protect Your Mental Health When You\'re Sick',
      author: 'Rebecca Lee',
    },
  ];

  return (
    <>
      <style>
        {`
          .blog-section {
            font-family: Arial, sans-serif;
            background-color: #f9fafb;
            text-align: center;
            padding: 10px;
            min-width:100vw;
          }

          .blog-header {
            margin-bottom: 40px;
          }

          .blog-category {
            color: #02a8ff;
            font-size: 1.1rem;
            font-weight: 600;
            margin-bottom: 10px;
          }

          .blog-title {
            font-size: 2.5rem;
            color: #1f2937;
            font-weight: 700;
            margin: 0;
          }

          .blog-cards-container {
            display: flex;
            justify-content: center;
            gap: 25px;
            flex-wrap: wrap; /* Allows cards to wrap on smaller screens */
            padding: 0 20px;
          }

          .blog-card {
            background-color: #fff;
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
            overflow: hidden;
            width: 350px; /* Fixed width as per design, will become flexible with media queries */
            text-align: left;
            transition: transform 0.2s ease-in-out;
          }

          .blog-card:hover {
            transform: translateY(-5px);
          }

          .blog-card-image {
            width: 100%;
            height: 300px;
            object-fit: cover;
            border-bottom: 1px solid #eee;
          }

          .blog-card-content {
            padding: 20px;
          }

          .blog-card-meta {
            display: flex;
            align-items: center;
            gap: 15px;
            color: #6b7280;
            font-size: 0.9rem;
            margin-bottom: 15px;
          }

          .blog-card-meta span {
            display: flex;
            align-items: center;
          }

          .blog-card-meta svg {
            margin-right: 5px;
            color: #02a8ff;
          }

          .blog-card-article-title {
            font-size: 1.25rem;
            font-weight: 600;
            color: #1f2937;
            margin-bottom: 10px;
            line-height: 1.4;
          }

          .blog-card-author {
            color: #6b7280;
            font-size: 0.9rem;
          }

          /* Responsive adjustments */
          @media (max-width: 1024px) {
            .blog-title {
              font-size: 2rem;
            }
            .blog-cards-container {
              gap: 20px;
            }
            .blog-card {
              width: 320px;
            }
          }

          @media (max-width: 768px) {
            .blog-section {
              padding: 30px 0;
            }
            .blog-title {
              font-size: 1.8rem;
            }
            .blog-cards-container {
              flex-direction: column;
              align-items: center;
              gap: 25px;
            }
            .blog-card {
              width: 90%; /* Take more width on small screens */
              max-width: 400px; /* Limit max width for readability */
            }
            .blog-card-image {
                height: 180px;
            }
          }

          @media (max-width: 480px) {
            .blog-category {
              font-size: 1rem;
            }
            .blog-title {
              font-size: 1.5rem;
            }
            .blog-card-content {
              padding: 15px;
            }
            .blog-card-meta, .blog-card-author {
              font-size: 0.8rem;
            }
            .blog-card-article-title {
              font-size: 1.1rem;
            }
          }
        `}
      </style>

      <section className="blog-section">
        <div className="blog-header">
          <p className="blog-category">Blog & News</p>
          <h2 className="blog-title">Read Our Latest News</h2>
        </div>
        <div className="blog-cards-container">
          {blogPosts.map((post) => (
            <div className="blog-card" key={post.id}>
              <img src={post.image} alt="Blog post" className="blog-card-image" />
              <div className="blog-card-content">
                <div className="blog-card-meta">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-medical-cross"
                    >
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                    {post.category}
                  </span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-calendar"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    {post.date}
                  </span>
                </div>
                <h3 className="blog-card-article-title">{post.title}</h3>
                <p className="blog-card-author">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-user"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  {post.author}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default BlogSection;