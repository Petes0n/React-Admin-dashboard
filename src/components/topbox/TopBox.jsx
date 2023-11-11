import './topbox.scss'
import { topDealUsers } from '../../data';
function Topbox() {
  return (
    <div className='topBox'>
<h1>Top Deals</h1>
<div className="list">
    {topDealUsers.map(user=>(
        <div className="listItem" key={user.id}>
<div className="user">
    <img src={user.image} alt=''/>
    <div className="usertext">
        <span className="username">{user.username}</span>
        <span className="email">{user.email}</span>
    </div>
</div>
<span className="amount">${user.amount}</span>
        </div>
    ))}
</div>
    </div>
  )
}

export default Topbox;