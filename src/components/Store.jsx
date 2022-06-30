import { createContext, useState } from "react";

export const TicketContext = createContext();

export const TicketContextProvider = ({ children }) => {
    
    const [Ticket,SetTicket] = useState([])

    return <TicketContext.Provider value={{ Ticket,SetTicket }}>
            {children}
    </TicketContext.Provider>
} 