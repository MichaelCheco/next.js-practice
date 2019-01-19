import Link from 'next/link'
import styled from 'styled-components'
const Div = styled.div`
    border: 2px solid blue;
    display: grid;
    grid-template-columns: 1fr 8fr;
`
const A = styled.a`
color: red;
cursor: pointer;
`
const Nav = styled.div`
border: 2px solid red;
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
        <Link href="/"><A>Home</A></Link>
        <Link href="/about"><A>About</A></Link>
        </Nav>
    </Div>
)

export default Header