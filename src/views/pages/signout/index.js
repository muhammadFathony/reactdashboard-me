import { withRouter  } from 'react-router-dom'
const SignOut = (props) => {
    localStorage.removeItem("simrs_token");
    props.history.push('/login');
}

export default withRouter(SignOut)