import React from 'react'

export const Footer = () => {
    return (
    <footer className="page-footer">
        <div className="footer-copyright">
          <div className="container">
            Copyright © 1995-{new Date().getFullYear()} 
          <a className="grey-text text-lighten-4 right" href="http://yatseyko.com/">Alex Yatseyko</a>
          </div>
        </div>
      </footer>
    )
}
