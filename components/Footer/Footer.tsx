

import { PAGE_URL } from '@/constant'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ItemBox, Layout } from './Footer.styled'

interface FooterItem {
  title: string
  url: string
 
}

const Footer = () => {
  const footerItem: FooterItem[] = [
    {
      title: '체크리스트',
      url: `${PAGE_URL.CHECKLIST}`,
     
    },
    {
      title: '서랍함',
      url: `${PAGE_URL.COLLECTION_BUDGET}`,
     
    },
    {
      title: '홈',
      url: `${PAGE_URL.HOME}`,
      
    },
    {
      title: '커뮤니티',
      url: `${PAGE_URL.COMMUNITY}`,
      
    },
    {
      title: '설정',
      url: `${PAGE_URL.MYPAGE}`,
      
    },
  ]

  const pathname = usePathname()

  const isRouteActive = (url: string) => !!pathname?.includes(url)

  return (
    <Layout>
      {footerItem.map((item) => {
        return (
          <Link href={item.url} key={item.title}>
            <ItemBox>
          
             
            </ItemBox>
          </Link>
        )
      })}
    </Layout>
  )
}

export default Footer