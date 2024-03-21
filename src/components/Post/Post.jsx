import PropTypes from 'prop-types'
import './Post.css'
import { Link, useNavigate } from 'react-router-dom';


const Post = ({ post }) => {

    

    const { title, id, body } = post
    const postStyle = {
        border: '2px solid black',
        padding: '10px',
        borderRadius: '15px',
        margin: '5px'
    }

    const navigate = useNavigate()

    const handleShowDetail = () => {

        navigate(`/post/${id}`)

    }


    return (
        <div style={postStyle} className='align' >

            <div>
                <h2> Title : {title} </h2>

                <h3> Id : {id}</h3>
                <p>{body}</p>
            </div>

           <div>

            <Link to = {`/post/${id}`} ><button style={{color: 'white', backgroundColor:'gray'}}>Post Details</button></Link>

            <button onClick={handleShowDetail} >Show Details</button>
           
           </div>


        </div>
    );
};

Post.propTypes = {
    post: PropTypes.object.isRequired
}

export default Post;