import { create } from "zustand";
import { userList } from "../userlist";

export const useConectionZustand = create((set, _get) =>({
    
    conection: [],
    setConection:(user,setValidUser,setError) => {
      
      const userElement=userList.filter(userSaved=> (userSaved.username===user.username && userSaved.password===user.password)
      )

      if(userElement){
        setError(false)
        setValidUser(true)
        return set({conection:userElement})  }
        else{
        setValidUser(false)
        setError(true)
        return
      }
    } 
      
    }
  ));


