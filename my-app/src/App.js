import css from './App.module.css';
import HTTPHooks from './components/HTTPHooks';
import HTTPPost from './components/HTTPPost';
import HTTPRequests from './components/HTTPRequests';

function App() {
  return (
    <div className={css.App}>
      {/* <HTTPRequests /> */}
      {/* <HTTPPost /> */}
      <HTTPHooks />
    </div>
  );
}

export default App;