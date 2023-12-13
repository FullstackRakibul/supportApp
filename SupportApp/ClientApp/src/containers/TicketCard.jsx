import {useEffect, useState} from "react";
import axios from "axios";

const TicketCard = () => {

    const config = {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        }
    };
    
    const  [ticket , setTicket ] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await axios.get("https://localhost:7295/api/Ticket?format=json",config);
                setTicket(response);
                
            }catch (error){
                console.log("API error ",
                console.error());
            }
        };
        fetchData();
    }, []);
    console.log(ticket);
    
    return (
      <>
        
      </>
    );
}

export default TicketCard;