// package imports
import { useState, useEffect } from "react";

// component import
import PersonCard from "../components/PersonCard"

export default function PeoplePage() {
    const [peopleData, setPeopleData] = useState([])

    useEffect( () => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/people')
                const result = await response.json();
                setPeopleData(result)
            }
            catch (error) {
                console.error("Error fetching data:", error)
            }
        };
        fetchData();
    }, [])

    const peopleComponents = peopleData.map((person) => <PersonCard key={person.id} firstName={person.firstName} lastName={person.lastName}/>)
    
    return (
        <>
        <div id="people-wrapper">
            {peopleComponents}
        </div>
        </>
    )
}