import Home from './Home';
import { Routes, Route } from 'react-router-dom'
import Profil from './Profil';


function App() {
  return (
    <>
      <html>
        <head>
          <meta charSet="utf-8" />
          <title>Server Rendered App</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css" />
        </head>
        <body>
          <Routes>
            <Route path="/" element={<Home name="Sammy" />} />
            <Route path='/profil' element={<Profil />} />
          </Routes>
          <script src="/build/client.entry.js" />
        </body>
      </html>
    </>
  );
}

export default App;
