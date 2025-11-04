import { FoodCard } from "../components/FoodCard/FoodCard";

export const News = () => (
    <div>
        <h2>Latest News</h2>
        <FoodCard
            title="New Seasonal Menu"
            description="Explore our new seasonal dishes made with fresh, local ingredients."
            imageSrc="/images/seasonal-menu.jpg"
        />
        <FoodCard
            title="Chef's Special Event"
            description="Join us for a special dining experience with our head chef."
            imageSrc="/images/chefs-special.jpg"
        />
    </div>
);