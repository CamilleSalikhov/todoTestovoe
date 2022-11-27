import './App.css';
import Table from './components/Table';  
import Modal from './components/Modal';
import NotFound from './components/NotFound';
import { Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import FindTodo from './components/FindTodo';
import { useSelector, useDispatch } from 'react-redux';
import { setWholeState } from './store/actions/setWholeState';

function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const state = useSelector(state => state);
  const dispatch = useDispatch;

   

  useEffect(() => {
      localStorage.setItem('MY_APP_STATE', JSON.stringify(state));

  },[state]);

   const modalHandler = () => {
    setModalVisible((prevState) => {
      return !prevState
    })
   }

   console.log(Date.now());

  return (
    <div className="App">
      <Switch>
      <Route path="/" exact>
        <FindTodo />
        <div className=' table-container' >
          <Table status = 'queue' />
          <Table status = 'development' />
          <Table status = 'done' /> 
        </div>
        {modalVisible && <Modal modalHandler={modalHandler} />} 
       </Route>
       <Route path="*" > <NotFound /> </Route>
       </Switch>
        <button onClick={modalHandler} className='createTask'>Create new task</button>
         
    </div>
  );
}

export default App;
