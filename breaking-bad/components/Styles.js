import css from 'styled-jsx/css'

export const globalStyles=css.global`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html,body {
    background: #000 url('/background.jpg') no-repeat center center/cover;
    height: 100vh;
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
    min-height:100vh;
  }
  a {
    text-decoration: none;
  }
  h1 {
    display:flex;
    justify-content: center;
    font-size: 25px;
    border-bottom: 1px silver solid;
    padding-bottom: 10px;
    margin-bottom: 10px;
  }
  input[type='text'] {
    display: block;
    padding: 10px;
    font-size: 20px;
    border: 0;
    border-radius: 5px;
    width: 60%;
    margin: auto;
  }
  main {
    max-width: 1100px;
    margin: auto;
    padding: 0 20px;
  }
  .buttonWrapper{
    display:flex;
    align-items: center;
    justify-content: center;
    height:100px;
    width:100%;
    margin: 20px 0 40px 0;
  }
`
export const botonStyle= css`
  .button{
    display:flex;
    justify-content: center;
    align-items: center;
    background:rgba(0,54,7,.4);
    height:70px;
    padding:0 20px 0 20px;
    font-size: 3em;
    color:silver;
    border-radius: 10px;
    margin:0 20px 0 20px
  }
  .button:active{
    color:white;
    background-color: black;
    transition: background-color .2s ,color .2s;
  }
`
export const itemStyle= css`
  .card {
    cursor: pointer;
    background-color: transparent;
    height: 300px;
    perspective: 1000px;
  }
  .card img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
  .card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }
  .card:hover .card-inner {
    transform: rotateY(180deg);
  }
  .card-front,
  .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  .card-back {
    background-color: #333;
    color: white;
    padding: 20px;
    transform: rotateY(180deg);
  }
  .card li {
    list-style: none;
    padding-bottom: 10px;
  }
`
export const itemWrapperStyle=css`
  .cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
  }
  @media (max-width: 800px) {
    .cards {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 500px) {
    .cards {
      grid-template-columns: 1fr;
    }
  }
` 
export const footerStyle=css`
  footer{
    height:300px;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top: 20px;
    margin-bottom:20px;
    background: #000 url('/footer.jpg') no-repeat center center/cover;
    background-size: cover;
    color:black;
    font-weight: 700;
  }
`
export const headerStyle=css`
  .center {
    margin:20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
export const searchStyle=css`
  .search {
    margin:20px;
    height: 100px;
  }
`