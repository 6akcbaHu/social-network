import Friends from "./Friends";
import {connect} from "react-redux";
import {stateSelector} from "../selectors/usersSelectors";

let mapStateToProps = (state) => {
    return {
        friendsList:stateSelector(state)
    }
}

const FriendsContainer = connect(mapStateToProps)(Friends);
export default FriendsContainer;