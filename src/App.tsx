import "./App.css";
import summarize from "./summarize";

//const aiResponse = completion.choices[0].message.content;

//const aiResponse = "whats up gang";
function App() {
  return (
    <>
      <h1>SummaryGPT</h1>
      <div>Hello gang {summarize()}</div>
    </>
  );
}

export default App;
