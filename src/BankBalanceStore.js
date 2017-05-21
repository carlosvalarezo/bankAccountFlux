import {EventEmitter} from 'fbemitter';
import AppDispatcher from './AppDispatcher';
import constants from './constants';
//en este archivo se maneja el state
//se cambia y se devuelve el state
const CHANGE_EVENT = 'change';
let __emitter = new EventEmitter();
let balance = 0;

let BankBalanceStore =
{
    getState()
    {
        console.log("va a devolver balance");
        return balance;
    },
    addListener: (callback) => {
        console.log("callback => " + callback);
        return __emitter.addListener(CHANGE_EVENT, callback);

    }
};
//aqui se vincula el store con el dispatcher
//segun el tipo de accion
BankBalanceStore._dispatchToken = AppDispatcher.register((action) => {
    switch(action.type)
    {
        case constants.CREATED_ACCOUNT:
            balance = 0;
            __emitter.emit(CHANGE_EVENT);
            console.log("en BankStore, caso " + constants.CREATED_ACCOUNT);
            break;
        case constants.DEPOSITED_INTO_ACCOUNT:
            balance = balance + action.ammount;
            __emitter.emit(CHANGE_EVENT);
            console.log("en BankStore, caso " + constants.DEPOSITED_INTO_ACCOUNT);
            break;
        case constants.WITHDREW_FROM_ACCOUNT:
            balance = balance - action.ammount;
            __emitter.emit(CHANGE_EVENT);
            console.log("en BankStore, caso " + constants.WITHDREW_FROM_ACCOUNT);
            break;
        default: break;

    }
});

export default BankBalanceStore;