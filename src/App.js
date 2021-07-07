import React from "react";
import Container from "./components/Container/Container";
import Profile from "./components/SocialProfile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistry from "./components/TransactionHistory/TransactionHistory";

import user from "./components/SocialProfile/user.json";
import statisticalData from "./components/Statistics/statistical-data.json";
import friends from "./components/FriendList/friends.json";
import transactions from "./components/TransactionHistory/transactions.json";

const App = () => {
  return (
    <Container>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistry transactions={transactions} />
    </Container>
  );
};

export default App;
