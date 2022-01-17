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
    <>
<Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Lettis" />
        <meta name="author" content="Dennis Wang" />
        <link rel="shortcut icon" href="/lettis.png" type="image/x-icon" />
        <meta property="og:site_name" content="Lettis" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="../public/lettis.jpg" />
        <title>Lettis</title>
      </Head>
    <VStack>
      <Text fontSize={50} fontWeight={600}>Welcome to Lettis</Text>
      <Text fontSize={20}>The premiere lettuce database</Text>
      <img src={'https://i.ytimg.com/vi/KTcKy_6TKk0/maxresdefault.jpg'} width={"50%"} />
      <HStack>
        <Link href="/create"><Button href="/create">Create your own lettuce!</Button></Link>
        <Link href="/lookinforlettuce" href="/lookinforlettuce"><Button>Browse all lettuce</Button></Link>
      </HStack>
      </VStack>
      </>
    )
}
