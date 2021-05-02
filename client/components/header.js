import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Header = () => {
  const { user, repository } = useParams() 

  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6 text-black font-bold">
      <div id="repository-name">{repository || user || 'Welcome to us'}</div>
      <div className="flex justify-end">
      {user && (
        <Link to="/" id="go-back" className="mr-3">
        Go Home
        </Link>
      )}
      {repository && (
        <Link to={`/${user}`} id="go-repository-list">
        Go Repository List
        </Link>
      )}
      </div>
    </nav>
  )
}

Header.propTypes = {}

export default React.memo(Header)


