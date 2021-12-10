import React,{useEffect, useState} from 'react';
import './Tipoffs.css';
import {db} from '../firebase'

function Tipoffs() {

    // const [states, setStates] = useState([])

    // useEffect(() => {
    //     db.collection('tipoffs').onSnapshot((snapshot) => {
    //         setStates(snapshot.docs.map((state) => {
    //             return({id: state.id, data: state.data()})
    //         }));
    //     })
    // },[])
    // console.log(states)

    return (
        <div className="container">
            <div className="nooftipoffs">
                {/* <h1>{states.length}</h1> */}
            </div>
        </div>
    )
}

export default Tipoffs
