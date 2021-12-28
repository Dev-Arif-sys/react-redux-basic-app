import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './Component/redux/store';
import CakeContainer from './Component/CakeContainer';
import HookCakeContainer from './Component/HookCakeContainer';
import HookIceCreamContainer from './Component/redux/HookIceCreamContainer';
import UserContainer from './Component/redux/UserContainer';
import PostContainer from './Component/redux/PostContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <UserContainer></UserContainer>
      <PostContainer></PostContainer>
     {/* <CakeContainer></CakeContainer>
     <HookCakeContainer></HookCakeContainer>
     <HookIceCreamContainer></HookIceCreamContainer> */}
     </div>
    </Provider>
  );
}

export default App;
