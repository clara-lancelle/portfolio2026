import bannerPNG from "../../assets/banner2.png";

export default function Banner() {
    return (
        <div className="w-full overflow-hidden">
            <img
                src={bannerPNG}
                alt="Banner animée"
                className="w-full h-full object-cover"
            />
        </div>
    );
}
