import * as types from '../constants/ActionTypes';
import axios from 'axios';


function requestData(actionType) {
	return {type: actionType + types.REQ_DATA}
};

function receiveData(actionType, json,params) {
	console.log("actionType"+actionType)
	console.log("params"+JSON.stringify(params));
	console.log("data"+JSON.stringify(json))
	return{
		type: actionType + types.RECV_DATA,
		data: json,
		params: params,
	}
};

function receiveError(actionType, json) {
	console.log("json in receiveError"+json)
	return {
		type: actionType + types.RECV_ERROR,
		data: json
	}
};

export function fetchData(url, actionType, method, params ) {
	console.log(actionType);
	return function(dispatch) {
		dispatch(requestData(actionType));
		let config = {
			url: url,
			method: method || 'get',
			timeout: 20000,
			responseType: 'json',
			data: params
		}
		return axios(config)
			.then(function(response) {
				dispatch(receiveData(actionType, response.data,params));
			})
			.catch(function(response){
				dispatch(receiveError(actionType, response.data));
			})
	}
};
