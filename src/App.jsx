import "./App.css";
function App() {
  return (
    <>
      <nav>
        <div className="logo">
          <img src="images/logo.png" alt="logo" />
        </div>

        <ul>
          <li href="/">Home</li>
          <li href="/">Product</li>
          <li href="/">Price</li>
          <li href="/">About</li>
        </ul>

        <ul className="second-ul">
          <li>icon</li>
          <li>icon</li>
          <li>icon</li>
        </ul>
      </nav>

      <div className="main-container">
        <div className="container-1">
          <div className="h6-ring">
            <h6>New Product </h6>
            <img src="images/newproduct2.jpg" alt="" />
          </div>
          <h1>Air Jordan 6 Retro</h1>
          <ul>
            <li>Colour: Varsity Red/Black</li>
            <li>Style: CT8529-600</li>
            <li>Country/Region of Origin: Vietnam</li>
          </ul>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex vero
            neque facere et ipsum? Placeat sit, illum saepe, laborum
            perferendis, similique animi iusto nemo ad reprehenderit quidem
            doloribus laboriosam atque?
          </p>
          <button>Go Shopping</button>
          <button>See Catalog</button>
        </div>

        <div className="container-2">
          <img src="images/img3.webp" alt="" />
          <button className="imgbtn">Add To Cart +</button>
        </div>
      </div>
    </>
  );
}

export default App;
