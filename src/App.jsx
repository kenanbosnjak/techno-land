
import { useState, useRef, useEffect } from 'react'
import './index.css'

function App() {

const array = ["MACBOOK PRO","iPHONES","Intel i9 13th Gen","GeForce RTX 2080"]
const pArray = 
["Supercharged by M2 Pro or M2 Max, MacBook Pro takes its power and efficiency further than ever. It delivers exceptional performance whether it’s plugged in or not, and now has even longer battery life. Combined with a stunning Liquid Retina XDR display and all the ports you need — this is a pro laptop without equal.",
"The iPhone 14 and iPhone 14 Pro feature a 6.1-inch (15 cm) and 6.7-inch (17 cm) display, improvements to the rear-facing camera, and satellite connectivity for contacting emergency services when a user in trouble is beyond the range of Wi-Fi or cellular networks.",
"The Intel Core i9-13900K is the best CPU in this comparison. It has more cores, more threads, faster clock speeds, and is capable of demolishing the AMD Ryzen 7900X in multi-core tests.",
"The GeForce RTX™ 2080 is powered by the all-new NVIDIA Turing™ architecture to give you incredible new levels of gaming realism, speed, power efficiency, and immersion. This is graphics reinvented. GeForce RTX graphics cards are powered by the Turing GPU architecture and the all-new RTX platform."]
const[image, setImage] = useState("./src/images/1.jpg")
const[header, setHeader] = useState(array[0])
const[paragraph, setParagraph] = useState(pArray[0])
const [count, setCount] = useState(1)
const[homePage, setHomePage] = useState(true);
const[about, setAbout] = useState(false);
const[store, setStore] = useState(false);
const[cart, setCart] = useState(false);
const[items, setItems] = useState([]);
const [total, setTotal] = useState(0);
const [employees, setE] = useState([
  {
    name: "MacBook Pro",
    price: 1999,
    img: './src/images/macbookpro.jpg',
    button: "Purchase",
    id: "q"
  },
  {
    name: "MacBook Air",
    price: 1299,
    img: './src/images/macbookair.jpg',
    button: "Purchase",
    id: "w"
  },  {
    name: "iPhone 14",
    price: 799,
    img: './src/images/iphone.jpg',
    button: "Purchase",
    id: "e"
  },  {
    name: "AirPods 2",
    price: 199,
    img: './src/images/airpods.jpg',
    button: "Purchase",
    id: "r"
  },
  {
    name: "Razer BlackWidow",
    price: 119,
    img: './src/images/razerkeyboard.jpg',
    button: "Purchase",
    id: "t"
  },
  {
    name: "Razer Basilisk",
    price: 249,
    img: './src/images/basilisk.jpg',
    button: "Purchase",
    id: "y"
  },  {
    name: "Razer Kraken V3",
    price: 79,
    img: './src/images/krakenjpg.jpg',
    button: "Purchase",
    id: "u"
  },  {
    name: "Logitech G733",
    price: 339,
    img: './src/images/logitechheadphones.jpg',
    button: "Purchase",
    id: "i"
  },  {
    name: "Logitech Lightspeed",
    price: 149,
    img: './src/images/lgmouse.jpg',
    button: "Purchase",
    id: "p"
  },
  {
    name: "Logitech G923",
    price: 789,
    img: './src/images/steering.jpg',
    button: "Purchase",
    id: "a"
  },
  {
    name: "Intel-I9 13th",
    price: 598,
    img: './src/images/i9.jpg',
    button: "Purchase",
    id: "s"
  },  {
    name: "Intel-I5 13th",
    price: 279,
    img: './src/images/i5.jpg',
    button: "Purchase",
    id: "d"
  },  {
    name: "Nvidia RTX 2080",
    price: 429,
    img: './src/images/2080.jpg',
    button: "Purchase",
    id: "f"
  }, {
    name: "Nvidia RTX 3090",
    price: 1299,
    img: './src/images/3090.jpg',
    button: "Purchase",
    id: "g"
  },
  {
    name: "Asus XG285Q",
    price: 599,
    img: './src/images/asus.jpg',
    button: "Purchase",
    id: "h"
  },
  {
    name: "Asus Ryujin",
    price: 398,
    img: './src/images/water.jpg',
    button: "Purchase",
    id: "j"
  },  {
    name: "Samsung Z-Fold",
    price: 1579,
    img: './src/images/fold.jpg',
    button: "Purchase",
    id: "k"
  },  {
    name: "Kingston SSD",
    price: 189,
    img: './src/images/ssd.jpg',
    button: "Purchase",
    id: "l"
  },
])

useEffect(() => {
setImage(`./src/images/${count}.jpg`)
setHeader(array[count - 1])
setParagraph(pArray[count - 1])
}, [count])

function increaseCount() {
if(count < 4) {
  setCount(count + 1)
  setHeader(array[0 + count - 1])
  setParagraph(pArray[0 + count - 1])
} else {
  setCount(1)
  setHeader(array[0])
  setParagraph(pArray[0])
}  
}

function decreaseCount() {
  if(count > 1) {
    setCount(count - 1)
    setHeader(array[0 - count - 1])
    setParagraph(pArray[0 - count - 1])
  }  else {
    setCount(4) 
    setHeader(array[3])
    setParagraph(pArray[3])
  } 
}


  return (
    <>
{homePage && (
  <>
  <link href="https://fonts.cdnfonts.com/css/monzane" rel="stylesheet" />
    <link href="https://fonts.cdnfonts.com/css/fx" rel="stylesheet" />          
    <link href="https://fonts.cdnfonts.com/css/maria-2" rel="stylesheet" />
    <link href="https://fonts.cdnfonts.com/css/the-bold-font" rel="stylesheet" />


<div className="navbar">
      <h1 className='main-header'>TechnoLand</h1>
      <p className='main-p'>Technology Shop</p>
</div>
<div className='links-div'>
      <a onClick={() => {setHomePage(true); setAbout(false); setStore(false); setCart(false)}} id="home" href='#'>HOME</a>
      <a onClick={() => {setHomePage(false); setAbout(true); setStore(false); setCart(false)}} id='two' href='#'>ABOUT</a>
      <a onClick={() => {setHomePage(false); setAbout(false); setStore(true); setCart(false)}} id='three' href='#'>SHOP</a>
      <a onClick={() => {setHomePage(false); setAbout(false); setStore(false); setCart(true)}} id='four' href='#'>CART</a>
</div>
<main>
 
<div className='slider' style={
  {
    backgroundImage: `url(${image})`
  }
}>
  <div className='buttons'>
      <button onClick={decreaseCount} className='sliderbuttons'><p className='button-text'>&#8249;</p></button>
      <button onClick={increaseCount} id='right' className='sliderbuttons'><p id='right-button-text' className='button-text'> &#8250;</p></button>
  </div>
  <div className='container'>
      <div className='content'>
        <h1 className='sliderheader'>{header}</h1>
        <p className='sliderparagraph'>{paragraph}</p>
  </div>
    <button onClick={() => {setHomePage(false); setAbout(false); setStore(true); setCart(false)}} className='buy'>SHOP NOW</button>
</div>
</div>
</main>
<div className='section2'>
  <div className='logitech'>
    <h1 className='logitechheader'>LOGITECH</h1>
    <p className='logitechparagraph'>Logitech designs products that bring people together through music, gaming, streaming, video and computing.</p>
    <a onClick={() => {setHomePage(false); setAbout(false); setStore(true); setCart(false)}} className='logitechlink'>Explore Logitech</a>
    <div onClick={() => {setHomePage(false); setAbout(false); setStore(true); setCart(false)}} className='imagecontainer'>
    <img className='logitechimage' src='./src/images/logitechmouse.jpg' />
    </div>
  </div>
  <div className='mclaren'>
    <img className='mclarenlogo' src='./src/images/mclaren.png' />
  <div className='videocontainer'>
    <video controls autoPlay loop muted>
      <source src='./src/images/logitechvideo.mp4' type="video/mp4" />
    </video>
    </div>
  </div>
  
</div>
<div className='section3'>
  <img src='./src/images/logo.png' width="200px" /> 
  <h1 className='signupheader'>Join  TechnoLand</h1>
  <p className='signupparagraph'>Register now and save up to 20% on your next purchase...</p>
  <div className='signup'>
    <input className='input' type='text' placeholder='Enter your email' />
    <button className='inputbutton'>SUBMIT</button>
  </div>
</div>
</>
)};
{about && (


<>
<link href="https://fonts.cdnfonts.com/css/monzane" rel="stylesheet" />
    <link href="https://fonts.cdnfonts.com/css/fx" rel="stylesheet" />
                
    <link href="https://fonts.cdnfonts.com/css/maria-2" rel="stylesheet" />
    <link href="https://fonts.cdnfonts.com/css/the-bold-font" rel="stylesheet" />


<div id='aboutlinks' className='links-div'>
<a onClick={() => {setHomePage(true); setAbout(false); setStore(false)}} id="home" href='#'>HOME</a>
      <a onClick={() => {setHomePage(false); setAbout(true); setStore(false); setCart(false)}} id='two' href='#'>ABOUT</a>
      <a onClick={() => {setHomePage(false); setAbout(false); setStore(true); setCart(false)}} id='three' href='#'>SHOP</a>
      <a onClick={() => {setHomePage(false); setAbout(false); setStore(false); setCart(true)}} id='four' href='#'>CART</a>
</div>
<div className='aboutsection'>
  <div className='about1'>
      <div className='communitycover'>
        <img className='community' src='./src/images/comunity.jpg' />
      </div>
      <div className='about2'>
      <h1 className='aboutheader'>OUR COMMUNITY</h1>
      <p className='aboutparagraph'>
TechnoLand boasts an exceptional and vibrant community that sets it apart as a hub of collaboration, innovation, and support. The community at TechnoLand is characterized by its welcoming atmosphere, where individuals from diverse backgrounds come together to share their expertise, ideas, and passion for technology. Whether it's through online forums, workshops, or local meetups, members of this community consistently exhibit a genuine eagerness to help and uplift one another. The spirit of camaraderie is palpable, fostering an environment where knowledge exchange is not only encouraged but celebrated. In TechnoLand, newbies and experts alike find a nurturing space to learn, grow, and contribute, ultimately creating a positive ripple effect that propels the entire community forward on its collective journey of technological exploration and advancement.</p>
    </div>
 </div>

 <div className='about1'>
      <div id='about2' className='about2'>
      <h1 className='aboutheader'>OUR PRODUCTS</h1>
      <p id='aboutp2' className='aboutparagraph'>
      TechnoLand offers an impressive array of cutting-edge products that cater to a wide spectrum of technological needs and desires. From state-of-the-art gadgets that redefine convenience to innovative devices that elevate entertainment experiences, TechnoLand's product selection is a testament to its commitment to staying at the forefront of technology. Customers can explore a diverse range of goods, including sleek smartphones with advanced features, immersive virtual reality setups that transport users to new realms, powerful laptops that enhance productivity, and smart home solutions that seamlessly integrate modern living. The products sold at TechnoLand not only embody the pinnacle of technological achievement but also promise durability, performance, and style.</p>
    </div>
    <div className='communitycover'>
        <img className='community' src='./src/images/products.jpg' />
      </div>
 </div>
 <div className='section3'>
 <img src='./src/images/logo.png' width="200px" /> 
  <h1 className='signupheader'>Join  TechnoLand</h1>
  <p className='signupparagraph'>Register now and save up to 20% on your next purchase...</p>
  <div className='signup'>
    <input className='input' type='text' placeholder='Enter your email' />
    <button className='inputbutton'>SUBMIT</button>
  </div>
</div>
</div>
</>
)}  ;
{store && (
  <>
  <link href="https://fonts.cdnfonts.com/css/monzane" rel="stylesheet" />
    <link href="https://fonts.cdnfonts.com/css/fx" rel="stylesheet" />
                
    <link href="https://fonts.cdnfonts.com/css/maria-2" rel="stylesheet" />
    <link href="https://fonts.cdnfonts.com/css/the-bold-font" rel="stylesheet" />
  <div id='aboutlinks' className='links-div'>
  <a onClick={() => {setHomePage(true); setAbout(false); setStore(false)}} id="home" href='#'>HOME</a>
        <a onClick={() => {setHomePage(false); setAbout(true); setStore(false); setCart(false)}} id='two' href='#'>ABOUT</a>
        <a onClick={() => {setHomePage(false); setAbout(false); setStore(true); setCart(false)}} id='three' href='#'>SHOP</a>
        <a onClick={() => {setHomePage(false); setAbout(false); setStore(false); setCart(true)}} id='four' href='#'>CART</a>
  </div>
  <div className='shop'>
  {employees.map((employee) => {
    return <div id={employee.id} className='item-container'>
      <img className='item-image' src={employee.img} />
      <div className='p-elements'>
      <p className='item-name'>{employee.name}</p>
      <p className='item-price'>${employee.price}</p>
      </div>
      <button onClick={() => {
        setTotal(prevTotal => prevTotal + employee.price)
        setItems(prevItems => prevItems.concat(employee))
        }} className='purschase'>{employee.button}</button>
    </div>
  })}
  </div>
  <div className='section3'>
  <img src='./src/images/logo.png' width="200px" /> 
  <h1 className='signupheader'>Join  TechnoLand</h1>
  <p className='signupparagraph'>Register now and save up to 20% on your next purchase...</p>
  <div className='signup'>
    <input className='input' type='text' placeholder='Enter your email' />
    <button className='inputbutton'>SUBMIT</button>
  </div>
</div>
  </>
)};
{cart && (
  <>
    <link href="https://fonts.cdnfonts.com/css/monzane" rel="stylesheet" />
    <link href="https://fonts.cdnfonts.com/css/fx" rel="stylesheet" />
                
    <link href="https://fonts.cdnfonts.com/css/maria-2" rel="stylesheet" />
    <link href="https://fonts.cdnfonts.com/css/the-bold-font" rel="stylesheet" />
  <div id='aboutlinks' className='links-div'>
  <a onClick={() => {setHomePage(true); setAbout(false); setStore(false)}} id="home" href='#'>HOME</a>
        <a onClick={() => {setHomePage(false); setAbout(true); setStore(false); setCart(false)}} id='two' href='#'>ABOUT</a>
        <a onClick={() => {setHomePage(false); setAbout(false); setStore(true); setCart(false)}} id='three' href='#'>SHOP</a>
        <a onClick={() => {setHomePage(false); setAbout(false); setStore(false); setCart(true)}} id='four' href='#'>CART</a>
  </div>
  <div className='cart-items'>
    <div className='your-cart'>
      <h1 className='cart-header'>YOUR CART:</h1>
    </div>
    {items.map((item) => {
      return <div id={item.id} className='checkout-item'>
        <img className='checkout-image' src={item.img} />
        <h1 className='checkout-title'>{item.name}</h1>
        <h1 className='checkout-title'>${item.price}</h1>
        <button onClick={() => {setTotal(prevTotal => prevTotal - item.price); setItems((prevItems) => prevItems.filter(({ id }) => id !== item.id))}} className='remove'>REMOVE</button>
      </div>
    })}
  <div className='checkout'>
    <h1 className='total'>Total: ${total}</h1>
    <button className='checkout-button'>CHECKOUT</button>
    </div>
  </div>

  </>
)};
    
    </>
  ) 
}

export default App

