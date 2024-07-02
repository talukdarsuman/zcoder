
export default function Q_A() {
  return (
    < >
      <div >
        <div style={{ width: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}><h1>Save Problems</h1></div>
          <h3 style={{ marginLeft: '10vw' }}>Question:</h3>
          <textarea name="Question" placeholder='Enter Your Question here' id="YourQuestion" style={{ height: '30vh', width: '80vw', marginLeft: '10vw', backgroundColor: 'rgba(0,20,70,0.6)', borderRadius: '6px',color:'aliceblue' }} required></textarea>
          <h3 style={{ marginLeft: '10vw' }}>Answer:</h3>
          <textarea name="Question" placeholder='Enter Your Answer here' id="YourQuestion" style={{ height: '50vh', width: '80vw', marginLeft: '10vw', backgroundColor: 'rgba(0,20,70,0.6)', borderRadius: '6px',color:'aliceblue' }}></textarea>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '20px',
          marginBottom:'30px'
        }}>
          <button style={{ fontSize:'1.2rem',padding: '3px 40px', backgroundColor: 'rgba(60,50,10,0.4)', borderRadius: '5px', marginRight: '30px',color:'aliceblue' }}>Save as Public</button>
          <button style={{ fontSize:'1.2rem',padding: '3px 37px', backgroundColor: 'rgba(60,50,10,0.4)', borderRadius: '5px', marginLeft: '30px',color:'aliceblue' }}>Save as Private</button>
        </div>
      </div>
    </>
  )
}
