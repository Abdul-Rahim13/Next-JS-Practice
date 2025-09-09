import React, { Suspense } from 'react'
import Page from '../jokeproject/jokes/page'
import LoadingAnimation from '../(users)/LoadingAnimation'

export default function MyPage() {
  return (
    <div className="min-h-screen grid grid-cols-2 gap-3">

      <div className="flex justify-center items-center bg-gray-100">
        <p className="max-w-md text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          necessitatibus deleniti reprehenderit architecto alias neque natus
          libero, aut dolor voluptatem sequi, cupiditate id fugit ea illo
          quibusdam non officia. Neque!
        </p>
      </div>

      <div className="flex justify-center items-center bg-white">
        <Suspense fallback={<LoadingAnimation />}>
          <Page />
        </Suspense>
      </div>
    </div>
  )
}
