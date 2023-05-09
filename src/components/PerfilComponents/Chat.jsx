import React, { useRef, useEffect, useState } from "react";
import { styles } from "../../styles";
import { Header, Footer, Sidebar } from "..";
import { getUserLogged } from "../../api";
import { race } from "rxjs";
import { addDoc, collection, limit, orderBy, query, serverTimestamp } from "firebase/firestore";
import { databaseApp } from "../../services/firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { UsuarioLogado } from "../../constants";

export const ChatMessage = (props) => {
  const { text, uid, photoURL } = props.message;
  // const messageClass = props.idField === props.idField ? "justify-self-end" : "justify-self-start";
  const messageClass = uid === UsuarioLogado ? 'sent' : 'received';

  useEffect(() => {
    console.log(uid);
  }, []);

  return (
    <li className="flex justify-end">
      <div className="relative max-w-xl px-4 py-4 text-gray-700 rounded shadow">
        <div className={`message ${messageClass}`}>
          <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
          <p>{text}</p>
        </div>
      </div>
    </li>

    // <div className={`message ${messageClass}`}>
    //   <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
    //   <p>{text}</p>
    // </div>
  );

};

const Chat = () => {
  const dummy = useRef();
  const [user, setUser] = useState({});
  const [uid, setUid] = useState();


  const messageRef = collection(databaseApp, "messages");
  const Querymessages = query(messageRef, orderBy("createdAt"), limit(100));
  const [messages] = useCollectionData(Querymessages, { idField: uid });
  const [formValue, setFormValue] = useState("");


  const sendMessage = async (e) => {
    e.preventDefault();

    await addDoc(messageRef, {
      text: formValue,
      createdAt: serverTimestamp(),
    });
    setFormValue("");
    console.log("ref", dummy.current);
    dummy.current.scrollIntoView({ behavior: 'smooth' });
    // dummy.current.scrollBottom += dummy.current.offsetHight
  };


  const getUser = async () => {
    setUser(await getUserLogged());
  };

  useEffect(() => {
    getUser();
    setUid(user.id);
  }, []);

  return (
    <>
      <div>
        <h1 className="font-bold text-xl">
          <i className="mdi mdi-chat pr-2" />
          Chat
          {console.log(user)}
        </h1>
        <p className="text-gray-400 text-sm pt-2">Gerenciar seus contatos</p>
      </div>
      <div className="gap-x-2 ">
        <div className="container">
          {/* container mensagem */}
          <div className="min-w-full rounded lg:grid lg:grid-cols-3">

            {/* nav bar contatos */}
            {/* <div className="border-r border-gray-300 lg:col-span-1">
              <div className="mr-3 my-3">
                <div className="relative text-gray-600">

                  <div className="w-full">
                    <div className="flex rounded-md bg-gray-300 text-sm items-center p-2">
                      <i className="mdi mdi-magnify text-[20px] text-gray-400" />
                      <input
                        name="search"
                        placeholder="Search"
                        required
                        className={`w-full appearance-none outline-none bg-transparent pl-2`}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <ul className="flex flex-col gap-2 overflow-auto h-[20rem]">
                <h2 className="my-2 mb-2 ml-2 text-lg text-gray-600">
                  Chats Recentes
                </h2>

                <Contato props={user} />

              </ul>
            </div> */}

            {/*header container*/}
            <div className="hidden lg:col-span-2 lg:block">
              <div className="w-full">
                <div className="relative flex items-center p-3 border-b border-gray-300 bg-white">
                  <img
                    className="object-cover w-10 h-10 rounded-full"
                    src={user.foto}
                  />
                  <span className="block ml-2 font-bold text-gray-600">
                    {user.apelido}
                  </span>
                  {/* <span className="absolute w-3 h-3 bg-green-600 rounded-full left-10 top-3"></span> */}
                </div>

                {/*body chat*/}
                <div className="relative w-full p-6 overflow-y-auto h-[16rem]">
                  <ul className="space-y-2">
                    {messages &&
                      messages.map((msg, index) => <ChatMessage key={index} message={msg} />)}
                    <li className="flex justify-end">
                      <div id="final" ref={dummy}></div>
                      {/* <div className="relative max-w-xl px-4 py-2 text-white bg-primary">
                        <span className="block">eai</span>
                      </div> */}
                    </li>
                  </ul>
                </div>

                <div className="flex items-center bg-white p-3 border-t border-primary ">

                  <input
                    type="text"
                    value={formValue}
                    onChange={e => setFormValue(e.target.value)}
                    placeholder="Mensagem"

                    className="w-full py-2 pl-4 mx-3 bg-gray-100 rounded-full outline-none focus:text-gray-700"
                    name="message"
                    required
                  />
                  <form onSubmit={sendMessage}>
                    <button type="submit" disabled={!formValue}>
                      <svg
                        className="w-5 h-5 text-primary origin-center transform rotate-90"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                      </svg>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Contato = ({ props }) => {
  return (
    <li>
      <a className="flex rounded-md items-center px-3 py-2 text-sm transition duration-150 ease-in-out border border-gray-300 cursor-pointer hover:bg-gray-300 focus:outline-none">
        <img className="object-cover w-10 h-10 rounded-full" src={props.foto} />

        <div className="w-full pb-2 rounded-lg">
          <div className="flex justify-between">
            <span className="block ml-2 font-semibold text-gray-600">
              {props.apelido}
            </span>
            <span className="block ml-2 text-sm text-gray-600">25 minutes</span>
          </div>
          <span className="block ml-2 text-sm text-gray-600">
            Olá, tudo bem?
          </span>
        </div>
      </a>
    </li>
  );
};

export default Chat;
