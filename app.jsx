const Logo =() =>{
  return(
   <> 
   <img src="logo.png" alt="lili logo" width={150} />
   </> 
  )
  
}
ReactDOM.createRoot(document.getElementById('logo')).render(<Logo />)


const Home =() => {
  return (
    <>
     <a href="#">Home</a>
     <a href="#">Product</a>
     <a href="#">Company</a>
     <a href="#">Contact</a>
  </>)
}
ReactDOM.createRoot(document.getElementById('Home')).render(<Home />)




const App = () => {
    return (
     
      <>
     <header>Header image</header>
     <h1>About</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum corrupti harum ipsa repellat at vel nam nostrum expedita numquam distinctio dolores magnam repellendus est voluptatibus neque recusandae a, veniam dicta.</p>
      <h1>About</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum corrupti harum ipsa repellat at vel nam nostrum expedita numquam distinctio dolores magnam repellendus est voluptatibus neque recusandae a, veniam dicta.</p>
      <h1>About</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum corrupti harum ipsa repellat at vel nam nostrum expedita numquam distinctio dolores magnam repellendus est voluptatibus neque recusandae a, veniam dicta.</p>
      </>
    );
  };

  ReactDOM.createRoot(document.getElementById('app')).render(<App />);


  const Footer =() => {
    return (
      <>
      <h1>Content</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum magnam neque iusto quod dolorum eligendi, debitis dolores, ipsa aperiam rerum quisquam perspiciatis pariatur. Quis minima hic similique assumenda, reiciendis commodi!</p>
      <h1>Sub header</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim aperiam error, quas rerum quos rem perferendis tempora harum explicabo alias? Dolore vel unde expedita odio. Impedit qui totam atque dolorum.</p>
      <h1>Navigation</h1>
      <ul>
        <span>Home</span>
        <span>Product</span>
        <span>Company</span>
        <span>Contact</span>
        
      </ul>
      
     
      </>
    )
  }

  ReactDOM.createRoot(document.getElementById('footer')).render(<Footer />);