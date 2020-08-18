export default function Login() {
  return (
    <div className="login-holder">
      <div className="login-container">
        <h1>Login to November Cloud</h1>
        <form onSubmit={() => {}}>
          <div className="login-field">
            <input
              type="email"
              placeholder="Email"
              className="text-field"
              autoCorrect="off"
              autoComplete="off"
              spellCheck={false}
            />
          </div>
          <div className="login-field">
            <input
              type="password"
              placeholder="Password"
              className="text-field"
              autoCorrect="off"
              autoComplete="off"
              spellCheck={false}
            />
          </div>
          <div className="login-field">
            <input type="submit" className="btn btn-primary" value="Login" />
          </div>
        </form>
      </div>
    </div>
  );
}
