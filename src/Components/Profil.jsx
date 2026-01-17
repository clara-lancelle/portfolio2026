import bannerPNG from "../assets/banner.png";

export default function Profil() {
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
