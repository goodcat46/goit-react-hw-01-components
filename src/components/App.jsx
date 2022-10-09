import Card from './Card/Card';
import user from './data/user.json';
import Stats from './Stats/Stats';
import stats from './data/stats.json';
import Friends from './Friends/Friends';
import friends from './data/friends.json';
import Transactions from './Trans/Transactions';
import transactions from './data/transactions.json';
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
