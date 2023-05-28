import './basic.css'

const Basic = () => {
  return (
    <>
      <header>
        <nav>
          <div className="container">
            <div className="logo">TechDex</div>
            <ul className="navbar">
              <li><a href="#">Home</a></li>
              <li><a href="#">Login</a></li>
            </ul>
          </div>
        </nav>
      </header>

      <main>
        <section id="landing-page">
          <div className="container">
            <h1>Welcome to TechDex</h1>
            <p>Some introductory text here.</p>
          </div>
        </section>

        <section id="login-page">
          <div className="container">
            <h2>Login</h2>
            <form>
              <input type="text" placeholder="Username" />
              <input type="password" placeholder="Password" />
              <button type="submit">Login</button>
            </form>
          </div>
        </section>
        <section id="tech-notes-page">
          <div className="container">
            <h2>Tech Notes List</h2>
            <ul className="notes-list">
              <li>Note 1</li>
              <li>Note 2</li>
              <li>Note 3</li>
            </ul>
          </div>
        </section>
        {/* <section id="add-user-page">
          <div className="container">
            <h2>Add New User</h2>
            <form>
              <input type="text" placeholder="Username" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button type="submit">Add User</button>
            </form>
          </div>
        </section> */}

        <section id="add-note-page">
          <div className="container">
            <h2>Add Note</h2>
            <form>
              <input type="text" placeholder="Note Title" />
              <textarea placeholder="Note Content"></textarea>
              <input type="text" placeholder="Assignee" />
              <button type="submit">Add Note</button>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>&copy; 2023 TechDex. All rights reserved.</p>
        </div>
      </footer>
    </>

  )
}

export default Basic