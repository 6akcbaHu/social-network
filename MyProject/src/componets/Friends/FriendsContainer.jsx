import s from './Friends.module.css';
import Friends from "./Friends";
import {connect} from "react-redux";
import {stateSelector} from "../selectors/friendsSelectors";
// import StoreContext from "../../StoreContext";
//
// const FriendsContainer = (props) => {
//
//
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState()
//                 return <Friends state={state.friendsPage}/>
//             }}
//         </StoreContext.Consumer>
//     )
// }
let mapStateToProps = (state) => {
    return {
        state:stateSelector(state)
    }
}

const FriendsContainer = connect(mapStateToProps)(Friends);
export default FriendsContainer;