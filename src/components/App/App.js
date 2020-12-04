import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Main from '../Main/Main';
import Header from '../Header/Header';
import CardList from '../CardList/CardList';
import './App.css';
import { getUsers, getExchangeRates } from '../../utils/api';

function App() {

  const [currentUser, setCurrentUser] = React.useState(null);
  const [users, setUsers] = React.useState(null);
  const [exchangeRates, setExchangeRates] = React.useState(null);
  const [selectedValute, setSelectedValute] = React.useState(null);
  const [defaultValute, setDefaultValute] = React.useState(null);

  React.useEffect(() => {
    getUsers()
      .then(data => {
        setCurrentUser(data.users[0]);
        setUsers(data.users);
      })
      .catch(() => console.log('error'));

    getExchangeRates()
    .then(data => {
      setSelectedValute({code: 'GBP', value: data.Valute.GBP.Value});
      setDefaultValute({code: 'USD', value: data.Valute.USD.Value});
      setExchangeRates(data.Valute);
    })
    .catch(() => console.log('error'));
  },[])

  function handleChangeCurrency(selectedValuteCode) {

    if (selectedValuteCode === 'RUB') {
      setSelectedValute({
        code: 'RUB',
        value: 1,
      })
      return;
    }
    setSelectedValute({
      code: selectedValuteCode,
      value: exchangeRates[selectedValuteCode].Value,
    })
  }

  function handleChangeCard(selectedCard) {
    setCurrentUser(selectedCard);
  }

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          { exchangeRates &&
            <Main
              user={currentUser}
              selectedValute={selectedValute}
              exchangeRates={exchangeRates}
              defaultValute={defaultValute}
              onSelect={handleChangeCurrency}
            />
          }
        </Route>
        <Route path="/cards">
          { exchangeRates &&
            <CardList
              users={users}
              currentUser={currentUser}
              onSelect={handleChangeCard}
            />
          }
        </Route>
      </Switch>
    </div>
  );
}

export default App;
