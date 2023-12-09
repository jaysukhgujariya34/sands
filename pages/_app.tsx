
import '../styles/layout/slider.scss';
import '../styles/layout/header.scss';
import '../styles/layout/product.scss';
import '../styles/layout/checkout.scss';
import '../styles/layout/feedback.scss';
import '../styles/layout/newproduct.scss';
import '../styles/layout/newsletter.scss';
import '../styles/layout/service.scss';
import '../styles/layout/footer.scss';
import '../styles/layout/whislist.scss';
import '../styles/layout/cart.scss'
import '../styles/layout/category.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
