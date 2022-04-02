import { ChatEngine } from "react-chat-engine";

import "./App.css";
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";

const App = () => {
  if (!localStorage.getItem("username")) {
    return <LoginForm />;
  }

  return (
    <ChatEngine
      height="100vh"
      projectID="71be4948-7ce8-425a-8448-003955f8a953"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
