import './App.css';
import Table from './components/Table';  
import Modal from './components/Modal';
import './components/TaskPage.css'
import NotFound from './components/NotFound';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import FindTodo from './components/FindTodo';
import { useSelector, useDispatch } from 'react-redux';
import { dragUpdate, DRAG_UPDATE } from './store/actions/dragUpdate';
import { DragDropContext } from 'react-beautiful-dnd';
import { dragInside } from './store/actions/dragInside';
import TaskPage from './components/TaskPage';

function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalSearchVisible, setModalSearchVisible] = useState(false);
  const state = useSelector(state => state.todos);
  const globalState = useSelector(state => state)
  const dispatch = useDispatch();

   

  useEffect(() => {
      localStorage.setItem('MY_APP_STATE', JSON.stringify(globalState));

  },[globalState]); 

   const modalHandler = () => {
    setModalVisible((prevState) => {
      return !prevState
    })
   }

   const searchModalHandler = () => {
    setModalSearchVisible((prevState) => {
      return !prevState
    })
   }


   const handleOnDragEnd = ( e) => {
    if (!e.destination) return;
    const dragSource = e.source.droppableId.slice(2);
     
    const dragDestination = e.destination.droppableId.slice(2);
     
const dragTo = Array.from(state[dragDestination]);
const dragFrom = Array.from(state[dragSource]);
 

if (dragDestination === dragSource) {
  const [cutOutItem] =dragFrom.splice(e.source.index, 1);
  dragFrom.splice(e.destination.index, 0 , cutOutItem)
  dispatch(dragInside({[dragSource]:dragFrom}))
} else {

let [cutOutItem] = state[dragSource].splice(e.source.index, 1);
cutOutItem.taskStatus  =  dragDestination;
 
const dragFromResult = dragFrom.filter((element, index) => {
  return index !== e.source.index
})
 
 dragTo.splice(e.destination.index, 0, cutOutItem);
 

let result = []
 
  


result = [
  {[dragSource]: dragFromResult},
  {[dragDestination]: dragTo}
 ]
 
 dispatch(dragUpdate(result));
}
      
   }
 


  return (
    <div className="App">
      <Switch>
        <Route path='/' exact>
        <Redirect to="/tasks" />  
        </Route>
      <Route path="/tasks" exact>
        {modalSearchVisible &&  <FindTodo modalHandler = {searchModalHandler} />}
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <div className='headersTable'>
            <h1>Queue</h1>
            <h1>Development</h1>
            <h1>Done</h1>
          </div>
        <div className='table-container' >
          <Table status = 'queue' />
          <Table status = 'development' />
          <Table status = 'done' /> 
        </div>
        </DragDropContext>
        <div className='buttonContainer'> 
        <button onClick={modalHandler} className='moduleButton'>New task</button>
        <button onClick={searchModalHandler} className='moduleButton'>Find task</button>
        </div>
        {modalVisible && <Modal type='add' modalHandler={modalHandler} />} 
       </Route>
       <Route path = {'/tasks/:taskId'}>
        <TaskPage />
       </Route>
       <Route path="*" > <NotFound /> </Route>
       </Switch>
           
         
    </div>
  );
}

export default App;
