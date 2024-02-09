"use client"

import { UserButton, useOrganization } from "@clerk/nextjs"
import { SearchInput } from "./search-input"
import { InviteButton } from "./invite-button"

const Navbar = () => {
  const organization = useOrganization();
  return (
    <div
        className="flex items-center gap-x-4 p-5 bg-green-500"
    >
      <div className="hidden lg:flex lg:flex-1">
        <SearchInput/>
      </div>
      {
        organization &&(
          <InviteButton/>
        )
      }
      <UserButton/>
    </div>
  )
}

export default Navbar