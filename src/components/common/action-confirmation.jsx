const ActionConfirmation = ({yes_func, no_func}) => {
  
  return (
    <div className="action-confirmation-container">
      <p className="confirmation-text">Are you sure you want to cancel?</p>
      <button onClick={yes_func} className="yes-bttn">Yes</button>
      <button onClick={no_func} className="no-bttn">No</button>
    </div>
  )
}

export default ActionConfirmation;