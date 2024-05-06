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
    width: 30px;
    height: 30px;
    background-color: red;
    border:black 1px solid;
  }
  .block_n{
    width: 30px;
    height: 30px;
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
  .signin-section{
    position: absolute;
    top: 15vh;
    width: 70%;
    background-color: black;
    opacity: 1;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
    color: #ffffff;
    min-height: 65vh;
    max-height: 65vh;
    margin: 10vh 15vw;
    border: 2px wheat dotted;
    border-radius: 1rem;
  }
  .userunput-title h3{
    text-align: right;
    text-transform: uppercase;
    font-size: 1.4rem;
    font-weight: 800;
  }
  
  .signinInput{
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 1rem;
    margin-bottom: 2rem;
  }
  .signinInput input{
    height: 100%;
    font-size: 1.5rem;
  }
  .signin-section .section-title h2{
    text-align: center;
    text-transform: uppercase;
    margin-top: 1rem;
  }
  .signin-section .section-title h3{
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
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
  #radio input[type="radio"] {display: none; }
  #radio input:checked + .button {background: #5e7380; color: #fff; cursor: default; }
  #radio .button {display: inline-block; margin-right:1rem; padding: 10px 15px; background: #f7f7f7; color: #333; cursor: pointer; }
  #radio .button:hover {background: #bbb; color: #fff; }
  #radio .round {border-radius: 5px; }

`;

export default Wrapper;
