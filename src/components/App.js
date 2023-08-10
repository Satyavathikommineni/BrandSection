import BrandsGallery from '../components/BrandsGallery';
import './App.css';

const brandsList=[
  {
      id:0,
      imageUrl:'https://www.citypng.com/public/uploads/preview/hd-red-bull-energy-logo-png-316255709851kj0ozwkzz.png',
  },
  {
    id:1,
    imageUrl:"https://etimg.etb2bimg.com/thumb/msid-74943384,width-1200,resizemode-4/.jpg",
  },
  {
    id:2,
    imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/ITC_Limited_Logo.svg/983px-ITC_Limited_Logo.svg.png",
  },
  {
    id:3,
    imageUrl:'https://www.citypng.com/public/uploads/preview/hd-red-bull-energy-logo-png-316255709851kj0ozwkzz.png',
},
{
  id:4,
  imageUrl:"https://etimg.etb2bimg.com/thumb/msid-74943384,width-1200,resizemode-4/.jpg",
},
{
  id:5,
  imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/ITC_Limited_Logo.svg/983px-ITC_Limited_Logo.svg.png",
},
{
  id:6,
  imageUrl:'https://www.citypng.com/public/uploads/preview/hd-red-bull-energy-logo-png-316255709851kj0ozwkzz.png',
},
{
id:7,
imageUrl:"https://etimg.etb2bimg.com/thumb/msid-74943384,width-1200,resizemode-4/.jpg",
},
{
id:8,
imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/ITC_Limited_Logo.svg/983px-ITC_Limited_Logo.svg.png",
},
{
  id:9,
  imageUrl:'https://www.citypng.com/public/uploads/preview/hd-red-bull-energy-logo-png-316255709851kj0ozwkzz.png',
},
{
id:10,
imageUrl:"https://etimg.etb2bimg.com/thumb/msid-74943384,width-1200,resizemode-4/.jpg",
},
{
id:11,
imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/ITC_Limited_Logo.svg/983px-ITC_Limited_Logo.svg.png",
},
{
  id:12,
  imageUrl:'https://www.citypng.com/public/uploads/preview/hd-red-bull-energy-logo-png-316255709851kj0ozwkzz.png',
},
{
id:13,
imageUrl:"https://etimg.etb2bimg.com/thumb/msid-74943384,width-1200,resizemode-4/.jpg",
},
]



const App=()=>(
  <div className='brands-container'>    
      <h1 className='heading'> Brands</h1> 
      <div className='container'>        
        {brandsList.map((eachImage)=>(
          <BrandsGallery  brandDetails={eachImage} />
        ))}  
        </div>    
  </div>
)


export default App;
