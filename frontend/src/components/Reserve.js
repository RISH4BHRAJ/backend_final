import { faTabletScreenButton } from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'react-date-picker'
import React,{ useEffect, useState } from 'react';
import dish1 from './../../src/components/image/dish1.jpeg';
import reportWebVitals from "./../reportWebVitals";



function Reserve() {

    const [guestnum, setGuestNum] = useState(1);
    const minGuest = 0;
    const maxGuest = 16;

    const handleNumGuest = event => {
        const value = Math.max(minGuest,Math.min(maxGuest, Number(event.target.value)));
        setGuestNum(value)
    }

    const [reserveDate, setDate] = useState(new Date())

    // GET
    // useEffect(()=>{
    //     fetchItems();
    // },[]);

    // const[items,setItems] = useState([]);

    // const fetchItems = async()=>{
    //     const data = await fetch('/outputTables');
    //     const items = await data.json();
    //     setItems(items);
    // }

    // GET

    return(
        <section >
            
            <div className='main'>
            <form action = '/genTable' method='POST' className='tblForm'>
                
                <div className='info1'>
                    <span>
                            <p>Please pick number of guests (between 1 and 16): &emsp;&emsp;&emsp;</p>
                            <input id='totalGuest' name ='totalGuest' value={guestnum} onChange={handleNumGuest}></input>
                            <br></br><br></br>
                            <p>Tables for {guestnum} guest(s) is(are) </p>
                            
                    </span>
                    <div className='DatePick'>
                            <p>Date</p>
                            <div className='dt'>
                           {/* <input name='rsDate' id='rsDate' type={'date-local'} className='dtime' ></input>*/}
                            <DatePicker name='resDate' id = 'resDate' value={reserveDate} onChange={setDate} minDate={new Date()}></DatePicker>
                            </div>
                    {/*<DateTimePicker onChange={onChange} value={value} className="dtime" minDate={value} disableClock={true}/>*/}
                            <div className='dt'>
                                <p>Please pick your dine in time</p>&nbsp;
                                <select name='timeFrame' id ='timeFrame'>
                                    <option value='5'>5:00 p.m - 6:30 p.m</option>
                                    <option value='6'>6:30 p.m - 8:00 p.m</option>
                                    <option value='8'>8:00 p.m - 9:30 p.m</option>
                                </select>
                            </div>
                    </div>
                <button type='submit' className='btn btn-primary tblButton'>Check availability</button>
                </div>
            
            </form>

            <form action ='/postUserInfo' method="POST" className='infoForm'>
            <div className='customerInfo'>
                <span>
                    <div className='pad'>
                        <p>First Name&emsp;&emsp;</p>
                        <input  id='fname' name='fname' placeholder='first name'></input>
                    </div>
                    
                    <div className='pad'>
                        <p>Last Name&emsp;&emsp;</p>
                        <input  id='lname' name='lname' placeholder='last name'></input>
                    </div>
                    
                    <div className='pad'>
                        <p>Email&emsp;&emsp;</p>
                        <input  id='email' name='email' placeholder='startdust@gmail.com'></input>
                    </div>

                    <div className='pad'>
                        <p>Contact Phone&emsp;&emsp;</p>
                        <input  id='phone' name='phone' placeholder='phonenumber'></input>
                    </div>

                    <div className='pad'>
                        <p>Comment (optional)&emsp;&emsp;</p>
                        <textarea id='comment' name='comment' ></textarea>
                    </div>
                    <div className='submitUserInfoButton'>
                        <input type={'submit'} className='btn btn-primary infoButton'></input>
                        {/*<button type='submit' className='btn btn-primary infoButton'>Save Info</button>*/}
                    </div>
                </span>
                
                
                
            </div>
            </form>
            <br></br>

            
            </div> 
            


        </section>
    );
    
}

export default Reserve;
