import styled from 'styled-components';

const Wrapper = styled.div`
  :root {
    /* w5 -- blogs css */
    --primary: #645cff;
    --primary-dark: #3c3799;
    --grey: #64748b;
    --grey-light: #f1f5f9;
    --grey-dark: #0f172a;
    --border-radius: 0.2rem;
  }
  .queen{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .queen_block{
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }
  .queen_block_row{
    display: flex;
  }
  .block_q{
    width: 50px;
    height: 50px;
    background-color: red;
    border:black 1px solid;
  }
  .block_n{
    width: 50px;
    height: 50px;
    background-color: white;
    border:black 1px solid;
  }
  .pages{
    position: absolute;
    top: 15vh;
    width: 100%;
    background-color: black;
    opacity: 1;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
    font-size: 10px;
    color: #ffffff;
    padding: 2rem;
    min-height: 85vh;
  }
  .twocol{
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .img {
    width: 100%;
    height: 15rem;
    display: block;
    object-fit: cover;
  }
  .section-content{
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
  }
  .section-content input{
    padding: 0.5rem;
    margin-left: 1rem;
    margin-right: 1rem;
    font-size: 1rem;
    width: 400px;
  }

  .section-title h2 {
    font-weight: 900;
    text-transform: capitalize;
    margin-bottom: 1.2rem;
    letter-spacing: 1px;
    font-size: 3rem;

  }

  .section-title h3 {
    text-decoration: underline;
    text-transform: capitalize;
    margin-bottom: 1rem;
    letter-spacing: 1px;
    font-size: 1.5rem;
    font-weight: 800;
    margin-top: 2rem;
  }

  .blogs-center {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .blogs-center2 {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
    gap: 2rem;
  }

  .blog {
    background-color: white;
    padding: 0.75rem;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.4);
    border-radius: var(--border-radius);
  }

  .blog-content {
    margin-top: 0.5rem;
  }

  .blog-content span {
    text-transform: uppercase;
    color: var(--primary);
    letter-spacing: 1.5px;
  }

  .blog-content h3 {
    text-transform: capitalize;
    margin: 0.5rem 0;
    letter-spacing: 1px;
    font-size: 1rem;
  }

  .section-content p:not(.phighlight){
    display: inline;
    color: var(--grey);
    margin-bottom: 0.5rem;
    font-size: 1rem;
    max-width: 90vw;
    line-height: 2rem;
  }
  
  .phighlight{
    display: inline;
    color: red;
    background-color: lightyellow;
    padding: 0.2rem 0.5rem;
    margin: 0 0.5rem;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    line-height: 3rem;
  }

  .blog-content a {
    text-transform: capitalize;
    color: var(--primary-dark);
    letter-spacing: 1px;
  }

  .blog-content .footer {
    display: flex;
    justify-content: space-between;
  }

  .blog-content .btns {
    display: flex;
    justify-content: space-around;
    gap: 5px;
  }

  .btn {
    cursor: pointer;
    color: #e9900a;
    background: rgb(64,64,64);
    border: #e9900a 1px solid;
    border-radius: var(--borderRadius);
    padding: 0.5rem 0.5rem;
    box-shadow: var(--shadow-1);
    transition: var(--transition);
    display: inline-block;
    font-size: 1rem;
  }
  .btn:hover {
    color: var(--primary-dark);
    background-color: #001933;
    border: #e9900a 1px solid;
    box-shadow: var(--shadow-3);
    font-weight: 800;
  }

  .blogs-footer-btns {
    margin: 3rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
  }

  .btn-add {
    padding: 0.5rem 1.2rem;
    font-size: 1.2rem;
    color: purple;
    background-color: lightskyblue;
  }

  .clear-all {
    padding: 0.5rem 1.2rem;
    font-size: 1.2rem;
    color: red;
    background-color: pink;
  }

  .load-all {
    padding: 0.5rem 1.2rem;
    font-size: 1.2rem;
    color: blue;
    background-color: lightblue;
  }

  @media screen and (min-width: 550px) {
    .blogs-center {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (min-width: 800px) {
    .blogs-center {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media screen and (min-width: 992px) {
    .blogs-center {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media screen and (min-width: 1200px) {
    .blogs-center {
      grid-template-columns: repeat(5, 1fr);
    }
  }
  @media screen and (min-width: 1400px) {
    .blogs-center {
      grid-template-columns: repeat(6, 1fr);
    }
  }
`;

export default Wrapper;
