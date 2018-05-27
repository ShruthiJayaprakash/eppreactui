import * as types from '../constants/ActionTypes';

const initialState ={
    user:null,
    team:null,
    isEligibleForCPNUpload:false,
    isLoggedIn: false
}

export default function loginRequest(state={initialState},action){
    console.log("Request");
    console.log(JSON.stringify(action)+"äction");
    switch(action.type){
        case 'LOGIN'+types.RECV_DATA:
        localStorage.setItem('isLoggedIn',true);    
        // localStorage.setItem('isEligibleForCPNUpload',action.data.isEligibleForUploadEngProvData);    
        // localStorage.setItem('team',action.data.team);   
        // localStorage.setItem('user',action.data.userName);    
        return Object.assign({}, state, {
            user:action.data.userName,
            team:action.data.team,
            isEligibleForCPNUpload:action.data.isEligibleForUploadEngProvData,
            isLoggedIn: true
          })
        
        default:
            return state;
    }
}
