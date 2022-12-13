import "./App.css";
import Loader from "./components/Loader";
import MainContent from "./components/MainContent";
import { useGlobalState } from "./hooks/useGlobalState";
import AppLayout from "./layouts/AppLayout";

function App() {
  const [state] = useGlobalState();

  return (
    <>
      {state.loading && <Loader />}
      <AppLayout>
        <MainContent />
      </AppLayout>
    </>
  );
}

export default App;
