import ReactDOM from "react-dom/client"; // ✅ Важно!

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
   <BrowserRouter>
    <AuthProvider>
     <Provider store={store}>
        <App />
      </Provider>
    </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
