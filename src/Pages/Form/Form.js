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
  //import DateTimePicker from 'react-datetime-picker';
//import Calendar from '../Calendar/Calendar';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import TimeRangePicker from '@wojtekmaj/react-timerange-picker';
import DateRangePickerComp from '../Calendar/Calendare';
import "@wojtekmaj/react-timerange-picker/dist/TimeRangePicker.css";
import "react-clock/dist/Clock.css";
//import Calendare from '../Calendare/Calendare';
const Form = () => {
  const [input,setInput]=React.useState(true);
  const [form, setForm] = React.useState({
		Name: "",
		Email: "",
	  Number: 0,
		No: 0,
    Location: "",
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: ""
	  });
    const [value, onChange] = React.useState(['10:00', '11:00']);
    React.useEffect(()=>{
      //console.log(value[0]+",,"+value[1]);
      setForm((prevNote) => {
        return {
        ...prevNote,
        startTime: value[0],
        endTime: value[1]
        };
      });
    },[value])
    const [value1, onChange1] = React.useState([new Date(), new Date()]);
    React.useEffect(()=>{
      console.log(value1[0]+",,"+value1[1]);
      setForm((prevNote) => {
        return {
        ...prevNote,
        startDate: value1[0],
        endDate: value1[1]
        };
      });
    },[value1])
    // function dateChange(start1,end1)
    // {
    //   setForm((prevNote) => {
    //     return {
    //     ...prevNote,
    //     startDate:start1,
    //     endDate: end1
    //     };
    //   });
    // }
    //
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
        if (form.Name === "" || form.Email === "" || form.Number === 0 || form.No === 0|| form.Location === "")
        {
          setInput(false);
        }
        else{
            console.log(form);
            axios.post("http://localhost:8080/form", form);
            // window.location.reload();
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
            
            <div className='space-date'>
              
                {/* <DateRangePickerComp click={dateChange} /> */}
                <DateRangePicker onChange={onChange1} className="date-1" calendarClassName={"class1"} value={value1} />
            </div>
            <div className='space-date'>
            <TimeRangePicker disableClock={true} onChange={onChange} value={value} /></div>
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