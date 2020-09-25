import tourImage from '../images/tour.png';
import courseImage from '../images/course.png';
import cultureImage from '../images/culture.png';
import festaImage from '../images/festa.png';
import houseImage from '../images/house.png';
import leportsImage from '../images/leports.png';
import shoppingImage from '../images/department.png';
import FoodImage from '../images/food.png';

const categoryCode = [
    {
        type: 12,
        name: "관광지",
        image: tourImage
    },
    {
        type: 14,
        name: "문화",
        image: cultureImage
    },
    {
        type: 15,
        name: "축제",
        image: festaImage 
    },
    {
        type: 25,
        name: "코스",
        image: courseImage
    },
    {
        type: 28,
        name: "레포츠",
        image: leportsImage
    },
    {
        type: 32,
        name: "숙박",
        image: houseImage
    },
    {
        type: 38,
        name: "쇼핑",
        image: shoppingImage
    },
    {
        type: 39,
        name: "음식점",
        image: FoodImage
    }
];
export default categoryCode;
export const getCategory = (type) => {
    return categoryCode.find(category => category.type == type).name;
}