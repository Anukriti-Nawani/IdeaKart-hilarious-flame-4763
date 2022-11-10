import React from 'react'

const NewProduct = () => {
  return (
    <div>
    <h1>New Review</h1>

    <form>
    <label>Name</label> <br/>
    <input  type="text"  />  <br/>  <br/>
    <label>Your Experience</label>  <br/>
    <textarea/> <br/> <br/> 

    <label>File</label> <br/>
    <input type="file" />   <br/> <br/>
    <label>Did you bought it online or offline</label> <br/>

    <select>
    <option>online</option>
    <option>offline</option>
    </select> <br/> <br/>


    
    <label>Platform</label> <br/>   

    <select>
    <option>Select Plateform</option>
    <option>Amazon</option>
    <option>Flipkart</option>
    <option>SnapDeal</option>
    <option>ShopClues</option>
    <option>Reliance Digital</option>
    <option>Others</option>    
    </select> <br/> <br/>

    <input type="submit" value="Submit" />

    
    </form>
    
    
    </div>
  )
}

export default NewProduct



// mongodb+srv://abhiamber:ballu#742@cluster0.t0urnv4.mongodb.net/IdeakartDatabase?retryWrites=true&w=majority