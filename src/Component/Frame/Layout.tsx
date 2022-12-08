import Bar from './bar';
import { Outlet } from 'react-router-dom';
import Container from '@mui/material/Container';

export default function Layout() {

    return (

        <>
            <Bar />
            <main>

                <Container fixed>
                    <Outlet />
                </Container>
            </main>
            <footer>
                
            </footer>
        </>

    )

}