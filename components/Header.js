import React from "react";
import Link from "next/link";


const Header = (props) => {
  return (
        <>
        <div className="flex bg-green-600 px-4 items-center justify-between">
            <h2>{props.user}</h2>
            <h1>This is home page.</h1>
            <div className="flex gap-8">
                <Link href="About">About</Link>
                <Link href="Info">Info</Link>
                <Link href="Career">Career</Link>
                <Link href="Contact">Contact</Link>
            </div>
        </div>
        </>
  )
}

export default Header