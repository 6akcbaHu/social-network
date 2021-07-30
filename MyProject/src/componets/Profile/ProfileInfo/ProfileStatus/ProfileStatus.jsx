// import React from 'react';
// import s from '../ProfileInfo.module.css';
// import {updateUserStatusThunkCreator} from "../../../../redux/reducerProfile";
// // import Preloader from "../../common/Preloader/Preloader";
//
//
// // export default ProfileInfo;
//
// class ProfileStatus extends React.Component {
//
//
//     // let tempWrap=JSON.parse (JSON.stringify (this.props.status))
//     state = {
//         editMode: false,
//         status: this.props.status
//     }
//
//
//     activateEditMode = () => {
//
//         this.setState({
//             editMode: true
//         })
//
//     }
//
//     deactivateEditMode = () => {
//         this.setState({
//             editMode: false,
//         });
//         this.props.updateStatus(this.state.status)
//
//     }
//
//     onStatusChange = (e) => {
//         this.setState({
//             status: e.currentTarget.value
//         })
//
//     }
//
//     componentDidUpdate(prevProps, prevState) {
//         if (prevProps.status !== this.props.status) {
//             this.setState({
//                 status: this.props.status
//             })
//         }
//     }
//
//     render() {
//         // function activeText() {
//         //      this.props.status = document.querySelector('#inputs')
//         //      let a= this.props.status
//         //      console.log(this.props.status)
//         //  }
//         // this.props.status = document.querySelector('input').value;
//         // console.log(document.getElementById("inputs"))
//         console.log(this.props.status)
//         return (
//
//             <div>
//                 {!this.state.editMode &&
//                 <div>
//                     <span onDoubleClick={this.activateEditMode}>{this.props.status || 'No status'}</span>
//
//                 </div>
//                 }
//                 {this.state.editMode &&
//                 <div>
//                     <input onChange={this.onStatusChange} value={this.state.status}/>
//                     <button onClick={this.deactivateEditMode}>Сохранить</button>
//                 </div>
//                 }
//             </div>
//         )
//     }
// }
//
//
// // console.log(document.querySelector('#inputs').value)
// export default ProfileStatus