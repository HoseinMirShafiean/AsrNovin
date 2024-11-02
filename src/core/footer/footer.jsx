import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Box, Grid, Table, TableContainer } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import siteLogo from '../../image/siteLogo.jpg';
import { footer } from '../DTO/footer';


const dot = [
    {
        id: 0,
        title: footer.cards.one.title,
        route: footer.cards.one.route
    },
    {
        id: 1,
        title: footer.cards.two.title,
        route: footer.cards.two.route
    },
    {
        id: 2,
        title: footer.cards.three.title,
        route: footer.cards.three.route
    },
    {
        id: 3,
        title: footer.cards.four.title,
        route: footer.cards.four.route
    },
    {
        id: 4,
        title: footer.cards.five.title,
        route: footer.cards.five.route
    },
    {
        id: 5,
        title: footer.cards.six.title,
        route: footer.cards.six.route
    },
    {
        id: 6,
        title: footer.cards.seven.title,
        route: footer.cards.seven.route
    },
]

function Footer() {
    const navigate = useNavigate();
    const handelOnClick = (route) => {
        navigate(route)
    };

    return (
        <Box className="footerBox">
            <TableContainer className="tableInFooter">
                <Table aria-label="simple table">
                    {dot.map((item, index) => (
                        // <Grid container className='rowFooterBox'>
                        <h6
                            className='rowFooter'
                            onClick={() => {
                                handelOnClick(item.route)
                            }}>
                            {item.title}
                        </h6>
                        // </Grid>
                    ))}
                    <h5 className="socialInFooter">
                        Find us on Social Media
                    </h5>
                    <InstagramIcon className="socialIconInFooter" />
                    <TelegramIcon className="socialIconInFooter" />
                    <WhatsAppIcon className="socialIconInFooter" />
                </Table>
            </TableContainer>
            <Grid container className="bottomFooterBox">
                <a className="linkInFooter" href="/">Imprint</a>
                <a className="linkInFooter" href="/">Data privacy</a>
                <a className="logoFooter" href="/"><img className='nav-logo' src={siteLogo} alt="Logo" /></a>
            </Grid>
        </Box>
    );
};

export default Footer;