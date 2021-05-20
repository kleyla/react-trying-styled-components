import { StyledButton } from "./components/Button.style";
import { AppContainer } from "./components/Container.style";
import { GlobalStyles } from "./components/GlobalStyles.style";

function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      <p>hi</p>
      <StyledButton buttonLabel="Click" backgroundColor="red" />
    </AppContainer>
  );
}

export default App;
