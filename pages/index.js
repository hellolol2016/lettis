import Head from 'next/head'
import Image from 'next/image'
import LettuceForm from '../lib/LettuceForm'
import styles from '../styles/Home.module.css'
import SearchForm from '../lib/SearchForm'
import {Button, Center, HStack, Text, VStack} from '@chakra-ui/react'
import farm from '../public/lettis.jpg'
import Link from 'next/link'
export default function Home() {

  return (
    <VStack>
      <Text fontSize={50} fontWeight={600}>Welcome to Lettis</Text>
      <Text fontSize={20}>The premiere lettuce database</Text>
      <img src={'https://i.ytimg.com/vi/KTcKy_6TKk0/maxresdefault.jpg'} width={"50%"} />
      <HStack>
        <Link href="/create">Create your own lettuce!</Link>
        <Link href="/lookinforlettuce"> </Link>
      </HStack>
      </VStack>
    )
}
