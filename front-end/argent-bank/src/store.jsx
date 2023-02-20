import { createStore } from 'react-redux'
import { reducer } from './reducers/reducer'


const store = createStore(
  reducer
)