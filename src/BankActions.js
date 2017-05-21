import AppDispatcher from './AppDispatcher';
import constants from './constants';

let BankActions = {
    /*
     * Create an account with empty value
     * */
    //cuando vayamos a crear una cuenta, envia un mensaje con el objeto:
    //type y ammount
    //el tipo (type) es de tipo constante definido en el archivo de contantes
    //y amount es el valor que posteriormente cambiara el estado
    createAccount()
    {
        AppDispatcher.dispatch({
            type: constants.CREATED_ACCOUNT,
            ammount: 0
        });
        console.log("BankActions.createAccount");
    },
    /*
     * @param {number} ammount to deposit
     * */
    depositIntoAccount(ammount)
    {
        AppDispatcher.dispatch({
            type: constants.DEPOSITED_INTO_ACCOUNT,
            ammount: ammount
        });
        console.log("BankActions.despositAccount");

    },
    /*
     * @param {number} ammount to withdraw
     * */
    withdrawFromAccount(ammount)
    {
        AppDispatcher.dispatch({
            type:constants.WITHDREW_FROM_ACCOUNT,
            ammount:ammount
        });
        console.log("BankActions.withdrawAccount");


    }
};

export default BankActions;