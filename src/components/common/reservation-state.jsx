const ReservationCompleted = () => {
  return (
    <span className="r-state r-completed">Completed</span>
  )
}

const ReservationOngoing = () => {
  return (
    <span className="r-state r-ongoing">Ongoing</span>
  )
}

const ReservationCancelled = () => {
  return (
    <span className="r-state r-cancelled">Cancelled</span>
  )
}

const ReservationNotTime = () => {
  return (
    <span className="r-state r-not-time">Not Yet Time</span>
  )
}

const ReservationState = ({state}) => {
//   const r_state = ['completed', 'ongoing', 'not yet time', 'cancelled'];

  return (
    (state === "completed") ? <ReservationCompleted /> : 
    (state === "ongoing") ? <ReservationOngoing /> : 
    (state === "cancelled") ? <ReservationCancelled /> :
     <ReservationNotTime />
  )
}

export default ReservationState;