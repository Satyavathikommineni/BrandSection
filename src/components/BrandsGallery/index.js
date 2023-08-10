import "./index.css"
const BrandsGallery=(props)=>{
    const {brandDetails}=props;
    const {imageUrl}=brandDetails;

    return(        
        <div className="image-container">
            <img src={imageUrl} alt="brand" className="image" width="150" height="150" />
        </div>        
    )
    
}

export default BrandsGallery;