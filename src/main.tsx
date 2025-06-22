import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// ✅ Add these:
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext'; 

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
);
