import Card from './Card/Card';
import Stats from './Statistics/Statistics';
import Friends from './Friends/Friends';
import Transactions from './Transactions/Transactions';
import user from '../data/user.json';
import friends from '../data/friends.json';
import stats from '../data/stats.json';
import transactions from '../data/transactions.json';
import css from './app.module.css'

export const App = () => {
  return (
    <div
      className={css.container}
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
