import DetailCategory from "../../pages/DetailCategory";
import Home from "../../pages/Home";
import MealsDetail from "../../pages/MealsDetail";

const list = [
    {
        path: "/",
        name: "HOME",
        component: Home,
    },
    {
        path: "/detail-category",
        name: "DETAIL CATEGORY",
        component: DetailCategory,
    },
    {
        path: "/meals-detail",
        name: "MEALS DETAIL",
        component: MealsDetail,
    },
];

export default list