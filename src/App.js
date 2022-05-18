import { Fragment } from 'react';
import './App.css';
import Header from './components/Header';
import Todos from './components/Todos';

const App = () => {
  return(
    // Sử dụng thẻ Fragment thay cho thẻ div để chứa các thẻ khác, ko có sẽ bị lỗi
    
    <Fragment>
      <Header/>
      <Todos/>
    </Fragment>

  )
}

export default App;
