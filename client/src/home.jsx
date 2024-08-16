import React from 'react';
import "./home.css"
import RM from "./classes/RawMaterial.js"
import MP from "./classes/MechanicalPart.js"
import EP from "./classes/ElectricalPart.js"
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'



function Home(props) {
    const [inv, setinv] = useState([]);
    const [popUpu, setPopUpu] = useState(false);
    const [popUpa, setPopUpa] = useState(false);
    const [popultaeda, setPopulateda] = useState(false);
    const [populatedu, setPopulatedu] = useState(false);


    const [countid, setcountid] = useState(12);
    const [name, setname] = useState('');
    const [quantity, setquantity] = useState(0);
    const [type, settype] = useState('');
    const [purity, setpurity] = useState(0);
    const [weight, setweight] = useState(0);
    const [material, setmaterial] = useState('');
    const [dimension, setdimension] = useState('');
    const [voltage, setvoltage] = useState(0);
    const [current, setcurrent] = useState(0);
    const [power, setpower] = useState(0);
    const [cat, setcat] = useState('');

    const [idu, setidu] = useState(0);
    const [nameu, setnameu] = useState('');
    const [quantityu, setquantityu] = useState(0);
    const [typeu, settypeu] = useState('');
    const [purityu, setpurityu] = useState(0);
    const [weightu, setweightu] = useState(0);
    const [materialu, setmaterialu] = useState('');
    const [dimensionu, setdimensionu] = useState('');
    const [voltageu, setvoltageu] = useState(0);
    const [currentu, setcurrentu] = useState(0);
    const [poweru, setpoweru] = useState(0);
    const [catu, setcatu] = useState('');

    function additem() {

        setPopulateda(true)

        if (name.trim().length === 0) {
            setPopulateda(false)
            alert("Please enter a name.");
        } else
            if (quantity.trim().length === 0) {
                setPopulateda(false)
                alert("Please enter a quantity.");
            } else
                if (!/^[0-9]+$/.test(quantity.trim())) {
                    setPopulateda(false);
                    alert("Please enter a valid quantity.");
                }
    }
    function resetu() {
        setnameu('')
        setquantityu(0)
        settypeu('')
        setpurityu(0)
        setweightu(0)
        setmaterialu('')
        setdimensionu('')
        setvoltageu(0)
        setcurrentu(0)
        setpoweru(0)
        setcatu('')
        setPopUpu(false)
        setPopulatedu(false)
    }

    function reset() {
        setname('')
        setquantity(0)
        settype('')
        setpurity(0)
        setweight(0)
        setmaterial('')
        setdimension('')
        setvoltage(0)
        setcurrent(0)
        setpower(0)
        setcat('')


        setPopUpa(false)
        setPopulateda(false)

    }


    useEffect(() => {
        if (popultaeda) {

            let added = { "name": name, "quantity": quantity, "type": type, "purity": purity, "weight": weight, "material": material, "dimension": dimension, "voltage": voltage, "current": current, "power": power, "cat": cat };

            fetch("http://localhost:4000/additem", {
                method: "POST",
                body: JSON.stringify(added),
                headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            })
                .then((response) => { return response.json() })
                .then(() => {
                    fetch("http://localhost:4000/getinv")
                        .then((response) => { return response.json() })
                        .then((data) => {
                            setinv(JSON.parse(data));

                        })

                })

            setname('')
            setquantity(0)
            settype('')
            setpurity(0)
            setweight(0)
            setmaterial('')
            setdimension('')
            setvoltage(0)
            setcurrent(0)
            setpower(0)
            setcat('')


            setPopUpa(false)
            setPopulateda(false)
        }
    }, [popultaeda])

    function delitem(id) {
        let del = { "id": id };
        fetch("http://localhost:4000/delete", {
            method: "POST",
            body: JSON.stringify(del),
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        }).then((response) => { return response.json() })
            .then(() => {
                fetch("http://localhost:4000/getinv")
                    .then((response) => { return response.json() })
                    .then((data) => {
                        setinv(JSON.parse(data));

                    })

            })

    }
    useEffect(() => {
        console.log("useeffect")
        fetch("http://localhost:4000/getinv")
            .then((response) => { return response.json() })
            .then((data) => {
                setinv(JSON.parse(data));
            })
    }, [])


    useEffect(() => {
        let update = { "id": idu, "name": nameu, "quantity": quantityu, "type": typeu, "purity": purityu, "weight": weightu, "material": materialu, "dimension": dimensionu, "voltage": voltageu, "current": currentu, "power": poweru, "cat": catu };
        fetch("http://localhost:4000/update", {
            method: "POST",
            body: JSON.stringify(update),
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        }).then((response) => { return response.json() })
            .then(() => {
                fetch("http://localhost:4000/getinv")
                    .then((response) => { return response.json() })
                    .then((data) => {
                        setinv(JSON.parse(data));

                    })

            })


        setnameu('')
        setquantityu(0)
        settypeu('')
        setpurityu(0)
        setweightu(0)
        setmaterialu('')
        setdimensionu('')
        setvoltageu(0)
        setcurrentu(0)
        setpoweru(0)
        setcatu('')
        setPopUpu(false)
        setPopulatedu(false)
    }, [populatedu])

    function updatepop(categ, id) {
        setcatu(categ);
        setidu(id);
        setPopUpu(true);
    }
    { }
    function updateevent() {

        setPopulatedu(true)

        if (nameu.trim().length === 0) {
            setPopulatedu(false)
            alert("Please enter a name.");
        }
    }

    return (
        <div id='beneficiariesPage'>
            <div>
                <h1 id='Title'> Inventory </h1>
            </div>
            <div id='teamData'>
                <div id='tableHead'>
                    <div className='benfText idtable'>ID</div>
                    <div className='benfText'>Name</div>
                    <div className='benfText'>Quantity</div>
                    <div className='benfText'>Details</div>
                    <div className='benfText'>Actions</div>

                </div>
                <div id='beneficiaries'>
                    {inv.map((item, key) => (
                        <div className='member' key={key}>
                            <div className='benfText idtable'>{item.id}</div>
                            <div className='benfText'>{item.name}</div>
                            <div className='benfText'>{item.quantity}</div>
                            {
                                (item.cat === "rm")
                                    ? <div>
                                        <div className='tryy'>
                                            <div> type: </div>
                                            <div> {item.type} </div>
                                        </div>

                                        <div className='tryy'>
                                            <div> purity: </div>
                                            <div> {item.purity} </div>
                                        </div>
                                    </div>
                                    : (item.cat === "ep")
                                        ? <div>
                                            <div className='tryy'>
                                                <div> Voltage: </div>
                                                <div> {item.voltage} </div>
                                            </div>
                                            <div className='tryy'>
                                                <div> Current: </div>
                                                <div> {item.current} </div>
                                            </div>

                                            <div className='tryy'>
                                                <div> Power: </div>
                                                <div> {item.power} </div>
                                            </div>
                                        </div>
                                        : (item.cat === "mp")
                                            ? <div>
                                                <div className='tryy'>
                                                    <div> Material: </div>
                                                    <div> {item.material} </div>
                                                </div>

                                                <div className='tryy'>
                                                    <div> Dimensions: </div>
                                                    <div> {item.dimension} </div>
                                                </div>

                                                <div className='tryy'>
                                                    <div> Weight: </div>
                                                    <div> {item.weight} </div>
                                                </div>
                                            </div>
                                            : <div> Choose an item type first </div>
                            }
                            {

                                <div>
                                    <button type="button" className='butto' onClick={() => updatepop(item.cat, item.id)} >Edit</button>
                                    <button type="button" onClick={() => delitem(item.id)} >Delete</button>
                                </div>

                            }

                        </div>
                    ))}
                </div>
            </div>

            {popUpu &&
                <div id='popUpu'>
                    <h2>Update Item</h2>
                    <div>
                        <div>
                            <label htmlFor='First_Name'>Name</label>
                            <input type="text" id="First_Name" value={nameu} onChange={(e) => setnameu(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor='Last_Name'>Quantity</label>
                            <input type="text" id="Last_Name" value={quantityu} onChange={(e) => setquantityu(e.target.value)} />
                        </div>
                    </div>
                    {
                        (catu === "rm")
                            ? <div>
                                <div>
                                    <label htmlFor='Phone'>type</label>
                                    <input type="text" id="Phone" value={typeu} onChange={(e) => settypeu(e.target.value)} />
                                </div>
                                <div>
                                    <label htmlFor='Email'>purity</label>
                                    <input type="text" id="Email" value={purityu} onChange={(e) => setpurityu(e.target.value)} />
                                </div>
                            </div>
                            : (catu === "ep")
                                ? <div>
                                    <div>
                                        <label htmlFor='Phone'>Voltage</label>
                                        <input type="text" id="Phone" value={voltageu} onChange={(e) => setvoltageu(e.target.value)} />
                                    </div>
                                    <div>
                                        <label htmlFor='Email'>Current</label>
                                        <input type="text" id="Email" value={currentu} onChange={(e) => setcurrentu(e.target.value)} />
                                    </div>
                                    <div>
                                        <label htmlFor='Email'>Power</label>
                                        <input type="text" id="Email" value={poweru} onChange={(e) => setpoweru(e.target.value)} />
                                    </div>
                                </div>
                                : (catu === "mp")
                                    ? <div>
                                        <div>
                                            <label htmlFor='Phone'>Material</label>
                                            <input type="text" id="Phone" value={materialu} onChange={(e) => setmaterialu(e.target.value)} />
                                        </div>
                                        <div>
                                            <label htmlFor='Email'>Dimensions</label>
                                            <input type="text" id="Email" value={dimensionu} onChange={(e) => setdimensionu(e.target.value)} />
                                        </div>
                                        <div>
                                            <label htmlFor='Email'>Weight</label>
                                            <input type="text" id="Email" value={weightu} onChange={(e) => setweightu(e.target.value)} />
                                        </div>
                                    </div>
                                    : <div> nothing </div>
                    }
                    <div>
                        <button type="button" onClick={() => resetu()}>Cancel</button>
                        <button type="button" onClick={updateevent}>Save</button>
                    </div>
                </div>
            }
            {
                popUpa &&
                <div id='popUpB'>
                    <h2>Add Item</h2>
                    <div>
                        <div>
                            <label htmlFor='First_Name'>Name</label>
                            <input type="text" id="First_Name" value={name} onChange={(e) => setname(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor='Last_Name'>Quantity</label>
                            <input type="number" id="Last_Name" value={quantity} onChange={(e) => setquantity(e.target.value)} />
                        </div>
                    </div>
                    {
                        (cat === "rm")
                            ? <div>
                                <div>
                                    <label htmlFor='Phone'>type</label>
                                    <input type="text" id="Phone" value={type} onChange={(e) => settype(e.target.value)} />
                                </div>
                                <div>
                                    <label htmlFor='Email'>purity</label>
                                    <input type="number" id="Email" value={purity} onChange={(e) => setpurity(e.target.value)} />
                                </div>
                            </div>
                            : (cat === "ep")
                                ? <div>
                                    <div>
                                        <label htmlFor='Phone'>Voltage</label>
                                        <input type="number" id="Phone" value={voltage} onChange={(e) => setvoltage(e.target.value)} />
                                    </div>
                                    <div>
                                        <label htmlFor='Email'>Current</label>
                                        <input type="number" id="Email" value={current} onChange={(e) => setcurrent(e.target.value)} />
                                    </div>
                                    <div>
                                        <label htmlFor='Email'>Power</label>
                                        <input type="number" id="Email" value={power} onChange={(e) => setpower(e.target.value)} />
                                    </div>
                                </div>
                                : (cat === "mp")
                                    ? <div>
                                        <div>
                                            <label htmlFor='Phone'>Material</label>
                                            <input type="text" id="Phone" value={material} onChange={(e) => setmaterial(e.target.value)} />
                                        </div>
                                        <div>
                                            <label htmlFor='Email'>Dimensions</label>
                                            <input type="text" id="Email" value={dimension} onChange={(e) => setdimension(e.target.value)} />
                                        </div>
                                        <div>
                                            <label htmlFor='Email'>Weight</label>
                                            <input type="text" id="Email" value={weight} onChange={(e) => setweight(e.target.value)} />
                                        </div>
                                    </div>
                                    : <div> Please choose and Item Type </div>
                    }

                    <div>
                        <button type="button" onClick={() => reset()}>Cancel</button>
                        <button type="button" onClick={additem}>Save</button>
                    </div>
                </div>
            }



            <div id='addbenef'>
                <button type="button" className='butto' onClick={() => setPopUpa(true)} >Add Item</button>
            </div>
            <div className='custom-select' >
                <label htmlFor='Type'>Item Type </label>
                <select name="Type" value={cat} onChange={(e) => setcat(e.target.value)}>
                    <option value="" disabled>Select Item Type</option>
                    <option value="rm" >Raw Material</option>
                    <option value="ep">Electrical Part</option>
                    <option value="mp">Mechanical Part</option>
                </select>
            </div>
        </div>
    )
}

export default Home;