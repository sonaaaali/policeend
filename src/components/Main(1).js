import React,{useEffect, useState} from 'react'
import './Main.css';
import {useHistory, useParams} from 'react-router-dom';
import {db} from '../firebase'

function Main() {

    const history = useHistory();
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [details, setDetails] = useState([]);
    const [tipoffDetails, setTipoffDetails] = useState([]);

    let {state} = useParams();
    let {city} = useParams();
    let {tipoff} = useParams();
    // console.log(city)
    useEffect(() => {
        db.collection('tipoffs').onSnapshot((snapshot) => {
            setStates(snapshot.docs.map((state) => {
                return(state.id)
            }));
        })
    },[])

    useEffect(() => {
        db.collection('tipoffs').doc(state).collection('tipoff_state').onSnapshot((snapshot) => {
            setCities(snapshot.docs.map((city) => {
                return(city.id)
            }))
        })
    },[state])

    useEffect(() => {
        db.collection('tipoffs').doc(state).collection('tipoff_state').doc(city).collection('tipoff_details').onSnapshot((snapshot) => {
            setDetails(snapshot.docs.map((detail) => {
                return({id: detail.id, data: detail.data()})
            }))
        })
    },[city]);

    useEffect(() => {
        db.collection('tipoffs').doc(state).collection('tipoff_state').doc(city).collection('tipoff_details').doc(tipoff).get().then((doc) => {
            setTipoffDetails(doc.data())
        })
    },[tipoff])

    console.log(tipoffDetails)

    const openState = (state) => {
        if(state){
            history.push(`/main/${state}/city/tipoff`);
        }
    }
    const openCity = (city) => {
        if(city){
            history.push(`/main/${state}/${city}/tipoff`);
        }
    }
    const openTipoff = (tipoff) => {
        if(tipoff){
            history.push(`/main/${state}/${city}/${tipoff}`);
        }
    }

    return (
        <div className="container">
            <div className="states">
                <h1>STATE</h1>
                    {
                        states.map((item, index) =>(
                            <div className="state">
                                <p onClick={() => openState(item)} key={index}>{item}</p>
                            </div>
                        ))
                    }
            </div>
            <div className="cities">
                <h1>CITY</h1>
                    {
                        cities.map((item, index) =>(
                            <div className="city">
                                <p onClick={() => openCity(item)} key={index}>{item}</p>
                            </div>
                        ))
                    }
            </div>
            <div className="tipoffs">
                <h1>TIPOFFS</h1>
                    {
                        details.map((item, index) =>(
                            <div className="tipoff">
                                <p onClick={() => openTipoff(item.id)} key={index}>{item.data.category}</p>
                            </div>
                        ))
                    }
            </div>
            <div className="tipoff_details">
                <h1>TIPOFFS DETAILS</h1>
                    {
                        (
                            <div className="message">
                                <p>{tipoffDetails && 'Urgency Level : ' + tipoffDetails.urgency}</p>
                                <p>{tipoffDetails && 'Message : ' + tipoffDetails.message}</p>
                            </div>
                        )
                    }
            </div>
        </div>
    )
}

export default Main
