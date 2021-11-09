import React, {
  useEffect,
  useState,
} from 'react';
import './App.css';
import logo from './logo.svg';

function App() {
  const [error, setError] =
    useState(null);
  const [isLoaded, setIsLoaded] =
    useState(false);
  const [items, setItems] = useState(
    []
  );

  // Примечание: пустой массив зависимостей [] означает, что
  // этот useEffect будет запущен один раз
  // аналогично componentDidMount()
  useEffect(() => {
    fetch('/test-url/todos')
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(2, result);
          setIsLoaded(true);
          setItems(result);
        },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
        (error) => {
          console.log(3);
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return (
      <div>Ошибка: {error.message}</div>
    );
  } else if (!isLoaded) {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src={logo}
            className="App-logo"
            alt="logo"
          />
          <p>Загрузка...</p>
        </header>
      </div>
    );
  } else {
    return (
      <div className="App">
        <header className="App-header">
          {items && (
            <ul>
              {items.map((item) => (
                <li key={item.title}>
                  {item.title}{' '}
                  {item.description}
                </li>
              ))}
            </ul>
          )}
        </header>
      </div>
    );
  }
}

export default App;
