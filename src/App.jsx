import './App.css'
import axios from 'axios';

function App() {
  const SendMessage = (event) => {
    event.preventDefault();
    const token = "8468483982:AAGaCpLWB8hGXK7svNhHbbM9dNeoK67lQks";
    const chat_id = 8385093353;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;

    axios.post(url, {
      chat_id: chat_id,
      text: `Ism: ${name}\nFamiliya: ${surname}`
    })
    .then((res) => {
      document.getElementById("myForm").reset();
      alert("Muvaffaqiyatli yuborildi ✅"); 
  
    })
    .catch((error) => {
      console.error("Yuborishda xatolik ❌", error);
    });
  }

  return (
    <>
      <div>
        <form id='myForm' onSubmit={SendMessage}>
          <label>Ismingizni kiriting</label>
          <input type="text" id='name' placeholder='Ismingizni kiriting' />
          <label>Familyangizni kiriting</label>
          <input type="text" id='surname' placeholder='Familyangizni kiriting' />
          <button type='submit'>Yuborish</button>
        </form>
      </div>
    </>
  )
}

export default App