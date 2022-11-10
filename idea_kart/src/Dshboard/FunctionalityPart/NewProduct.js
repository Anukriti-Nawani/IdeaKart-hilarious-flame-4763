import {useState} from 'react'
import axios from "axios"
import {
  FormControl,
  FormLabel,

  Select,
  Input,
  Textarea,
  Spacer
} from '@chakra-ui/react'



const NewProduct = () => {
  const [name, setname] = useState("")
  const [experience, setexp] = useState("")
  const [file, setfile] = useState("")
  const [buy, setbuy] = useState("")
  const [plateform, setplateform] = useState("")
  

 const handleImage=(e)=>{

const file=e.target.files[0]
  const reader=new FileReader()

  reader.addEventListener("load",()=>{
    console.log(reader.result)
    setfile(reader.result)
  })

  reader.readAsDataURL(file)

  // console.log(e.target.value)

 }

const handleSubmit=(e)=>{
  e.preventDefault()
 
 axios.post("http://localhost:8080/product",{
  name,
  experience,
  file,
  buy,
  plateform 
 })



}
return (
    <div>
    <h1>New Review</h1>


    <FormControl  maxW="660px" mx="auto" color='black' onSubmit={handleSubmit}>
  <FormLabel>Name</FormLabel>
  <Input type='text' onChange={(e)=>setname(e.target.value)} name="name" value={name} />
  <Spacer/>
  <FormLabel>Your Experience</FormLabel>
  <Textarea type='text' onChange={(e)=>setexp(e.target.value)} name="experience" value={experience}/>
  <Spacer/>

  <FormLabel>File</FormLabel>
  <Input type='file' onChange={handleImage}name="file"  accept=".png, .jpg" />
  <Spacer/>

  <FormLabel>Did you bought it online or offline</FormLabel>
  <Select placeholder='Select country'onChange={(e)=>setbuy(e.target.value)} name="buy" value={buy} >
  <option>online</option>
  <option>offline</option>
</Select>

<Spacer/>

<FormLabel>Platform</FormLabel>
<Select placeholder='Select Platform' onChange={(e)=>setplateform(e.target.value)} name="plateform" value={plateform} >
<option>Amazon</option>
<option>Flipkart</option>
<option>SnapDeal</option>
<option>ShopClues</option>
<option>Reliance Digital</option>
<option>Others</option>
</Select>

<Spacer/>
<Spacer/>
<Input type='submit' value="Submit" onClick={handleSubmit} />


</FormControl>

    
    </div>
  )
}

export default NewProduct