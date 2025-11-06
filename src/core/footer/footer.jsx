import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Grid } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import siteLogo from '../../image/siteLogo.jpg';
import { footer } from '../DTO/footer';

const dot = [
  { id: 0, title: footer.cards.one.title, route: footer.cards.one.route },
  { id: 1, title: footer.cards.two.title, route: footer.cards.two.route },
  { id: 2, title: footer.cards.three.title, route: footer.cards.three.route },
  { id: 3, title: footer.cards.four.title, route: footer.cards.four.route },
  { id: 4, title: footer.cards.five.title, route: footer.cards.five.route },
  { id: 5, title: footer.cards.six.title, route: footer.cards.six.route },
  { id: 6, title: footer.cards.seven.title, route: footer.cards.seven.route },
];

export default function Footer() {
  const navigate = useNavigate();
  const handelOnClick = (route) => {
    navigate(route);
  };

  return (
    <Grid
      container
      className="footerBox"
      sx={{
        width: "100vw",
        maxWidth: "100vw",
        backgroundColor: "#f1f1f1",
        textAlign: "center",
        py: { xs: 3, sm: 5 },
      }}
    >
      <Grid item xs={12} className="rowFooterBox CenterItem">
        {dot.map((item) => (
          <h6
            key={item.id}
            className="rowFooter cursor"
            onClick={() => handelOnClick(item.route)}
            style={{
              margin: "8px 12px",
              fontFamily: "Vazirmatn, sans-serif",
              fontWeight: 500,
              color: "#333",
              cursor: "pointer",
            }}
          >
            {item.title}
          </h6>
        ))}
      </Grid>

      <Grid item xs={12} className="CenterItem widthSocial">
        <h5
          className="socialInFooter"
          style={{
            fontFamily: "Vazirmatn, sans-serif",
            fontWeight: 600,
            color: "#1976d2",
            marginBottom: "0.5rem",
          }}
        >
          شبکه های اجتماعی
        </h5>
      </Grid>

      <Grid item xs={12} className="CenterItem widthSocialBorder">
        <InstagramIcon className="socialIconInFooter" sx={{ mx: 1, fontSize: 30, color: "#E1306C" }} />
        <TelegramIcon className="socialIconInFooter" sx={{ mx: 1, fontSize: 30, color: "#0088cc" }} />
        <WhatsAppIcon className="socialIconInFooter" sx={{ mx: 1, fontSize: 30, color: "#25D366" }} />
      </Grid>

      <Grid
        item
        xs={12}
        className="bottomFooterBox"
        sx={{
          borderTop: "1px solid #ccc",
          mt: 3,
          pt: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: 2, sm: 4 },
          flexWrap: "wrap",
        }}
      >
        <a className="linkInFooter" href="/" style={{ textDecoration: "none", color: "#555" }}>
          Imprint
        </a>
        <a className="linkInFooter" href="/" style={{ textDecoration: "none", color: "#555" }}>
          Data privacy
        </a>
        <a className="logoFooter" href="/">
          <img
            className="nav-logo"
            src={siteLogo}
            alt="Logo"
            style={{ width: "60px", borderRadius: "50%" }}
          />
        </a>
      </Grid>
    </Grid>
  );
}
