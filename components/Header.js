import Link from 'next/link'
import styled from 'styled-components'
import Router from 'next/router'
import NProgress from 'nprogress'
Router.onRouteChangeStart = () => {
    NProgress.start()
    console.log('on route change start triggere')
}
Router.onRouteChangeComplete = () => {
    NProgress.done()
    console.log('on route change complete triggere')

}
Router.onRouteChangeError = () => {
    NProgress.done()
    console.log('on route change error triggere')

}
const Div = styled.div`
    display: grid;
    grid-template-columns: 1fr 8fr;
`
const A = styled.a`
color: red;
cursor: pointer;
`
const Nav = styled.div`
display: grid;
justify-items: center;
grid-column: 2;
grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
`
const Header = props => (
    <Div>
        <Nav>

        <Link href="/"><A>Home</A></Link>
        <Link href="/about"><A>About</A></Link>
        <Link href="/contact"><A>Contact</A></Link>
        <Link href="/about"><A>About</A></Link>
        </Nav>
    </Div>
)

export default Header