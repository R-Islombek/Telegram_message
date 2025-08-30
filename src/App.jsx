import './App.css'

function App() {
  const SendMessage = (event)=>{
      event.preventDefault();
      const token = "8468483982:AAGaCpLWB8hGXK7svNhHbbM9dNeoK67lQks";
      const chat_id = 8385093353;
      const url = `https://api.telegram.org/bot ${token}/senMessage`;

      const name = event.target.value;
      const surname = event.target.value;

      axios({
           url: url,
           method: "POST",
           data: {
             "chat_id": chat_id,
             "text": name,
           }
      }).then((res)=>{
          alert("Muvaffaqiyatli yuborildi") 
      }).catch((error)=>{
         console.log("Yuborishda xatolik"), error;
         
      })
  }

  return (
    <>
        <div>
              <form id='myForm' onSubmit={SendMessage}>
              <label >Ismingizni kiriting</label>
              <input type="text" id='name' placeholder='Ismingizni kiriting' />
              <label >Familyangizni kiriting</label>
              <input type="text" id='surname'  placeholder='Familyangizni kiriting' />
              <button type='submit'>Yuborish</button>
         </form>
        </div>
    </>
  )
}

export default App
