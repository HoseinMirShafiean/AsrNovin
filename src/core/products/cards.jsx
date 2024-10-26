import { Box, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { products } from "../DTO/products";

const dot = [
    {
        id: 0,
        title: products.cards.one.title,
        route: products.cards.one.route
    },
    {
        id: 1,
        title: products.cards.two.title,
        route: products.cards.two.route
    },
    {
        id: 2,
        title: products.cards.three.title,
        route: products.cards.three.route
    },
    {
        id: 3,
        title: products.cards.four.title,
        route: products.cards.four.route
    },
    {
        id: 4,
        title: products.cards.five.title,
        route: products.cards.five.route
    },
    {
        id: 5,
        title: products.cards.six.title,
        route: products.cards.six.route
    },
    {
        id: 6,
        title: products.cards.seven.title,
        route: products.cards.seven.route
    },
]

export default function Cards() {
    return (
        <Grid container className="containerCardsProducts">
            {dot?.map((item) => (
                <Grid item key={item}>
                    <ItemCard item={item} />
                </Grid>
            ))}
        </Grid>
    )
}

const ItemCard = (props) => {
    const navigate = useNavigate();
    const handleClickCards = (route) => {
        navigate(route);
    };

    const { item } = props
    return (
        <Grid item className={item.className}>
            <Box className="cardsBox borderRadius"
                onClick={() => {
                    handleClickCards(item.route);
                }} >
                </Box>
            <h3 className="subjectInCardproducts">{item.title}</h3>
        </Grid>
    )
}