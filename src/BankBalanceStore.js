import {Store} from 'flux/utils';
import AppDispatcher from './AppDispatcher';
import constants from './constants';
//en este archivo se maneja el state
//se cambia y se devuelve el state
let balance = 0;

class BankBalanceStore extends Store {
    getState()
    {
        console.log("va a devolver balance");
        return balance;
    }

    __onDispatch(action)
    {
        switch(action.type)
        {
            case constants.CREATED_ACCOUNT:
                balance = 0;
                this.__emitChange();
                console.log("en BankStore, caso " + constants.CREATED_ACCOUNT);
                break;
            case constants.DEPOSITED_INTO_ACCOUNT:
                balance = balance + action.ammount;
                this.__emitChange();
                console.log("en BankStore, caso " + constants.DEPOSITED_INTO_ACCOUNT);
                break;
            case constants.WITHDREW_FROM_ACCOUNT:
                balance = balance - action.ammount;
                this.__emitChange();
                console.log("en BankStore, caso " + constants.WITHDREW_FROM_ACCOUNT);
                break;
            default: break;

        }

    }
};

export default new BankBalanceStore(AppDispatcher);