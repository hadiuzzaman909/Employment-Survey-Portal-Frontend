import React, { useEffect, useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../firebase.init';

const SurveyForm = () => {

    const [sectorName, setSectorName] = useState("")
    const [sectorList, setSectorList] = useState([{ 'sector': '', 'id': '' }])
    const [user] = useAuthState(auth);
    const [sector,setSector]=useState(" ")
    const[count,setCount]=useState("");
    const[_id,setId]=useState("");
    console.log(count);

    const [employee,setEmployee]=useState("");
    console.log(employee);

    useEffect(() => {
        fetch(`https://employment-survey-portal-backend.onrender.com/sector`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(rsp => {
                console.log(rsp)
                return rsp.json()
            })
            .then(data => setSectorList(data));
    }, [])

    const handleChange = (event) => {
        setSectorName(event.target.value);
    }

    const nameRef = useRef('')
    const [agree, setAgree] = useState(false)

    const saveBtn = event => {
        
        event.preventDefault();
        setCount(1);
        const data={
             name:nameRef.current.value,
             sector:sectorName,
             TermsAndCondition:agree,
             email:user.email
        }

        fetch('https://employment-survey-portal-backend.onrender.com/employee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                
                if (result) {
                    toast.success("Successfully stored to database!");
                    toast.success("Press edit button if you need to edit");
                    setEmployee(result.name);
                    console.log(result.name)
                    setSector(result.sector)
                    setId(result._id)
                    setAgree(!agree);
                }
                else {
                    toast.error("Does not Successful !");
                }
            });

    }
    const navigate=useNavigate();
    const navigateToEdit=_id=>{
        navigate(`/survey-edit-form/${_id}`)
    }

    return (


        <div>
            <h4 className="text-center">Please enter your name and pick the Sectors you are currently involved in !</h4>
            <div className='container mx-auto mt-5 survey-form shadow-lg p-3 mb-5 '>

                <Form onSubmit={saveBtn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    {employee? <Form.Control ref={nameRef} defaultValue={employee} type="text" required />:<Form.Control ref={nameRef} placeholder="Enter Your Name" type="text" required />}
                </Form.Group>
                    <label className='mb-2'>Sectors</label>
                    <br></br>
                    <select className="sector" value={sectorName} onChange={handleChange}  required>
                        {sector ?<option >{sector}:Select Your Sector</option>:<option></option>}
                        <optgroup label="Manufacturing">
                            {sectorList.slice(0, 2).map(sector => (
                                <option className="ml-3" value={sector.sector} key={sector.id} >{sector.sector}</option>
                            ))
                            }
                        </optgroup>
                        <optgroup label="Food & Beverage">
                            {sectorList.slice(3, 9).map(sector => (
                                <option className="ml-3" value={sector.sector} key={sector.id} >{sector.sector}</option>
                            ))
                            }
                        </optgroup>

                        <optgroup label="Furniture">

                            {sectorList.slice(9, 18).map(sector => (
                                <option className="ml-3" value={sector.sector} key={sector.id} >{sector.sector}</option>

                            ))
                            }
                        </optgroup>
                        <optgroup label="Machinery">

                            {sectorList.slice(18, 22).map(sector => (
                                <option className="ml-3" value={sector.sector} key={sector.id} >{sector.sector}</option>

                            ))
                            }
                        </optgroup>
                        <optgroup label="Maritime">

                            {sectorList.slice(22, 26).map(sector => (
                                <option className="ml-3" value={sector.sector} key={sector.id} >{sector.sector}</option>

                            ))
                            }
                        </optgroup>
                        <optgroup label="MetalWorking">

                            {sectorList.slice(26, 30).map(sector => (
                                <option className="ml-3" value={sector.sector} key={sector.id} >{sector.sector}</option>

                            ))
                            }
                        </optgroup>
                        <optgroup label="Plastic">

                            {sectorList.slice(30, 33).map(sector => (
                                <option className="ml-3" value={sector.sector} key={sector.id} >{sector.sector}</option>

                            ))
                            }
                        </optgroup>
                        <optgroup label="Printing">

                            {sectorList.slice(33, 36).map(sector => (
                                <option className="ml-3" value={sector.sector} key={sector.id} >{sector.sector}</option>

                            ))
                            }
                        </optgroup>
                        <optgroup label="Clothing">

                            {sectorList.slice(36, 39).map(sector => (
                                <option className="ml-3" value={sector.sector} key={sector.id} >{sector.sector}</option>

                            ))
                            }
                        </optgroup>
                        <optgroup label="Service">
                            {sectorList.slice(39, 46).map(sector => (
                                <option className="ml-3" value={sector.sector} key={sector.id} >{sector.sector}</option>

                            ))
                            }
                        </optgroup>
                        <optgroup label="Translation Services">
                            {sectorList.slice(46, 50).map(sector => (
                                <option className="ml-3" value={sector.sector} key={sector.id} >{sector.sector}</option>
                            ))
                            }
                        </optgroup>
                    </select>
                    <div className='mb-2 mt-3'>
                        <input onClick={() => setAgree(!agree)} className='' type='checkbox' name='terms' id='terms' required />
                        <label className={agree ? 'text-primary' : 'text-danger'} htmlFor='terms'>Accept All Terms & Conditions</label>
                    </div>
                    <div className='d-flex justify-content-center'>
                    {count ?<Button className='btn-primary' type="" onClick={()=>navigateToEdit(_id)}>Edit Data</Button>:<Button className='btn-primary' type="submit">
                        Submit
                    </Button>}

                    </div>
                </Form>
            </div>
        <ToastContainer />
        </div>





    );
};

export default SurveyForm;