import { useLoaderData, useNavigate, useParams } from "react-router-dom";



const PostDetails = () => {
    // hooks

    const navigate = useNavigate()

    const params = useParams()
    console.log(params)

    // handleEvents

    const handleGoBack = () =>{
        navigate(-1)
    }

    const postDetails = useLoaderData()
    const {title, id} = postDetails
    return (
        <div style={{border: '2px solid black', padding: '10px', borderRadius:'15px'}}>

            <h3>Post Details
            </h3>

            <h4>{title}</h4>
            <h5>Id :{id} </h5>

            <button onClick={handleGoBack}>Go Back</button>
            
        </div>
    );
};

export default PostDetails;