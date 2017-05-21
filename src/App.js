import React, {Component} from 'react';
import BankBalanceStore from './BankBalanceStore';
import BankActions from './BankActions';
import './App.css';

class App extends Component {
    constructor() {
        super(...arguments);
        BankActions.createAccount();
        this.state = {balance: BankBalanceStore.getState()}
    }

    componentDidMount() {
        //aqui se registra
        console.log("Llega a didmount");
        this.storeSubscription = BankBalanceStore.addListener((data) => this.handleStoreChange(data));
    }

    componentWillUnmount()
    {
        console.log("Llega a WILLUNmount");
        this.storeSubscription.remove();
    }

    handleStoreChange()
    {
        this.setState({balance:BankBalanceStore.getState()});
    }

    deposit()
    {
        BankActions.depositIntoAccount(Number(this.refs.ammount.value));
        this.refs.ammount.value = '';
    }

    withdraw()
    {
        BankActions.withdrawFromAccount(Number(this.refs.ammount.value));
        this.refs.ammount.value = '';
    }

    render() {
        return (<div>
                <header>Flux demo</header>
                <h1> Your balance  is ${(this.state.balance).toFixed(2)}</h1>
                <div>
                    <input type="text" placeholder="Enter ammount" ref="ammount"/>
                    <br/>
                    <button onClick={this.withdraw.bind(this)}>Withdraw</button>
                    <button onClick={this.deposit.bind(this)}>Deposit</button>

                </div>
            </div>


        );
    }
}

export default App;
