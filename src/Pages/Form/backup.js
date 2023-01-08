import './form.css';
import React from 'react';
//import Dropdown from 'react-bootstrap/Dropdown';
import axios from "axios";
import {
    FormControl,
    FormLabel,
    Input,
    NumberInput,
    NumberInputField,
    Select,
    Button
  } from '@chakra-ui/react';
  // import {
  //   Table,
  //   Tr,
  //   Td,
  //   TableContainer,
  // } from '@chakra-ui/react';
  import DateTimePicker from 'react-datetime-picker';
const Form = () => {
  const [input,setInput]=React.useState(true);
  const [form, setForm] = React.useState({
		Name: "",
		Email: "",
	  Number: 0,
		No: 0,
    Location: "",
    Days: 0,
    Date: new Date()
	  });
    
    const [valuee, onChange] = React.useState(new Date());
    React.useEffect(()=>{
      setInput(true);
      setForm((prevNote) => {
        return {
        ...prevNote,
        Date: valuee
        };});
    },[valuee]);
    function handleChangeForm(event) {
      const { name, value } = event.target;
      setInput(true);
      setForm((prevNote) => {
        return {
        ...prevNote,
        [name]: value
        };
      });
      };

      const submitNoteForm =async (event)=> {
        if (form.Name === "" || form.Email === "" || form.Number === 0 || form.No === 0|| form.Location === ""|| form.Days === 0 )
        {
          setInput(false);
        }
        else{
            console.log(form);
            axios.post("https://bitapodsbackend.onrender.com/form", form);
            window.location.reload();
        }
         };

    // const [value, onChange] = React.useState(new Date());
  return (
    <div className='form-container1'>
        <FormControl isRequired>
          <div className='spacebb'></div>
          <div className='spacebb'></div>
        {(input===true)?<></> : <div className='errorr'>* Fill all fields</div>}
        <div className='form-total'>
            <div className='form-left'>
                <FormLabel className="space">Name</FormLabel>
                <FormLabel className="space">Email address</FormLabel>
                <FormLabel className="space">Whatsapp Number</FormLabel>
                <FormLabel className="space">No. of seats</FormLabel>
                <FormLabel className="space">Enter Location</FormLabel>
                <FormLabel className='space'>Starting Date</FormLabel>            
                <FormLabel className="space">No. of days</FormLabel>
            </div>

        <div className='form-right'>
          <Input placeholder='First name' name="Name" value={form.Name} onChange={handleChangeForm} required />
          <Input type='email'  name="Email" value={form.Email} onChange={handleChangeForm} required />
          <NumberInput max={9999999999} min={1111111111} value={form.Number} required>
                <NumberInputField  name="Number"  onChange={handleChangeForm} />
          </NumberInput>
          <NumberInput max={50} min={10} value={form.No} required>
                <NumberInputField   name="No" onChange={handleChangeForm} />
          </NumberInput> 
          <Select name="Location" onChange={handleChangeForm} value={form.Location} placeholder='Select location'>
              <option value="Sector 5">Sector 5</option>
              <option value="Baguihati">Baguihati</option>
              <option value="Chinar Park">Chinar Park</option>
              <option value="Dum Dum">Dum Dum</option>
            </Select> 
            <div>
              <div className='spacebb'></div>
            <DateTimePicker onChange={onChange} value={valuee} /> 
            </div>
                  <NumberInput className='spaceb' max={50} min={10} value={form.Days} required>
                    <NumberInputField   name="Days" onChange={handleChangeForm} />
                </NumberInput>
        </div>              
        </div>
        <div className='spacebb'></div>
        <div className='form-bot'>
        <Button className='form-buttonf'  colorScheme='red' onClick={submitNoteForm}><div className='form-subm'>Submit</div></Button>
        </div>
        </FormControl> 
    </div>
  )
}

export default Form;