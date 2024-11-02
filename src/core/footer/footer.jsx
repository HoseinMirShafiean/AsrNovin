import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Box, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import siteLogo from '../../image/siteLogo.jpg';


function CreateData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    CreateData('Steuerungsbau GmbH', "Contact", "تابلوی فرمان آسانسور های هیدرولیک", "آیا سقوط آسانسور امکان پذیر است؟"),
    CreateData('82166 Gräfelfing', "Technical support", "تابلوی فرمان آسانسور های کششی", "استانداردهای پله برقی"),
    CreateData('Phone: +49 89 - 898 66 - 0', "Locations", "موتور آسانسور"),
    CreateData('', "", "لوازم جانبی آسانسور",),
    CreateData('', "", "پکیج کامل آسانسور"),
    CreateData('', "", "برق اضطراری آسانسور",),
];



function Footer(name, calories, fat, carbs, protein) {
    return (
        <Box className="footerBox">
            <TableContainer className="tableInFooter">
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow className="tableRowInFooter">
                            <TableCell align="right">عصر نوین</TableCell>
                            <TableCell align="right">تماس با عصرنوین&nbsp;</TableCell>
                            <TableCell align="right">محصولات&nbsp;</TableCell>
                            <TableCell align="right">مقالات&nbsp;</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell className='lineHeight' component="th" scope="row" align="right">{row.name}</TableCell>
                                <TableCell className='lineHeight' align="right">{row.calories}</TableCell>
                                <TableCell className='lineHeight' align="right">{row.fat}</TableCell>
                                <TableCell className='lineHeight' align="right">{row.carbs}</TableCell>
                                <TableCell className='lineHeight' align="right">{row.protein}</TableCell>
                            </TableRow>
                        ))}
                        <h5 className="socialInFooter">
                            Find us on Social Media
                        </h5>
                        <InstagramIcon className="socialIconInFooter" />
                        <TelegramIcon className="socialIconInFooter" />
                        <WhatsAppIcon className="socialIconInFooter" />
                    </TableBody>
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