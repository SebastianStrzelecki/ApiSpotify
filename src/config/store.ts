import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import stateAlbums from '../Search/search'
import loggerMiddleware from './logger-middleware';
import promiseMiddleware from 'redux-promise-middleware';

export interface IRootState {
    readonly stateAlbums: any;
  }

export const rootReducer = combineReducers<IRootState>({
    stateAlbums
  });

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk,loggerMiddleware,promiseMiddleware)
  );
  
