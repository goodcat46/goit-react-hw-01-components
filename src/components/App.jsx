import Card from './card/Card';
import user from '../user.json';
import Stats from './stats/Stats';
import stats from '../stats.json';
import Friends from './friends/Friends';
import friends from '../friends.json';
import Transactions from './trans/Transactions';
import transactions from '../transactions.json';

export const App = () => {
  return (
    <div
      className="container"
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Card
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Stats stats={stats} />
      <Friends friends={friends} />
      <Transactions transactions={transactions} />
    </div>
  );
};
