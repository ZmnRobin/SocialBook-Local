import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Nav() {
  return (
    <Navbar className="bg-primary navb">
      <Container>
        <Navbar.Brand href="#"><h2 className='text-white'>SocialBook</h2></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className='text-white'>
            Signed in as : <a href="#" className='text-white' style={{textDecoration:'none'}}>Random User</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Nav;