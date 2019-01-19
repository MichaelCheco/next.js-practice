import Link from 'next/link'
import styled from 'styled-components'
const Div = styled.div`
    border: 2px solid red;
`
const Header = props => (
    <Div>
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
    </Div>
)

export default Header