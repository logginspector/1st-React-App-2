import './ExpensePrice.css';

function expensePrice (props) {
return (
<div className="expense-item__price">
<div>
          ${props.amount}
    </div>
    <div>
        BTC: {props.amount/16600}
    </div>
</div>
    );
}
export default expensePrice;