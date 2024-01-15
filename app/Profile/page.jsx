"use client"
import Link from "next/link";
import './profile_style.scss';
const Profile = () => {
  const accessToken = localStorage.getItem('accessToken');
  //redirect logged in user
  function redirect() {
    const user_id = localStorage.getItem('userId')
    window.location.href = `/Profile/${user_id}`;

  }
  if (accessToken === null) {
    return(
      <main>
        <div>
            <h4>Not logged in</h4>
            <Link href="/Account">Login or Signup</Link>
        </div>
      </main>
    )
  } else {    
      redirect();
  }
}

export default Profile
