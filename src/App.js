import './App.css';
import Table from './components/Table';  
import Modal from './components/Modal';
import NotFound from './components/NotFound';
import { Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import FindTodo from './components/FindTodo';
import { useSelector, useDispatch } from 'react-redux';
import { dragUpdate, DRAG_UPDATE } from './store/actions/dragUpdate';
import { DragDropContext } from 'react-beautiful-dnd';
import { dragInside } from './store/actions/dragInside';

function App() {
   

   

  return (
    <div className="App">
      hewow
         
    </div>
  );
}

export default App;
