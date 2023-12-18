import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import 'antd/dist/reset.css';
import Layout from '@/components/Layout'
//入口文件
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
       <Component {...pageProps} />
    </Layout>
  )
}
