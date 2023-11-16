import "./OneNabidka.css"

const OneNabidka = ({oneNabidka}) => {
  const {_id,index,nemovitost,kraj,okres,jmeno,email,tel,date} = oneNabidka;

  return <div className="oneNabidka">
  <p>{_id}</p>
  <p>{index+1}</p>
  <p>{nemovitost}</p>
  <p>{kraj}</p>
  <p>{okres}</p>
  <p>{jmeno}</p>
  <p>{email}</p>
  <p>{tel}</p>
  <p>{date}</p>
  <br />
  
</div>
}

export default OneNabidka