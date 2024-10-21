import React from 'react';

export default function() {
    const date = new Date();
  return (
    <footer>
         CopyRight &copy; {date.getFullYear()}
    </footer>
  )
}
