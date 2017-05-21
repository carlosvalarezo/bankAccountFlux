import {Dispatcher} from 'flux';
//las acciones llegan al despatcher
//action es un parametro que espera un objeto
//el metodo dispatch le pasa al constructor
//del Dispatcher de Fluxs para que haga su trabajo
//una vez que llega al dispatch, este (el dispatch) internamente llama al store para que registre el evento q
class AppDispatcher extends Dispatcher{
    dispatch(action={})
    {
        console.log("Dispatched: ", action);
        super.dispatch(action);//el constructor del dispatcher busca la definicion del metodo register en los archivos que es llamado
        console.log("despues de llamada a super: ", action);
    }
}

export default new AppDispatcher();