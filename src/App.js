/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.scss';
import MessagePreview from './components/reusables/MessagePreview';
import UserPreview from './components/reusables/UserPreview';
import Thread from './components/messaging/Thread';

function App() {
  return (
    // Index Component
    <div className="swarm">
      <div className="swarm__landing">
        <a
          className="swarm__landing__logo"
          href="#"
        >
          <img
            alt="buble logo"
            src="./Logo/Wordmark.svg"
          />
        </a>
        <div className="swarm__landing__inbox">
          <h4>Team</h4>
          <MessagePreview unreadCount={2} />
          <MessagePreview />
        </div>
        <div className="swarm__landing__inbox">
          <h4>Personal</h4>
          <UserPreview unreadCount={2} />
          <UserPreview />
        </div>
      </div>
      <Thread />
    </div>
  );
}

export default App;
