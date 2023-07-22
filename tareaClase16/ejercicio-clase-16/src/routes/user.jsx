import { useConectionZustand } from "../store/conectionZustand"


export default function User(){
    const {conection}=useConectionZustand()
    console.log(conection)
    return (
        <div>
           
            {conection>0 ?(
                conection.map(user=>(
                    <p className="text-slate-300 text-center text-xl">{user.email}</p>
                ))
            ): null}
           
        </div>
    )
}