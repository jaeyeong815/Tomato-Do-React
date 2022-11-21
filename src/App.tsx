import GlobalStyle from './styles/GlobalStyles';
import Header from './components/common/Header';
import Main from './pages/Main';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Main />
    </div>
  );
}

export default App;
