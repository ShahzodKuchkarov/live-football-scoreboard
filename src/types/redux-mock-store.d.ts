declare module 'redux-mock-store' {
    import { AnyAction, Dispatch, Middleware } from 'redux';
  
    export interface MockStoreEnhanced<S = unknown, A extends AnyAction = AnyAction> {
      getState(): S;
      getActions(): A[];
      clearActions(): void;
      dispatch: Dispatch<A>;
      subscribe(listener: () => void): () => void;
      replaceReducer(nextReducer: any): void;
    }
  
    interface ConfigureMockStore {
      <S = unknown, A extends AnyAction = AnyAction>(middlewares?: Middleware[]): (
        state?: S
      ) => MockStoreEnhanced<S, A>;
    }
  
    const configureStore: ConfigureMockStore;
    export default configureStore;
  }
  