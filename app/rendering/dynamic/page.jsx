import React from 'react'

//if any of them present in the page then its dynamic page -> searchParams(), headers(), cookies(), fetch(), useSearchParamas()

// to make page forcefully dynamic add bellow line
export const dynamic = "force-dynamic"

function page() {
  return (
    <div>page</div>
  )
}

export default page