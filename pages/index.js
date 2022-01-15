import Head from 'next/head'
import Image from 'next/image'
import CarForm from '../lib/CarForm'
import styles from '../styles/Home.module.css'
import SearchForm from '../lib/SearchForm'
export default function Home() {
  return (
  
    <div>
      <h1>Create a Car</h1>
      <CarForm />
      <h1>Search</h1>
      <SearchForm />
      </div>
  
    )
}
