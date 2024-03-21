
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const User = ({user}) => {

    const {id, name , email , phone } = user
    const userStyle = {
        border : '2px solid black',
        padding : '10px',
        borderRadius : '15px',
        margin : '5px'
    }
    return (
        <div style={userStyle}>
            <h2> Name : {name}</h2>
            <h2>Id : {id} </h2>
            <h3>Email : {email} </h3>
            <h4>Phone :{phone} </h4>

            <Link to={`/user/${id}`} >User Details</Link>
            
        </div>
    );
};

User.propTypes = {

    user : PropTypes.object.isRequired
    
};

export default User;