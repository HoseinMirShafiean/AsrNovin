import { Box, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ThirdProduct } from "../../DTO/products";


const dot = [
    {
        id: 0,
        title: ThirdProduct.cards.one.title,
        className: 'ImageColorInProuductsMarginRight firstCardInProducts ImageColorInProuducts',
        route: ThirdProduct.cards.one.route
    },
    {
        id: 1,
        title: ThirdProduct.cards.two.title,
        className: 'ImageColorInProuductsMarginLeft firstCardInProducts ImageColorInProuducts',
        route: ThirdProduct.cards.two.route
    },
    {
        id: 2,
        title: ThirdProduct.cards.three.title,
        className: 'ImageColorInProuductsMarginRight firstCardInProducts ImageColorInProuducts',
        route: ThirdProduct.cards.three.route
    },
    {
        id: 3,
        title: ThirdProduct.cards.four.title,
        className: 'ImageColorInProuductsMarginLeft firstCardInProducts ImageColorInProuducts',
        route: ThirdProduct.cards.four.route
    },
]

export default function Cards() {
    return (
        <Grid container className="BoxInCardsproducts">
            {dot.map((item) => (
                <Grid item>
                    <ItemCard item={item} />
                </Grid>
            ))}
        </Grid>
    )
}

const ItemCard = (props) => {
    const { item } = props
    const navigate = useNavigate();
    const handeClick = (route) => {
        navigate(route);
    };

    return (
        <Grid item className={item.className}>
            <Box className="ImageColorInProuducts cursor"
            onClick={() => {
                handeClick(item.route);
            }} >
            </Box>
            <h3 className="TitleInCardsproducts">{item.title}</h3>
        </Grid>
    )
}
