import css from './App.module.css';
import HTTPRequests from './components/HTTPRequests';

function App() {
  return (
    <div className={css.App}>
      <HTTPRequests />
    </div>
  );
}

export default App;