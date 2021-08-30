/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.scss';
import logo from './assets/Logo/Wordmark.svg';
import MessagePreview from './components/reusables/MessagePreview';
import UserPreview from './components/reusables/UserPreview';
import Thread from './components/messaging/Thread';
import data from './assets/data';

const { 
  activateThread,
  threads, 
  directMessages 
} = data;
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
            src={logo}
          />
        </a>
        <div className="swarm__landing__inbox">
          <h4>Team</h4>
          {
            threads.map((thread) => {
              const {
                unreadCount,
                title,
                content,
              } = thread;

              return (
                <MessagePreview
                  content={content}
                  title={title}
                  unreadCount={unreadCount}
                />
              );
            })
          }
        </div>
        <div className="swarm__landing__inbox">
          <h4>Personal</h4>
          {directMessages.map(dm => {
            return (
              <UserPreview
                dm={dm || {}}
              />
            );
          })}
        </div>
      </div>
      <Thread
        activateThread={activateThread}
      />
    </div>
  );
}

export default App;
