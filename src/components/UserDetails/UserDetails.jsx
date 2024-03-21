import { useLoaderData } from "react-router-dom";



const UserDetails = () => {
    const user = useLoaderData()

    const {name , email} = user
   
    return (
        <div style={{border: '2px solid black', padding: '10px', borderRadius: '15px'}}>

            <h3>Details About User </h3>

            <h4> Name : {name}</h4>
            <p>Email : {email} </p>

            
        </div>
    );
};

export default UserDetails;