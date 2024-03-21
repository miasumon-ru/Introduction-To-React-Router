import { useLoaderData } from "react-router-dom";



const PostDetails = () => {

    const postDetails = useLoaderData()
    const {title, id} = postDetails
    return (
        <div style={{border: '2px solid black', padding: '10px', borderRadius:'15px'}}>

            <h3>Post Details
            </h3>

            <h4>{title}</h4>
            <h5>Id :{id} </h5>
            
        </div>
    );
};

export default PostDetails;