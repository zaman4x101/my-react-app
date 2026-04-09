// import { useState } from 'react'
import { Suspense } from 'react';
import './App.css'
import Countries from './components/Countries/Countries'

const countriesPromise = fetch('https://openapi.programming-hero.com/api/all').then(res => res.json());

export default function App() {
  return (
    <>
      <Suspense fallback={<p>They are coming</p>}>
        <Countries countriesPromise={countriesPromise} />
      </Suspense>
    </>
  )
}