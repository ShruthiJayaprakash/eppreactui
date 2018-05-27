import * as types from '../constants/ActionTypes';

const initialState ={
    isOLT : false
}

export default function oltUploadRequest(state={initialState},action){
    console.log("OLTEXCELUPLOAD Request");
    console.log(JSON.stringify(action)+"äction");
    switch(action.type){
        case 'OLTEXCELUPLOAD'+types.RECV_DATA:   
        return Object.assign({}, state, {
            isOLT: true
          })
        
        default:
            return state;
    }
}
